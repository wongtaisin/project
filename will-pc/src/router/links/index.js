let _import = (index) => {
  return import( /* webpackChunkName: "links" */ '@/views/links/' + index)
}

export default [{
  path: '/links',
  component() {
    return _import('index')
  },
  name: 'links',
  meta: {
    type: 'links',
    title: '合作机构'
  }
}]
