
/** ********************** Require Node modules ********************* */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const swaggerUi = require('swagger-ui-express');

/** ********************** Require Local modules ********************* */
const routers = require('./routes');
const { logger } = require('./utils');
const swaggerDocument = require('./swagger.json');
const { errorHandler, responseHandler } = require('./middlewares');

/** ********************** Varaiable Listing ********************* */
const app = express();
const router = express.Router();
const { port } = config.get('General');
const env = process.env.NODE_ENV || 'development';

// Router Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', router);
routers(router);

app.use(responseHandler);
app.use(errorHandler);

// Server Start
app.listen(port, (error) => {
    if (error) logger.error('Error while Application startup', error);
    else logger.info(`Application connected to ${env} environment at ${port} port`);
  });