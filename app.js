const express = require('express'),
  constant = require('./constant'),
  bodyParser = require('body-parser'),
  cors = require('cors')
  logger = require('./config/logger'),
  morgan = require('morgan');

const accessLogger = logger.accessLogger;

const app = express();
app.use(morgan('combined', { stream: accessLogger.stream}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes'));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(constant.express.port || 1234, () =>
  console.log(`${constant.common.appName} webservice listening on port ${constant.express.port}`)
);

module.exports = app;