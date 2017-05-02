import express from 'express';
import path from 'path';
import useragent from 'express-useragent';

import logger from './middleware/logger.js';
import routes from './routes';

const app = express();
app.use(useragent.express());
app.use(logger);

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(8080, () => console.log('server is running at port 8080'));
