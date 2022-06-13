import childProcess from 'child_process';

const run = (command:string, options={}) => {
  childProcess.spawn('<cmd>', [], { shell: true, detached: true });
  return childProcess.execSync(command, options);
}

export default run;
