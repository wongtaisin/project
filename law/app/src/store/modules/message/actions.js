import axios from '@/axios'
import qs from 'qs'
import _utils from '@/components/common/utils'

const actions = {
  getQuestion({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/question',
    }).then(res => {
      if (res.data.code === 0) {
        commit('getQuestion', {
          title: res.data.data.title,
          quantions: res.data.data.quantions,
          banner: res.data.data.wap_banner
        })
      } else _utils.tipMessage(res.data.message)
    })
  },
  getMessage({
    commit,
    state
  }, params) {
    let dataObj = qs.stringify(params.paramsDate)
    axios({
      method: 'post',
      url: '/api/index/message',
      data: dataObj
    }).then(res => {
      if (res.data.code === 0) {
        _utils.tipMessage(res.data.message)
        commit('getMessage', res.data.message)
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}

export default actions
