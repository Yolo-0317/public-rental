const log4js = require("log4js");

const logConfig = {
  appenders: {
    'files': {
      type: 'file',
      filename: 'publicRental.log',
    }
  },
  categories: {
    default: {
      appenders: ['files'],
      level: 'ALL'
    }
  },
  disableClustering: true
}

log4js.configure(logConfig)
const logger = log4js.getLogger('YOLO');

module.exports = logger;