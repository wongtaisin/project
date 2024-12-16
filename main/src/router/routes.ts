/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-14 15:39:31
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 10:13:12
 * @FilePath: \project\main\src\router\routes.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */

const routes = [
	{
		path: '',
		redirect: { name: 'home' },
		meta: { title: '首页' },
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home.vue')
			},
			{
				path: '/app/app-vue3/:pathMatch(.*)*',
				name: 'app-vue3',
				meta: {},
				component: () => import('@/components/SubContainer.vue')
			},
			{
				path: '/app/app-vue2/',
				name: 'app-vue2',
				meta: {},
				component: () => import('@/components/SubContainer.vue')
			}
		]
	}
]

export default routes
