const shell = require('shelljs');
// pretty print
const chalk = require('chalk');
const readline = require('readline-sync');

let input = readline.question('Do you want to install react-querybuilder locally.[Y/n]?');

input = input.toLocaleLowerCase();
if (input === '' || input === 'yes' || input === 'y') {
  //* * helpers***//
  const success = (msg) => console.log(chalk.green(msg));
  const info = (msg) => console.log(chalk.cyan(msg));
  const error = (msg) => console.log(chalk.red(msg));
  const dullInfo = (msg) => console.log(chalk.dim.italic(msg));
  const greatSucess = (msg) => console.log(chalk.black.bgGreen.bold(msg));

  const execute = (cmd) => {
    if (shell.exec(cmd).code !== 0) {
      throw Error(`Error Executing command ${cmd}`);
    }
  };
  //* * helpers***//

  const pluginDir = 'plugins';

  const plugins = {
    reactQueryBuilder: 'react-querybuilder'
  };

  const pluginActions = [{
    build: 'npm run dist',
    dir: plugins.reactQueryBuilder,
    name: 'React Querybuilder',
    preBuild: 'npm install'
  }];

  dullInfo(`>> Moving to ${pluginDir}`);
  shell.pushd(`${pluginDir}`);

  // Building each plugins
  pluginActions.some((plugin) => {
    info(`::::Packaging:::${plugin.name}:::::::`);
    dullInfo(`>> Moving to ${plugin.dir}`);
    shell.pushd(`${plugin.dir}`);
    try {
      info(`::::Running PreBuild:::${plugin.preBuild}:::::::`);
      execute(plugin.preBuild);
      success(`Success:::PreBuild:::${plugin.preBuild}:::::::`);

      info(`::::Building:::${plugin.build}:::::::`);
      execute(plugin.build);
      success(`Success::::Build::${plugin.build}:::::::`);

      shell.popd();
    } catch (err) {
      error(err);
      return true;
    }
    greatSucess(`:::::Packaging Completed:${plugin.preBuild}:::::::`);
    return false;
  });

  // returning to main home directory
  dullInfo('<< Returing to Main Directory');
  shell.popd();

  // Installing Currently built packages
  shell.ls(pluginDir).forEach((plugin) => {
    info(`::::::Installing Local Package ${plugin}::::::`);
    try {
      execute(`npm install ${pluginDir}/${plugin}`);
      success(`::::Install Success ${plugin}:::`);
    } catch (err) {
      error(err);
    }
  });

  // Removing installed packages
  // shell.rm('-rf', `${localNPMDir}/*`);
}
