/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 16:10:58
 * @FilePath: \project\main\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */

import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
