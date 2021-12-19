import http from 'http';
import app from './src/app';

const server: http.Server = http.createServer(app);
const port: number = 8000;

server.listen(port, () => console.log(`server connection: port ${port}`));
