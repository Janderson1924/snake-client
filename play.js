const net = require('net');
// const { stdin } = require('node:process');
const { connect } = require('./client.js')

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  };
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

setupInput();

