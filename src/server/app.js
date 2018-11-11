const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const constant = require('./constant');

const config = require('./config/config');

const logger = require('./config/logger');

const db = require('./config/db');

const accessLogger = logger.accessLogger;

const app = express();
app.use(cors());
app.use(morgan('combined', { stream: accessLogger.stream }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes'));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(config.express.port || 1234, () => console.log(`${constant.common.appName} webservice listening on port ${config.express.port}`));

module.exports = app;
