const routes = [
	// {
	// 	path: '/',
	// 	redirect: '/home'
	// },
	{
		path: '/',
		name: 'index',
		redirect: '/home',
		component: () => import('@/view/home/index.vue'),
		meta: {
			title: '首页'
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/view/home/home.vue'),
				meta: {}
			},
			// history模式需要通配所有路由，详见vue-router文档
			{
				path: '/app/app-vue3/:pathMatch(.*)*',
				name: 'app-vue3',
				component: () => import('@/qiankun/SubContainer.vue'),
				meta: {}
			},
			{
				path: '/app/app-vue2/',
				name: 'app-vue2',
				component: () => import('@/qiankun/SubContainer.vue'),
				meta: {}
			}
		]
	}
]

export default routes
