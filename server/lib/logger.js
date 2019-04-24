const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.timestamp(),
    winston.format.colorize(),
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
    })
  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: (message) => {
    logger.info(message.replace(/\n$/, ''));
  }
};
