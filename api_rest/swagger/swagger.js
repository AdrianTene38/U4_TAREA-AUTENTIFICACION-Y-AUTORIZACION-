const swaggerJsDoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API REST - Algoritmos JA',
      version: '1.0.0',
      description: 'API REST',
      contact: {
          name: 'Algoritmos JA'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Server'
      },
    ],
  },
  apis: ['./network/routes.js']
};

const specs = swaggerJsDoc(options);

module.exports = specs;