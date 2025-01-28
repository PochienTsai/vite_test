import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 參考文件：https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`Building in mode: ${mode}`); // 用於調試，查看當前模式
  return {
    // 設定 dist 資料夾中檔案的路徑關係
    // - 生產環境：設定 GitHub Pages 的路徑為 '/vite_test/'
    // - 開發環境及其他部署（如部署至 IIS）：使用相對路徑 '/'
    base: mode === 'production' ? '/vite_test/' : '/', // 設定基本路徑
    plugins: [react()],
  };
});
