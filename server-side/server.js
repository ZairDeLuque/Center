//Express Server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');

//Extras
const origins = ['http://localhost:4200'];

//Routers
const mainRouter = require('./express/api/routers/init.routes');
const credentialsRouter = require('./express/api/routers/credentials.routes');
const infoRouter = require('./express/api/routers/info.routes');

//Express app
const app = express();
const server = http.createServer(app);

//Cors Options
const corsOptions = {
    origin: origins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
    credentials: true
};

//Set uses of cors and body-parser
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

//Set Morgan Dev for development
app.use(morgan('dev'));

//Set routers
app.use(mainRouter);
app.use('/api/v1', credentialsRouter)
app.use('/api/v1/inside', infoRouter);

//Run
server.listen(3000, () => {
    console.log(`[INFO] Servidor iniciado correctamente.`);
});
