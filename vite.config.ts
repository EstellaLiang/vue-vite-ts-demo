import {defineConfig} from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    css: {
        // CSS 预处理器
        preprocessorOptions: {
            // 定义全局 SCSS 变量
            scss: {
                javascriptEnabled: true,
                additionalData: `@use "@/styles/variables.scss" as *;`,
            },
        },
    },
})
