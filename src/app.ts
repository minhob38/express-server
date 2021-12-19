import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import { openapiSpecification, swaggerUi } from './config/swagger-config';

const app: express.Application = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api', routes);

export default app;
