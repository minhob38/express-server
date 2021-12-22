import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// open api document - https://swagger.io/specification/
// https://www.npmjs.com/package/express-jsdoc-swagger
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'api server',
      version: '1.0.0',
      description: 'api server specification',
    },
    host: 'localhost:8000',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
  apis: ['src/routes/auth-router.ts', 'src/routes/board-router.ts'],
};

const openapiSpecification = swaggerJsdoc(options);

export { openapiSpecification, swaggerUi };
