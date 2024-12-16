/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 15:33:47
 * @FilePath: \PCB-\src\vite-env.d.ts
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
declare module '@/axios/login'
declare module '@/axios/index'
declare module '@/axios/common'
declare module '@/utils/utils'
declare module '@/utils/jsencrypt'
declare module '@/utils/auth'
declare module '@/utils/errorCode'
declare module '@/utils/jysz'
declare module '@/utils/cache'
declare module '@/pinia/actions'
declare module '@/pinia/modules/order'
