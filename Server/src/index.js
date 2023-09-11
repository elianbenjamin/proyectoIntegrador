const express = require('express')
const server = express()
const route = require('./routes/index')
const PORT = 3001;
const morgan = require('morgan')

server.use(express.json())
server.use(morgan('dev'))


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });


 server.use("/rickandmorty", route)

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);})


/* res.setHeader('Access-Control-Allow-Origin', '*'); */





