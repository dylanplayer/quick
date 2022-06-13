import run from './run';

const push = (message = 'quick commit') => {
  const branchName = String(run(`git symbolic-ref HEAD | cut -d"/" -f 3,4`)).replace(/(\r\n|\n|\r)/gm, '');

  run(`git add .`);
  run(`git commit -m "${message}"`);
  run(`git push origin ${branchName}`);
}

export default push;
