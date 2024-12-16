import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			// css预设器配置项
			scss: {
				//设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
				javascriptEnabled: true
			}
		}
	}
})
