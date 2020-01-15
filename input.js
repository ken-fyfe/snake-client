const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const handleUserInput = function() {
  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
  });
};
handleUserInput();

const setupInput = function() {
  stdin.resume();
  return stdin;
};

module.exports = setupInput;