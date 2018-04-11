'use strict';
// Karma.conf that reads an environment variable to decide which test to run.
module.exports = require('./create-karma-conf')(process.env.ANY_OBSERVABLE_TEST_PATH);
