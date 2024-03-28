import dts from "vite-plugin-dts";
import path from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    emptyOutDir: true,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "ButtonTest",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        compact: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({ insertTypesEntry: true, rollupTypes: true, include: ["dist"] }),
    splitVendorChunkPlugin(),
  ],
});
