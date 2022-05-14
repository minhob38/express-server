import express from 'express';
import path from 'path';
import morgan from 'morgan';
import routes from './routes';
import pageRoutes from './routes/page-router';
import testRoutes from './routes/test-router';
import { errorHandler, notFoundHandler } from './middlewares/error-middleware';
import { openapiSpecification, swaggerUi } from './configs/swagger-config';

const app: express.Application = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRoutes);
app.use('/test', testRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api', routes);

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
