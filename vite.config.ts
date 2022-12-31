import { defineConfig } from 'vite'
import { resolve } from 'path'
import solidPlugin from 'vite-plugin-solid'
import WindiCSS from 'vite-plugin-windicss'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  plugins: [solidPlugin(), WindiCSS()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
