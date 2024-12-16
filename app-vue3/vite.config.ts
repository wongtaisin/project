import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		qiankun('app-vue3', {
			useDevMode: true
		})
	],
	server: {
		port: 7001,
		cors: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
})
