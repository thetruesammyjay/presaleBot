const express = require('express');
const { listenForPresaleBuys } = require('./services/solanaService');

const app = express();

// Start listening for $PUG presale buys
listenForPresaleBuys();

module.exports = app;