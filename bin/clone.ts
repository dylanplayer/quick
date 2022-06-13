import run from './run';
import { URL } from 'url';

const clone = (urlString:string, location='~/src/') => {
  const url = new URL(urlString);

  const folderPath = location + url.pathname.split('/')[1];
  const repoName = url.pathname.split('/')[2].replace('.git', '');
  const repoPath = `${folderPath}/${repoName}`;

  try {
    run(`mkdir -p ${folderPath} && cd ${folderPath} && git clone ${url.href}`);
    console.log(`Successfully cloned ${repoName} into ${repoPath}`);
  } catch (err) {
    console.log('quick: unable to clone repository');
  }
  console.log(`\ncd ${repoPath}`);
}

export default clone;
