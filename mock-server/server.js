const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const data = require('./data');
const dbFilePath = path.join(__dirname, 'db.json');
// generate db.json file
fs.writeFileSync(dbFilePath, JSON.stringify(data), 'utf-8');

const router = jsonServer.router(dbFilePath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);

const PORT = 3004;
server.listen(PORT, () => {
    console.log(`JSON Server is running on ${PORT}`);
});