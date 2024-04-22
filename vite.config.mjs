import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: process.env.NODE_ENV !== 'production',
    },
    plugins: [vue()],
    resolve: {
      alias: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
