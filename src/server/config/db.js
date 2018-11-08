const mongoose = require("mongoose"),
  config = require("./config"),
  winston = require("./logger");

const logger = winston.logger;

const {
  db: { host, port, name }
} = config;

const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(connectionString);
logger.info(`Connected to database at ${connectionString}`);
