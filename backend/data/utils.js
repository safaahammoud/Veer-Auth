const fs = require('node:fs/promises');

async function readData() {
    const data = await fs.readFile('users.json', 'utf8');

    return JSON.parse(data);
}

exports.readData = readData;