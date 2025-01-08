let _import = (index: string) => {
  return import( /* webpackChunkName: "in" */ '@/components/list/views/' + index)
}

export default [{
  path: '/mk/page/order',
  component() {
    return _import('index/index')
  },
  name: '采购管理',
  meta: {
    setTabs: true,
    type: 'mk-page-order'
  },
  children: [{
    path: '/mk/page/rk',
    component() {
      return _import('place/index')
    },
    name: '计价下单',
    meta: {
      type: 'mk-page-place'
    },
  }, ]
}]