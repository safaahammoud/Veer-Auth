const express = require('express');
const cors = require('cors');
const { get } = require('./data/user.js');
const { isValidPassword, createJSONToken } = require('./utils/auth.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors({
  origin: '*', //specify origin for security in BE real app, this is just to simulate the BE 
  methods: ['POST, GET'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let user = null;

  try {
    user = await get(email);
  } catch (error) {
    return res.status(401).json({ message: error.message })
  }

  const response = await isValidPassword(password, user.password);

  if(response) {
      const jwtToken = createJSONToken(email);
      
      res.status(200).jsonp({ token: jwtToken });
    } else {
      return res.status(422).json({
        message: 'Invalid user credentials',
        errors: { credentials: 'Invalid email or password entered.' }
      });
    }
});

app.listen(port);
