/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2025-04-03 15:28:22
 * @FilePath: \project\src\vite-env.d.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
/// <reference types="vite/client" />

declare module '*.vue' {
	import { ComponentOptions } from 'vue'
	const componentOptions: ComponentOptions
	export default componentOptions
}

declare module 'vue-router'
declare module 'jsencrypt/bin/jsencrypt.min'
