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
      `${colors.cyan + req.method} ${colors.yellow + req.originalUrl}` +
      `\n${colors.cyan}referrer ${colors.yellow + req.get('Referrer')}` +
      `\n${colors.cyan + browser + (isMobile ? ' Mobile' : '')}/${version} ` +
      `${statusCodeColors[sc[0]] + sc + colors.reset} - ` +
      `${colors[resTime > 200 ? 'red' : 'cyan'] + resTime + colors.reset} ms`, 
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
  cyan   : '\x1b[36m',
};

const statusCodeColors = {
  2 : colors.green,
  3 : colors.cyan,
  4 : colors.yellow,
  5 : colors.red,
};

const wrapReqId = logger => id => 
  ['trace', 'debug', 'info', 'warn', 'error', 'fatal'].reduce((m, k) => {
    m[k] = makeLogFn(k, id, logger); 
    return m;
  }, {});

const makeLogFn = (key, id, logger) => (...args) => {
  args[0] = `${colors.green + id + colors.yellow}\n` + args[0];
  logger[key].apply(logger, args);
};
