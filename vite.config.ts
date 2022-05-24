/*
 * @Author: ryanrzhao ryanrzhao@tencent.com
 * @Date: 2022-05-19 17:59:54
 * @LastEditors: ryanrzhao ryanrzhao@tencent.com
 * @LastEditTime: 2022-05-21 09:18:38
 * @FilePath: /vue3-vite-ts-pinia/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      '@utils': `${path.resolve(__dirname, 'src/utils')}/`,
      '@components': `${path.resolve(__dirname, 'src/components')}/`,
      '@layout': `${path.resolve(__dirname, 'src/layout')}/`,
      '@assets': `${path.resolve(__dirname, 'src/assets')}/`,
      '@types': `${path.resolve(__dirname, 'src/types')}/`,
    }
  }
})
