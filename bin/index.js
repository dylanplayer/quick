#! /usr/bin/env node
const { clone } = require('./scripts');

const argv = process.argv;

const command = argv[2];

if (command === 'clone') {
  const url = argv[3];
  clone(url);
} else {
  console.log("Quick command not found");
}
