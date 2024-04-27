const { readData } = require('./utils');
const { NotFoundError } = require('../utils/errors');

async function get(email) {
    const storedData = await readData();

    if(!storedData.users?.length) {
        throw new NotFoundError('Could not find any users.');
    }

    const user = storedData.users.find((user) => user.email === email);

    if(!user) {
        throw new NotFoundError(`Could not find user for email ${email}`);
    }

    return user;
}

exports.get = get;