/**
 * Generate additional configuration files when used for packaging. The file can be configured with some global variables, so that it can be changed directly externally without repackaging
 */
import fs, { writeFileSync } from 'fs-extra';
import chalk from 'chalk';
import { GLOB_CONFIG_FILE_NAME, OUTPUT_DIR } from '../constant';

import { getEnvConfig, getRootPath } from '../utils';
import { getConfigFileName } from '../getConfigFileName';

import pkg from '../../package.json';

interface CreateConfigParams {
  configName: string;
  config: any;
  configFileName?: string;
}

function createConfig(params: CreateConfigParams) {
  const { configName, config, configFileName } = params;
  try {
    const windowConf = `window.${configName}`;
    // Ensure that the variable will not be modified
    const configStr = `${windowConf}=${JSON.stringify(config)};
       Object.freeze(${windowConf});
       Object.defineProperty(window, "${configName}", {
         configurable: false,
         writable: false,
       });
     `.replace(/\s/g, '');
    fs.mkdirp(getRootPath(OUTPUT_DIR));
    writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr);

    console.log(`${chalk.cyan(`✨ [${pkg.name}]`)} - 配置文件编译完成:`);
    console.log(`${chalk.gray(`${OUTPUT_DIR}/${chalk.green(configFileName)}`)}\n`);
  } catch (error) {
    console.log(chalk.red(`配置文件编译失败:\n${error}`));
  }
}

export function runBuildConfig() {
  const config = getEnvConfig();
  const configFileName = getConfigFileName(config);
  createConfig({ config, configName: configFileName, configFileName: GLOB_CONFIG_FILE_NAME });
}
