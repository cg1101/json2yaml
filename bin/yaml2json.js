#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const process = require('process');

const YAML = require('yaml');

const script = path.basename(process.argv[1]);

(async () => {
  if (process.argv.length !== 3) {
    console.error(`Usage: ${script} YAML`);
    process.exit(2);
  }
  const file = fs.readFileSync(process.argv[2], 'utf-8');
  const input = YAML.parse(file);
  console.log(JSON.stringify(input, null, 2));
})()
.catch(err => {
  console.error(err);
  console.error(`${script}: ${err}`);
  process.exit(1);
});
