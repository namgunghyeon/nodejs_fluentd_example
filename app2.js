const fluentTransport = require('fluent-logger').support.winstonTransport();
const winston = require('winston');
const config = {
  host: '192.168.56.116',
  port: 24224,
  timeout: 3.0
};
const logger = new (winston.Logger)({
    transports: [new fluentTransport('app.follow', config), new (winston.transports.Console)()]
});

logger.log('info', 'this log record is sent to fluent daemon');
logger.info('this log record is sent to fluent daemon');
