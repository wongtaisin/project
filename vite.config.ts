/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2025-01-08 09:33:10
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2025-01-08 15:54:11
 * @FilePath: \project\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2025 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pxToViewport from 'postcss-px-to-viewport'
import AutoImport from 'unplugin-auto-import/vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'
// import { VantResolver } from '@vant/auto-import-resolver'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	base: './',
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia']
			// resolvers: [VantResolver()],
			// vueTemplate: true,
			// dts: false
		}),
		Components({
			// resolvers: [VantResolver()],
			// dirs: ['src/components', 'src/**/components'],
			// dts: false
		})
	],
	css: {
		postcss: {
			plugins: [
				pxToViewport({
					unitToConvert: 'px', // 要转换的单位
					viewportWidth: 375, // UI 设计稿宽度
					unitPrecision: 5, // 单位转换后保留的精度
					propList: ['*'], // 指定转换那些属性的单位，* 表示全部
					viewportUnit: 'vw', // 希望使用的视口单位
					fontViewportUnit: 'vw', // 字体使用的视口单位
					selectorBlackList: [], // 要忽略的选择器
					minPixelValue: 1, // 最小的转换数值
					mediaQuery: false, // 是否在媒体查询中也转换单位
					replace: true, // 是否直接更换属性值
					exclude: [], // 要忽略的文件
					include: [] // 要包含的文件
				})
			]
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/assets/css/mixin.scss" as *;`
			}
		}
	},
	assetsInclude: [path.resolve(__dirname, './src/assets'), '**/*.json'],
	resolve: {
		extensions: ['.js', '.vue', '.json', '.ts'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@build': path.resolve(__dirname, 'build')
		}
	},
	server: {
		host: true,
		port: 6001,
		open: true,
		cors: false,
		proxy: {
			'/api': {
				target: 'http://192.168.38.31:9000',
				changeOrigin: true,
				rewrite: path => path.replace('/api', '')
			}
		}
	},
	build: {
		target: 'modules',
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
		minify: 'esbuild',
		chunkSizeWarningLimit: 1000,
		cssTarget: 'chrome61',
		rollupOptions: {
			output: {
				manualChunks: {
					'vue-vendor': ['vue', 'vue-router', 'pinia'],
					'vant-vendor': ['vant']
				},
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: '[ext]/[name]-[hash].[ext]'
			}
		}
	}
})
