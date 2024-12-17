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
      url: '/api/index/professionals',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getProfessionals', {
          list: res.data.data.datas || [],
          totalCount: res.data.data.pageCount,
          banner: res.data.data.banner
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  },
  getLawyerDetail({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/lawyer-detail',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getLawyerDetail', {
          banner: res.data.data.banner,
          info: res.data.data.lawyer_info
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}

export default actions
