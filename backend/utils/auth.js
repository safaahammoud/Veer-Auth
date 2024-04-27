const { compare, hash, genSalt } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const JWTKEY = 'supersecret';

async function isValidPassword(password, storedPassword) {
    return compare(password, storedPassword)
}

function createJSONToken(email) {
    return sign({ email }, JWTKEY, { expiresIn: '24h' })
}

exports.createJSONToken = createJSONToken;
exports.isValidPassword = isValidPassword;