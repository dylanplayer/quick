const { URL } = require('url');

const run = (command, options={}) => {
  const childProcess = require('child_process');
  childProcess.spawn('<cmd>', [], { shell: true, detached: true });
  return childProcess.execSync(command, options);
}

module.exports = {
  clone: (url) => {
    url = new URL(url);

    const folderPath = '~/src/' + url.pathname.split('/')[1];
    const repoName = url.pathname.split('/')[2].replace('.git', '');
    const repoPath = `${folderPath}/${repoName}`;

    run(`mkdir -p ${folderPath} && cd ${folderPath} && git clone ${url.href}`);
    console.log(`Successfully cloned ${repoName} into ${repoPath}`);
    console.log(`\ncd ${repoPath}`);
  },
  pr: () => {
    const remoteURL = String(run(`git remote -v | awk '/fetch/{print $2}' | sed -Ee 's#(git@|git://)#https://#' -e 's@com:@com/@' -e 's%\.git$%%' | awk '/github/'`)).replace(/(\r\n|\n|\r)/gm, '');
    const branchName = String(run(`git symbolic-ref HEAD | cut -d"/" -f 3,4`)).replace(/(\r\n|\n|\r)/gm, '');
    const prURL = `${remoteURL}/compare/main...${branchName}`;

    run(`open ${prURL}`);
  },
  push: (message = 'quick commit') => {
    const branchName = String(run(`git symbolic-ref HEAD | cut -d"/" -f 3,4`)).replace(/(\r\n|\n|\r)/gm, '');

    run(`git add .`);
    run(`git commit -m "${message}"`);
    run(`git push origin ${branchName}`);
  }
}
