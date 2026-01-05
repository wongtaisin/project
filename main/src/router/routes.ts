/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 18:46:56
 * @FilePath: \project\main\src\router\routes.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */

import { RouteRecordRaw } from 'vue-router'

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
		name: 'home',
		redirect: '/kong/list',
		component: () => import('@/views/home.vue'),
		meta: {
			title: '首页'
		},
		children: [
			// history模式需要通配所有路由，详见vue-router文档
			{
				path: '/app/app-vue3/:pathMatch(.*)*',
				name: 'app-vue3',
				meta: {},
				component: () => import('@/qiankun/SubContainer.vue')
			},
			{
				path: '/app/app-vue2/',
				name: 'app-vue2',
				meta: {},
				component: () => import('@/qiankun/SubContainer.vue')
			}
		]
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
