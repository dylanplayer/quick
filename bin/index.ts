#!/usr/bin/env node
import clone from './clone';
import pr from './pr';
import push from './push';
import create from './create';

const argv = process.argv;
const command = argv[2];

if (command === 'clone') {
  try {
    const url = argv[3];
    if (argv[4]) {
      const location = argv[4];
      clone(url, location);
    } else {
      clone(url);
    }
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
} else if (command === 'create') {
  try {
    if (argv[3]) {
      if (argv[4] && argv[4] == '-p') {
        create(argv[3], true);
      } else {
        create(argv[3]);
      }
    } else {
      console.log('quick: must provide project name');
    }
  } catch (error) {
    console.log('quick: unable to create repo');
  }
} else {
  console.log('quick: command not found');
}
