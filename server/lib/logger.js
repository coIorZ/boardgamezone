import { mapValues } from 'lodash';
import winston from 'winston';

const logLevel = process.env.LOG_LEVEL || 'info';

const customLevels = {
  trace : [5, 'white'],
  debug : [4, 'cyan'],
  info  : [3, 'green'],
  warn  : [2, 'yellow'],
  error : [1, 'red'],
  fatal : [0, 'red']
};

let logger = new (winston.Logger)({
  level      : logLevel,
  levels     : mapValues(customLevels, v => v[0]),
  colors     : mapValues(customLevels, v => v[1]),
  transports : [
    new (winston.transports.Console)({
      level       : 'trace',
      colorize    : true,
      prettyPrint : true,
      timestamp   : formatTimeStamp
    })
    //new (winston.transports.File)({ filename: 'somefile.log' })
  ]
});

export default logger;

function formatTimeStamp() {
  return `\n[${new Date().toLocaleString('cn', { hour12: false }).replace(/,/, '')}]`;
}

const rLog = logger.log.bind(logger);

logger.log = (...args) => {
  const len = args.length;
  if(len > 2) {
    args[1] = '\x1b[33m' + args[1];
    args[len - 2] = args[len - 2] + '\x1b[0m';
  }
  rLog.apply(this, args);
};
