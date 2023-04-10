import { Command } from 'commander';
import inquirer from 'inquirer';
import packageJson from '../package.json';

export const runCli = () => {
  const program = new Command();

  program.name('my-cli').description('my-cli-template').version(packageJson.version);

  program.option('-v --version', packageJson.version);

  program.parse(process.argv);
};
