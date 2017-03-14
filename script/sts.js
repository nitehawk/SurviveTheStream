// Command line handler - sts.js

// Get our actual arguments
var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case 'configure':
  case 'config':
  case 'conf':
    console.log("Configuring STS");
    break;
  case 'init':
  case 'initialize':
    console.log("Initializing directories..");
    break;
  default:
    console.log("Err... not sure what you are trying to do there...");
}
