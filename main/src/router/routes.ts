/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 18:22:12
 * @FilePath: \project\main\src\router\routes.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */

import { RouteRecordRaw } from 'vue-router'
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
		path: '/pcba/valuation',
		name: 'pcba-valuation',
		component: () => import('@/views/order/index.vue'),
		meta: {
			title: '计价下单'
		}
	},
	{
		path: '/',
		name: 'pcba-list',
		redirect: 'pcba/list',
		component: () => import('@/views/home.vue'),
		meta: {
			title: '首页'
		},
		children: [
			{
				path: '/pcba/list',
				name: 'pcba-list',
				redirect: '/pcba/order',
				component: () => import('@/views/list/index.vue'),
				meta: {
					title: 'PCBA订单列表',
					activeMenu: '/pcba/order'
				},
				children: [
					{
						path: '/pcba/order',
						component: () => import('@/views/list/modules/order.vue'),
						name: '订单',
						meta: {
							path: '/pcba/order',
							name: '订单',
							type: 'pcba-order'
						}
					},
					{
						path: '/pcba/draft',
						component: () => import('@/views/list/modules/draft.vue'),
						name: '草稿',
						meta: {
							path: '/pcba/draft',
							name: '草稿',
							type: 'pcba-draft'
						}
					}
				]
			},
			{
				path: '/app/app-vue3/:pathMatch(.*)*',
				name: 'app-vue3',
				meta: {},
				component: () => import('@/components/SubContainer.vue')
			}
		]
	},
	{
		path: '/kong/list',
		name: 'kong-list',
		redirect: '/kong/order',
		component: () => import('@/views/list/index.vue'),
		meta: {
			title: '空管理',
			activeMenu: '/kong/order'
		},
		children: [
			{
				path: '/kong/order',
				component: () => import('@/views/list/modules/order.vue'),
				name: '空列表',
				meta: {
					path: '/kong/order',
					name: '空列表',
					type: 'kong-order'
				}
			},
			{
				path: '/kong/draft',
				component: () => import('@/views/list/modules/draft.vue'),
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
