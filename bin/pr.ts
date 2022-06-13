import run from './run';

const pr = () => {
  const remoteURL = String(run(`git remote -v | awk '/fetch/{print $2}' | sed -Ee 's#(git@|git://)#https://#' -e 's@com:@com/@' -e 's%\.git$%%' | awk '/github/'`)).replace(/(\r\n|\n|\r)/gm, '');
  const branchName = String(run(`git symbolic-ref HEAD | cut -d"/" -f 3,4`)).replace(/(\r\n|\n|\r)/gm, '');
  const prURL = `${remoteURL}/compare/main...${branchName}`;

  run(`open ${prURL}`);
}

export default pr;
