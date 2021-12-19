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
/**
 * @openapi
 * /api/auth/signup:
 *   post:
 *     tags:
 *       - auth
 *     summary: signup
 *     description: signup with email, password
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: string
 *     parameters:
 *       - in: formData
 *         name: email
 *         description: email
 *         schema:
 *           type: string
 *         required: true
 *         default: abcde@gmail.com
 *       - in: formData
 *         name: password
 *         description: password
 *         schema:
 *           type: string
 *         required: true
 *         default: qwerasdf
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */