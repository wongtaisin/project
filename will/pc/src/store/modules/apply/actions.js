import axios from '@/axios/index'
import qs from 'qs'
import _utils from '@/components/common/utils/index'

const actions = {
  getApplyLoad({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/appointment'
    }).then(res => {
      if (res.data.code === 0) {
        commit('getApplyLoad', res.data.data)
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  },
  getAppointment({
    commit,
    state
  }, params) {
    let dataObj = qs.stringify(params.paramsDate)
    axios({
      method: 'post',
      url: '/api/index/appointment',
      data: dataObj
    }).then(res => {
      if (res.data.code === 0) {
        commit('getAppointment', res.data.data)
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}

export default actions
