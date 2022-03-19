const exec = require('util').promisify(require('child_process').exec);

const COMMAND = 'echo "Dummy command"';

module.exports = async () => {
  const output = await exec(COMMAND);

  if (output.code && output.code !== 0) {
    console.log(output);
    throw new Error(console.stderr);
  }
  return output.stdout;
};
