// play.js

const connect = require('./client');
console.log('Connecting ...');
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      // \u0003 maps to ctrl+c input
      if (key === '\u0003') {
        process.exit();
      }
    });
  };
  handleUserInput();
  return stdin;
};

connect();
setupInput();