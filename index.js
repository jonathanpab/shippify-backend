const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

const testRoutes = require('./src/routes/general.routes')

// using as middleware
app.use('/', testRoutes)

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});