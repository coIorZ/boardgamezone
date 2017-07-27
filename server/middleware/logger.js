import { v4 } from 'uuid';
import logger from '../lib/logger.js';

export default (req, res, next) => {
  const rEnd = res.end.bind(res);
  req._reqStartTime = new Date();

  req.log = wrapReqId(logger)(v4());
  
  res.end = (chunk, encoding) => {
  //res.on('finish', () => {
    const { browser, version, isMobile } = req.useragent;
    const sc = res.statusCode.toString();
    const resTime = new Date() - req._reqStartTime;
    req.log.trace(
      `\n${colors.cyan + req.method} ${colors.yellow + req.originalUrl}` +
      `\n${colors.cyan}referrer ${colors.yellow + req.get('Referrer')}` +
      `\n${colors.cyan + browser + (isMobile ? ' Mobile' : '')}/${version} ` +
      `${statusCodeColors[sc[0]] + sc} - ` +
      `${colors[resTime > 200 ? 'red' : 'cyan'] + resTime + colors.reset} ms`, 
      null
    );
    rEnd(chunk, encoding);
  };

  next();
};

const colors = {
  reset  : '\x1b[0m',
  green  : '\x1b[32m',
  yellow : '\x1b[33m',
  red    : '\x1b[31m',
  cyan   : '\x1b[36m'
};

const statusCodeColors = {
  2 : colors.green,
  3 : colors.yellow,
  4 : colors.red
};

function wrapReqId(logger) {
  return (id) => {
    return ['trace', 'debug', 'info', 'warn', 'error', 'fatal'].reduce((m, k) => {
      m[k] = makeLogFn(k, id, logger); 
      return m;
    }, {});
  };
}

function makeLogFn(key, id, logger) {
  return (...args) => {
    args.splice(0, 0, `${colors.green} ${id + colors.yellow + (args[args.length - 1] == null ? '' : '\n')}`);
    logger[key].apply(logger, args);
  };
}
