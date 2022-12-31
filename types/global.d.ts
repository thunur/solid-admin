declare type Recordable<T = any> = Record<string, T>;
declare interface ViteEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_GLOB_API_URL: string;
  VITE_GLOB_UPLOAD_URL: string;
  VITE_GLOB_API_URL_PREFIX: string;
}
