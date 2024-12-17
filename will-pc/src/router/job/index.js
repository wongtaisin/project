let _import = (index) => {
  return import( /* webpackChunkName: "job" */ '@/views/job/' + index)
}

export default [{
  path: '/job',
  component() {
    return _import('index')
  },
  name: 'job',
  meta: {
    type: 'job',
    title: '诚聘英才'
  }
}]
