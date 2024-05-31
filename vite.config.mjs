import { defineConfig, loadEnv } from "vite";
import injectHTML from "vite-plugin-html-inject";
import autoImportPlugin from "./vite-plugin-auto-import";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isDev = env.VITE_AUTO_IMPORT === "true";

  return {
    plugins: [autoImportPlugin({ isDev }), imagetools(), injectHTML()].filter(
      Boolean
    ),
    root: resolve(__dirname, "src"),
    build: {
      outDir: resolve(__dirname, "dist"),
      rollupOptions: {
        input: resolve(__dirname, "src/index.html"),
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
        },
      },
    },
    publicDir: resolve(__dirname, "public"),
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      open: true,
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  };
});
