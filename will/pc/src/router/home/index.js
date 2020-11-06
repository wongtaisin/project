let _import = (index) => {
  return import( /* webpackChunkName: "home" */ '@/views/home/' + index)
}

export default [{
  path: '/home',
  component() {
    return _import('index')
  },
  name: 'home',
  meta: {
    type: 'home',
    title: '首页'
  }
}]
