const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function (){
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('data', function (data) {
    console.log(data)
  });
  conn.on('connect', function () {
    console.log('Welcome to the Jungle!')
    conn.write('Name: JKA')
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');
connect();

module.exports = { connect };
