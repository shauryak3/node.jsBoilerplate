
/** ********************** Require Local modules ********************* */
const authentication = require('./authentication');
const encryption = require('./encryption');
const mailer = require('./mailer');
const codeGenerator = require('./codeGenerator');

module.exports = {
  authentication,
  encryption,
  mailer,
  codeGenerator,
};
