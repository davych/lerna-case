'use strict';

const dcSettings = require('..');
const assert = require('assert').strict;

assert.strictEqual(dcSettings(), 'Hello from dcSettings');
console.info("dcSettings tests passed");
