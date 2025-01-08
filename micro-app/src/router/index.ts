/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-13 17:16:20
 * @FilePath: \PCB-\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory, Router } from 'vue-router'
import routes from './routes'
type Router = typeof Router

const router: Router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
