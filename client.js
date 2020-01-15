const net = require('net');
/*
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data',(data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: KRF');
  });

  conn.on('connect', () => {
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 1000);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 2000);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 3000);
    // setTimeout(() => {
    //   setInterval(() => {
    //     conn.write('Move: right');
    //   }, 100);
    // }, 4000);
  });

  return conn;
};

module.exports = connect;