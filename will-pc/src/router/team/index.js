let _import = (index) => {
  return import( /* webpackChunkName: "team" */ '@/views/team/' + index)
}

export default [{
  path: '/team',
  component() {
    return _import('index')
  },
  name: 'team',
  meta: {
    type: 'team',
    title: '公益团队'
  }
}, {
  path: '/team/detail',
  component() {
    return _import('detail')
  },
  name: 'team-detail',
  meta: {
    type: 'team-detail',
    title: '公益团队详情'
  }
}]
