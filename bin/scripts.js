const { URL } = require('url');

const run = (command, options={}) => {
  const childProcess = require('child_process');
  childProcess.spawn('<cmd>', [], { shell: true, detached: true });
  childProcess.execSync(command, options);
}

module.exports = {
  clone: (url) => {
    url = new URL(url);

    const folderPath = '~/src/' + url.pathname.split('/')[1];
    const repoName = url.pathname.split('/')[2].replace('.git', '');
    const repoPath = `${folderPath}/${repoName}`;

    try {
      run(`mkdir -p ${folderPath} && cd ${folderPath} && git clone ${url.href}`);
      console.log(`Successfully cloned ${repoName} into ${repoPath}`);
      console.log(`\ncd ${repoPath}`);
    } catch (error) {
      console.log(`quick: error while cloning repository`)
    }
  }
}
