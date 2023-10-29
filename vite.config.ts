import react from "@vitejs/plugin-react-swc";
import { configDefaults, defineConfig } from "vitest/config";
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), viteTsconfigPaths(),],
  test: {
    exclude: [...configDefaults.exclude, "packages/template/*"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
    reporters: ["verbose"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [],
    },
  },
});
