const exec = require('util').promisify(require('child_process').exec);

const COMMAND =
  '/var/lib/haproxy/eos-scripts/check_hyperion.py -H localhost -p 7000';

module.exports = async () => {
  const output = await exec(COMMAND);

  if (output.code && output.code !== 0) {
    console.log(output);
    throw new Error(console.stderr);
  }
  return output.stdout;
};
