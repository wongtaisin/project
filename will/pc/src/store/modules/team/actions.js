import axios from '@/axios/index'
import _utils from '@/components/common/utils/index'

const actions = {
  // 专业团队
  getProfessionals({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/team',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getProfessionals', {
          data: res.data.data
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  },
  getConsult({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/team-consult'
    }).then(res => {
      if (res.data.code === 0) {
        commit('getConsult', res.data.data)
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  },
  getLawyer({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/team-lawyer'
    }).then(res => {
      if (res.data.code === 0) {
        commit('getLawyer', res.data.data)
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  },
  getwillyerDetail({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/willyer-detail',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getwillyerDetail', {
          banner: res.data.data.banner,
          info: res.data.data.willyer_info
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}

export default actions
