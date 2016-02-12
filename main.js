'use strict';

// Polyfills
require('es6-promise').polyfill();

// Exp… apex.js
var λ = require('apex.js');

// Useful stuff
λ.logger = require('@financial-times/n-logger').default;
λ.metrics = require('next-metrics');

if (!GLOBAL.fetch) {
	GLOBAL.fetch = require('node-fetch');
}

module.exports = λ;
