let _import = (index) => {
  return import( /* webpackChunkName: "apply" */ '@/views/apply/' + index)
}

export default [{
  path: '/apply',
  component() {
    return _import('index')
  },
  name: 'apply',
  meta: {
    type: 'apply',
    title: '在线预约'
  }
}]
