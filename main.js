'use strict';

// Polyfills
require('es6-promise').polyfill();
if (!GLOBAL.fetch) {
	GLOBAL.fetch = require('node-fetch');
}

// Exp… apex.js
var λ = require('apex.js');

// Useful stuff
λ.logger = require('@financial-times/n-logger').default;
λ.raven = require('@financial-times/n-raven-wrapper');

λ.info({ event: 'LAMBDA_START', nodeVersion: process.version });

module.exports = λ;
