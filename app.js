const express = require("express"),
  constant = require("./constant");

const app = express();

app.use(require('./routes'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(constant.express.port || 1234, () =>
  console.log(`${constant.common.appName} webservice listening on port ${constant.express.port}`)
);