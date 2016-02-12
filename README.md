# n-lambda
Like ft-next-express, but for λ

## Usage

```js
'use strict';

var λ = require('@financial-times/n-lambda');

exports.handle = λ(function(event) {
	return somethingThatReturnsAPromise()
	  .catch(function(err) {
	    if (/* err is a server (rather than a user) error */) {
	      λ.raven.captureError(err);
	    }
	    return Promise.reject(err);
	  });
});
```
