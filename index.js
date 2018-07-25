/**
 * Omni Layer JSON-RPC client
 * Extends Bitcoin JSON-RPC client bitcoin-core
 * requires Node.js 6.0 or later.
 *
 * @author Darren Chen
 */
'use strict';

const _ = require('lodash');
const BitcoinClient = require('bitcoin-core');
const Commands = require('./commands');

class OmniClient extends BitcoinClient {
    /**
     * Use super-constructor
     * @param opts see super
     */
    constructor(opts) {
        super(opts);
    }
}

/**
 * Add Omni methods to the existing Bitcoin Client
 */
Commands.forEach(method => {
    OmniClient.prototype[method] = _.partial(OmniClient.prototype.command, method.toLowerCase());
});

OmniClient.Commands = Commands;

module.exports = OmniClient;

