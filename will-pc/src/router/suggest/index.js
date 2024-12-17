let _import = (index) => {
  return import( /* webpackChunkName: "suggest" */ '@/views/suggest/' + index)
}

export default [{
  path: '/suggest',
  component() {
    return _import('index')
  },
  name: 'suggest',
  meta: {
    type: 'suggest',
    title: '投诉建议'
  }
}]
