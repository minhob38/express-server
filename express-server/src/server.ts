import http from 'http';
import app from './app';

const server: http.Server = http.createServer(app);
const port: number = 8000;
console.log(process.env.NODE_ENV);
server.listen(port, () => console.log(`server connection: port ${port}`));

export default server;
