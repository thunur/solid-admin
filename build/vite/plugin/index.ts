import type { PluginOption } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { configHtmlPlugin } from './html';
import { configMockPlugin } from './mock';
import { configWindiCSSPlugin } from './windicss';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv;
  const vitePlugins: (PluginOption | PluginOption[])[] = [solidPlugin()];
  // reg windicss
  vitePlugins.push(configWindiCSSPlugin(), configHtmlPlugin(viteEnv, isBuild));

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));
  return vitePlugins;
}
