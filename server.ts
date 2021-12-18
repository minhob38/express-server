export {};

const http = require('http');
const app = require('./src/app');

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => console.log(`server connection: port ${port}`));
