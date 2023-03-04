import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

/*
 * TODO(blocked):
 * This configuration is currently not a package inside monorepo, just a folder that can not be published.
 * See https://github.com/vitejs/vite/issues/5370.
 */

// See https://vitejs.dev/guide/build.html#chunking-strategy for more details.
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  plugins: [react()],
});
