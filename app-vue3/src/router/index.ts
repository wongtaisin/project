/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-16 09:09:09
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 09:13:35
 * @FilePath: \project\app-vue3\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
	history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app/app-vue3/' : '/'),
	routes
})

export default router
