#!/usr/bin/env babel-node
"use strict";
// Command line handler - sts.js

import stsinit from './init.js';
const init = new stsinit(null);

init.getServerJar();
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
