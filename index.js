
const express = require('express');
const app = express();

const swaggerJSDoc =require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')
// GET all users


const options={
    definition:{
        openapi :'3.0.0',
        info:{
            title: 'Node js API project for mongodb',
            version:'1.0.0'
        },
        servers:[
            {
               url: 'http://localhost:8080/'
            },
        ],
    },
    apis: ['./router/api/authRouter.js']
};

const swaggerSpec=swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

const port = 8080;
app.use(express.json());
app.use(require('./router'));
app.listen(port, () => {
    console.log("app is listening on " + port);
});