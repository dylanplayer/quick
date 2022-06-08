#! /usr/bin/env node
const { clone, pr, push } = require('./scripts');

const argv = process.argv;
const command = argv[2];

if (command === 'clone') {
  try {
    const url = argv[3];
    clone(url);
  } catch (error) {
    console.log('quick: command missing repository URL');
  }
} else if (command === 'pr') {
  try {
    pr();
  } catch (error) {
    console.log('quick: unable to open pr');
  }
} else if (command === 'push') {
  try {
    if (argv[3]) {
      push(argv[3]);
    } else {
      push();
    }
  } catch (error) {
    console.log('quick: unable to push commit');
  }
} else {
  console.log('quick: command not found');
}
