import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import useragent from 'express-useragent';
import compression from 'compression';
import favicon from 'serve-favicon';

import logger from './middleware/logger.js';
import routes from './routes';

const app = express();
const port = process.env.PORT || 8443;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.resolve(__dirname, 'favicon.ico')));
app.use(useragent.express());
app.use(logger);

app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, 'dist'));
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static(path.resolve(__dirname, 'node_modules', 'material-design-icons', 'iconfont')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.render('index.html');
});

app.use((err, req, res) => {
  req.log.error('unhandled error:', err);
  res.status(500).render('error.html');
});

https.createServer({
  key        : fs.readFileSync('key.pem'),
  cert       : fs.readFileSync('cert.pem'),
  passphrase : 'local'
}, app).listen(port, () => console.log(`app is running at port ${port}`));
