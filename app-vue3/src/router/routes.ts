const routes = [
	{
		path: '',
		redirect: { name: 'home' },
		meta: { title: '首页' },
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('../App.vue')
			}
		]
	}
]

export default routes
