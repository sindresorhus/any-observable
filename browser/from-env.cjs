const process = require('node:process');
const createKarmaConf = require('./create-karma-conf.cjs');

// Karma loads config files via require(), so keep this file in CommonJS.
module.exports = createKarmaConf(process.env.ANY_OBSERVABLE_TEST_PATH);
