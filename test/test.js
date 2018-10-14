'use strict';
const assert = require('assert');
const Sudp = require('../lib/sudp');

const eq = assert.strictEqual;

describe('Semi User Datagram Protocol', () => {

	describe('Initializiing SUDP', () => {
		it('Error on options', function() {
            assert.throws(() => Sudp('sd'), /Option parameter must be Object./)
        });
    });
});