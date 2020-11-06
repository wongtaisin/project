import axios from '@/axios/index'
import _utils from '@/components/common/utils/index'

const actions = {
  commonPublic({
    commit
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/public'
    }).then(res => {
      if (res.data.code === 0) {
        if (res.data.data) {
          commit('commonPublic', {
            header: res.data.data.header,
            condition: res.data.data.condition,
            footer: res.data.data.footer,
          })
        }
      } else _utils.tipMessage(res.data.message)
    })
  },
  commonUrl({
    commit
  }, params) {
    commit('commonUrl', params)
  },
  getAbout({
    commit
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/about'
    }).then(res => {
      if (res.data.code === 0) {
        if (res.data.data) {
          commit('getAbout', {
            data: res.data.data
          })
        }
      } else _utils.tipMessage(res.data.message)
    })
  },
  getAboutDesc({
    commit
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/desc',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        if (res.data.data) {
          commit('getAboutDesc', {
            data: res.data.data
          })
        }
      } else _utils.tipMessage(res.data.message)
    })
  },
  getAboutMilestones({
    commit
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/milestones',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        if (res.data.data) {
          commit('getAboutMilestones', {
            data: res.data.data
          })
        }
      } else _utils.tipMessage(res.data.message)
    })
  },
  getAboutHonor({
    commit
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/honor',
    }).then(res => {
      if (res.data.code === 0) {
        if (res.data.data) {
          commit('getAboutHonor', {
            data: res.data.data
          })
        }
      } else _utils.tipMessage(res.data.message)
    })
  },
  getAboutFriendship({
    commit
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/friendship',
    }).then(res => {
      if (res.data.code === 0) {
        if (res.data.data) {
          commit('getAboutFriendship', {
            data: res.data.data
          })
        }
      } else _utils.tipMessage(res.data.message)
    })
  },
  commonLanguage({
    commit
  }, params) {
    commit('commonLanguage', params)
  },
}
export default actions
