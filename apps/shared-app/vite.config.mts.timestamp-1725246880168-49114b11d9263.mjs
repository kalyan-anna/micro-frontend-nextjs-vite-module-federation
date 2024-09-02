// apps/shared-app/vite.config.mts
import { defineConfig } from "file:///Users/kalyandev/pattarai/micro-frontend-vite-module-federation/node_modules/vite/dist/node/index.js";
import react from "file:///Users/kalyandev/pattarai/micro-frontend-vite-module-federation/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { nxViteTsPaths } from "file:///Users/kalyandev/pattarai/micro-frontend-vite-module-federation/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import federation from "file:///Users/kalyandev/pattarai/micro-frontend-vite-module-federation/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import svgr from "file:///Users/kalyandev/pattarai/micro-frontend-vite-module-federation/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "/Users/kalyandev/pattarai/micro-frontend-vite-module-federation/apps/shared-app";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/apps/shared-app",
  server: {
    port: 4200,
    host: "localhost"
  },
  preview: {
    port: 4300,
    host: "localhost"
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: "**/*.svg"
    }),
    federation({
      name: "shared-app",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthenticatedTemplate": "./src/components/AuthenticatedTemplate.tsx",
        "./UnauthenticatedTemplate": "./src/components/UnauthenticatedTemplate.tsx"
      },
      shared: ["react"]
    })
  ],
  build: {
    outDir: "../../dist/apps/shared-app",
    target: "esnext",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      },
      treeshake: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy9zaGFyZWQtYXBwL3ZpdGUuY29uZmlnLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9rYWx5YW5kZXYvcGF0dGFyYWkvbWljcm8tZnJvbnRlbmQtdml0ZS1tb2R1bGUtZmVkZXJhdGlvbi9hcHBzL3NoYXJlZC1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9rYWx5YW5kZXYvcGF0dGFyYWkvbWljcm8tZnJvbnRlbmQtdml0ZS1tb2R1bGUtZmVkZXJhdGlvbi9hcHBzL3NoYXJlZC1hcHAvdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rYWx5YW5kZXYvcGF0dGFyYWkvbWljcm8tZnJvbnRlbmQtdml0ZS1tb2R1bGUtZmVkZXJhdGlvbi9hcHBzL3NoYXJlZC1hcHAvdml0ZS5jb25maWcubXRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9J3ZpdGVzdCcgLz5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IG54Vml0ZVRzUGF0aHMgfSBmcm9tICdAbngvdml0ZS9wbHVnaW5zL254LXRzY29uZmlnLXBhdGhzLnBsdWdpbic7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbic7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdDogX19kaXJuYW1lLFxuICBjYWNoZURpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZS9hcHBzL3NoYXJlZC1hcHAnLFxuXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDQyMDAsXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIH0sXG5cbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDQzMDAsXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbnhWaXRlVHNQYXRocygpLFxuICAgIHN2Z3Ioe1xuICAgICAgLy8gc3ZnciBvcHRpb25zOiBodHRwczovL3JlYWN0LXN2Z3IuY29tL2RvY3Mvb3B0aW9ucy9cbiAgICAgIHN2Z3JPcHRpb25zOiB7XG4gICAgICAgIGV4cG9ydFR5cGU6ICdkZWZhdWx0JyxcbiAgICAgICAgcmVmOiB0cnVlLFxuICAgICAgICBzdmdvOiBmYWxzZSxcbiAgICAgICAgdGl0bGVQcm9wOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6ICcqKi8qLnN2ZycsXG4gICAgfSksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiAnc2hhcmVkLWFwcCcsXG4gICAgICBmaWxlbmFtZTogJ3JlbW90ZUVudHJ5LmpzJyxcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgJy4vQXV0aGVudGljYXRlZFRlbXBsYXRlJzogJy4vc3JjL2NvbXBvbmVudHMvQXV0aGVudGljYXRlZFRlbXBsYXRlLnRzeCcsXG4gICAgICAgICcuL1VuYXV0aGVudGljYXRlZFRlbXBsYXRlJzpcbiAgICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9VbmF1dGhlbnRpY2F0ZWRUZW1wbGF0ZS50c3gnLFxuICAgICAgfSxcbiAgICAgIHNoYXJlZDogWydyZWFjdCddLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4uLy4uL2Rpc3QvYXBwcy9zaGFyZWQtYXBwJyxcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydyZWFjdCddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0cmVlc2hha2U6IHRydWUsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFVBQVU7QUFMakIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUE7QUFBQSxNQUVILGFBQWE7QUFBQSxRQUNYLFlBQVk7QUFBQSxRQUNaLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCwyQkFBMkI7QUFBQSxRQUMzQiw2QkFDRTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFFBQVEsQ0FBQyxPQUFPO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLE1BQ2YseUJBQXlCO0FBQUEsSUFDM0I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxPQUFPO0FBQUEsTUFDbEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
