#! /usr/bin/env node
const { clone } = require('./scripts');

const argv = process.argv;
const command = argv[2];

if (command === 'clone') {
  try {
    const url = argv[3];
    clone(url);
  } catch (error) {
    console.log('quick: command missing repository URL');
  }
} else {
  console.log("quick: command not found");
}
