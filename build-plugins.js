const shell = require('shelljs');
// pretty print
const chalk = require('chalk');

//** helpers***//
const success = (msg) =>  console.log(chalk.green(msg));
const info = (msg) =>  console.log(chalk.cyan(msg));
const error = (msg) =>  console.log(chalk.red(msg));
const dullInfo = (msg) => console.log(chalk.dim.italic(msg));
const greatSucess = (msg) =>  console.log(chalk.black.bgGreen.bold(msg));
const greatError = (msg) =>  console.log(chalk.black.bgRed.bold(msg));

const execute = (cmd) => {
  if (shell.exec(cmd).code !== 0) {
    throw Error(`Error Executing command ${cmd}`);
  }
}
//** helpers***//

const pluginDir = 'plugins';
const localNPMDir = 'local_npm';

const plugins = {
  reactQueryBuilder: 'react-querybuilder'
};

const pluginActions = [
 {
    build: 'npm run dist',
    dir: plugins.reactQueryBuilder,
    name: 'React Querybuilder',
    postBuild: `rm -rf dist; rm -rf node_modules;`,
    preBuild: 'npm install'
  }
];

// Removing prebuilt files
shell.rm('-rf', `${localNPMDir}/*`);

dullInfo(`>> Moving to ${pluginDir}`);
shell.pushd(`${pluginDir}`);

// Building each plugins
pluginActions.some((plugin) => {
  info(`::::Packaging:::${plugin.name}:::::::`);
  dullInfo(`>> Moving to ${plugin.dir}`);
  shell.pushd(`${plugin.dir}`)
  try {
    info(`::::Running PreBuild:::${plugin.preBuild}:::::::`);    
    execute(plugin.preBuild);
    success(`Success:::PreBuild:::${plugin.preBuild}:::::::`);

    info(`::::Building:::${plugin.build}:::::::`);
    execute(plugin.build);
    success(`Success::::Build::${plugin.build}:::::::`);

    shell.popd();
    info(`::::Copying Local Package:::${plugin.dir}:::::::`);
    shell.cp('-R', plugin.dir, `../${localNPMDir}`);    
    success(`Success::::Local Package Created::${plugin.dir}:::::::`);
    shell.pushd(`${plugin.dir}`)

    info(`::::PostBuild:::${plugin.postBuild}:::::::`);
    execute(plugin.postBuild);
    success(`Success:::PostBuild:::${plugin.postBuild}:::::::`);

  } catch(err) {
    error(err);
    return true;
  }
  greatSucess(`:::::Packaging Completed:${plugin.preBuild}:::::::`);
  // returning to plugins dir
  dullInfo(`<< Returing to ${pluginDir}`);
  shell.popd();
  return false;
});

// returning to main home directory
dullInfo(`<< Returing to Main Directory`);
shell.popd();

// Installing Currently built packages
shell.ls(localNPMDir).forEach((plugin) => {
  info(`::::::Installing Local Package ${plugin}::::::`);
  try {
    execute(`npm install ${localNPMDir}/${plugin}`);
    success(`::::Install Success ${plugin}:::`)
  } catch(err) {
    error(err);
  }
});

// Removing installed packages
// shell.rm('-rf', `${localNPMDir}/*`);
