import axios from '@/axios'
import _utils from '@/components/common/utils'

const actions = {
  getPracticeAreas({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/practice-areas',
    }).then(res => {
      if (res.data.code === 0) {
        commit('getPracticeAreas', {
          list: res.data.data.datas || [],
          banner: res.data.data.wap_banner
        })
      } else _utils.tipMessage(res.data.message)
    })
  },
  getPracticeAreasDetail({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/practice-areas-detail',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getPracticeAreasDetail', {
          banner: res.data.data.wap_banner,
          info: res.data.data.info
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}
export default actions
