const net = require('net');
const { IP, PORT } = require('./constants.js');

/**
 * Establishes connection with the game server
 */
const connect = function (){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('data', function (data) {
    console.log(data)
  });
  conn.on('connect', function () {
    console.log('Welcome to the Jungle!')
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');

module.exports = { connect };