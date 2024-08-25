/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/shared-app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    federation({
      name: 'shared-app',
      filename: 'remoteEntry.js',
      exposes: {
        './SiteHeader': './src/components/SiteHeader.tsx',
        './SiteFooter': './src/components/SiteFooter.tsx',
        './SiteSideNav': './src/components/SiteSideNav.tsx',
      },
      shared: ['react'],
    }),
  ],
  build: {
    outDir: '../../dist/apps/shared-app',
    target: 'esnext',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
      treeshake: true,
    },
  },
});
