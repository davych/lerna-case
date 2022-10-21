'use strict';

const settings = require('..');
const assert = require('assert').strict;

assert.strictEqual(settings(), 'Hello from settings');
console.info("settings tests passed");
