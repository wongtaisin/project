export default [
	{
		path: '/pcba/list',
		name: 'pcba-list',
		redirect: '/pcba/order',
		component: () => import('@/views/pcba/index.vue'),
		meta: {
			title: 'PCBA订单列表',
			activeMenu: '/pcba/order'
		},
		children: [
			{
				path: '/pcba/order',
				component: () => import('@/views/pcba/modules/order.vue'),
				name: '订单',
				meta: {
					path: '/pcba/order',
					name: '订单',
					type: 'pcba-order'
				}
			},
			{
				path: '/pcba/draft',
				component: () => import('@/views/pcba/modules/draft.vue'),
				name: '草稿',
				meta: {
					path: '/pcba/draft',
					name: '草稿',
					type: 'pcba-draft'
				}
			}
		]
	}
]
