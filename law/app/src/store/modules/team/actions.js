import axios from '@/axios/index'
import _utils from '@/components/common/utils/index'

const actions = {
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
        if (params.paramsDate.page === 1) commit('getProfessionals', {
          list: [],
          totalPages: 1
        })
        commit('getProfessionals', {
          list: [...state.getProfessionals.list, ...res.data.data.datas || []],
          totalPages: res.data.data.pageCount,
          banner: res.data.data.wap_banner
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
          banner: res.data.data.wap_banner,
          info: res.data.data.lawyer_info
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}

export default actions
