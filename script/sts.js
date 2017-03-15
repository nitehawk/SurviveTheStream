#!/usr/bin/env node
"use strict";
// Command line handler - sts.js

const init = require('../script/init.js');

// Get our current path so we can get back there if we move around
let pwd = process.cwd();

// Get our actual arguments
var myArgs = process.argv.slice(2);

// TODO: things to process:
// Configure - create 'live' config files from our templates
// Init - We should automatically do this step
//  Grabs MC Server jar and creates EULA.txt
// Pregen - Creates a number of worlds to use during a stream (optional)
// Run - Runs an STS session
