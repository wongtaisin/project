/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2025-04-03 11:54:16
 * @FilePath: \project\src\router\routes.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */

import { RouteRecordRaw } from 'vue-router'
import Pcba from './modules/pcba.ts' // Three模块路由
import Three from './modules/three.ts' // Three模块路由
type RouteRecordRaw = typeof RouteRecordRaw

const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue'),
		meta: {
			title: '登录页'
		}
	},
	{
		path: '/',
		name: 'Home',
		redirect: 'pcba/valuation',
		component: () => import('@/views/home.vue'),
		meta: {
			title: '首页'
		},
		children: [
			...Pcba, // 引入PCBA模块路由
			...Three // 引入Three模块路由
		]
	},
	{
		path: '/pcba/valuation',
		name: 'pcba-valuation',
		component: () => import('@/views/order/index.vue'),
		meta: {
			title: '计价下单'
		}
	},
	{
		path: '/kong/list',
		name: 'kong-list',
		redirect: '/kong/order',
		component: () => import('@/views/kong/index.vue'),
		meta: {
			title: '空管理',
			activeMenu: '/kong/order'
		},
		children: [
			{
				path: '/kong/order',
				component: () => import('@/views/kong/modules/order.vue'),
				name: '空列表',
				meta: {
					path: '/kong/order',
					name: '空列表',
					type: 'kong-order'
				}
			},
			{
				path: '/kong/draft',
				component: () => import('@/views/kong/modules/draft.vue'),
				name: '空草稿',
				meta: {
					path: '/kong/draft',
					name: '空草稿',
					type: 'kong-draft'
				}
			}
		]
	}
]

export default routes
