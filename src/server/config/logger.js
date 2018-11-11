const appRoot = require('app-root-path');
const winston = require('winston');

const generalOptions = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/application.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: winston.format.simple(),
    colorize: true
  }
};

const accessOptions = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/access.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  }
};

const generalLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.File(generalOptions.file)],
  exitOnError: false // do not exit on handled exceptions
});

const accessLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.File(accessOptions.file)],
  exitOnError: false // do not exit on handled exceptions
});

if (process.env.NODE_ENV !== 'production') {
  generalLogger.add(new winston.transports.Console(generalOptions.console));
}

accessLogger.stream = {
  write(message, encoding) {
    accessLogger.info(message);
  }
};

module.exports.logger = generalLogger;
module.exports.accessLogger = accessLogger;
