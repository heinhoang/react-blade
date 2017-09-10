const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');

const data = require('./data');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);
// generate data
server.post('/generate/:collection', function (req, res) {
    console.log(JSON.stringify(router));
    // db.object[req.params.collection] = data[req.params.collection];
    // db.write();
    // console.log(db);
    res.send(router);
});
server.use(router);

const PORT = 3004;
server.listen(PORT, () => {
    console.log(`JSON Server is running on ${PORT}`);
});