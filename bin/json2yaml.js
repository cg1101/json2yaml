#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const process = require('process');

const YAML = require('yaml');

const script = path.basename(process.argv[1]);

(async () => {
  if (process.argv.length !== 3) {
    console.error(`Usage: ${script} JSON`);
    process.exit(2);
  }

  const input = require(path.resolve(process.argv[2]));
  console.log(YAML.stringify(input, null, 2));
})()
.catch(err => {
  console.error(err);
  console.error(`${script}: ${err}`);
  process.exit(1);
});
