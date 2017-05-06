import express from 'express';
import path from 'path';
import useragent from 'express-useragent';

import logger from './middleware/logger.js';
import routes from './routes';

const app = express();
app.use(useragent.express());
app.use(logger);

app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, 'dist'));
app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.render('index.html');
});

app.listen(8080, () => console.log('server is running at port 8080'));
