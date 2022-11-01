import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 使用 alias 配置可以将文件打包的识别路径用别名进行替换，避免在文件引入别的组件的时候使用很长的相对路径
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pub": path.resolve(__dirname, "public"),
      "@servers": path.resolve(__dirname, "servers"),
    },
  },
});
