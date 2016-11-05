const logger = require('fluent-logger');

logger.configure('app.follow', {
   host: '192.168.56.116',
   port: 24224,
   timeout: 3.0,
   reconnectInterval: 600000
});

logger.emit('label', {record: 'this is a log'});
