let connection;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      process.exit();
    } else if (key === 'w') {
      // console.log('pressed the "w" key');
      connection.write('Move: up');
    } else if (key === 'a') {
      // console.log('pressed the "a" key');
      connection.write('Move: left');
    } else if (key === 's') {
      // console.log('pressed the "s" key');
      connection.write('Move: down');
    } else if (key === 'd') {
      // console.log('pressed the "d" key');
      connection.write('Move: right');
    }
  });
};

const setupInput = function(conn) {
  connection = conn;
  stdin.resume();
  handleUserInput();
  return stdin;
};

module.exports = setupInput;