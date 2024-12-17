let _import = (index) => {
  return import( /* webpackChunkName: "research" */ '@/views/research/' + index)
}

export default [{
  path: '/research',
  component() {
    return _import('index')
  },
  name: 'research',
  meta: {
    type: 'research',
    title: '预约服务点'
  }
}, {
  path: '/research/detail',
  component() {
    return _import('detail')
  },
  name: 'research-detail',
  meta: {
    type: 'research-detail',
    title: '预约服务点详情'
  }
}]
