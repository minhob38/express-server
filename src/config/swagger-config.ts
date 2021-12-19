import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// open api document - https://swagger.io/specification/
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'api server',
      version: '1.0.0',
      description: 'api server specification',
    },
    host: 'localhost:8000',
  },
  apis: ['src/routes/auth-router.ts'],
};

const openapiSpecification = swaggerJsdoc(options);

export { openapiSpecification, swaggerUi };
