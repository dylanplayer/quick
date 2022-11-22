import run from './run';
import clone from './clone';

const create = (name:string, isPrivate=false) => {
  const location = String(run(`gh repo create ${name} ${isPrivate ? '--private' : '--public'}`));
  clone(location);
}

export default create;
