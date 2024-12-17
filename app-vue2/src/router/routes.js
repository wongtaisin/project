const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '',
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('../App.vue'),
				meta: {}
			}
		]
	}
]

export default routes
