/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-14 15:26:34
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 17:43:34
 * @FilePath: \project\app-vue3\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
	base: '//localhost:7001/',
	plugins: [vue(), qiankun('app-vue3', { useDevMode: true })],
	server: {
		port: 7001,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
})
