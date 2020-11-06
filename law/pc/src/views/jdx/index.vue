<template>
  <section class="page-jdx">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <jdx-about :data="getAbout.about" :more="more"></jdx-about>
      </swiper-slide>
      <swiper-slide>
        <jdx-milestones
          :data="getAbout.milestones"
          :header="getAbout.milestones_header"
          :more="more"
        ></jdx-milestones>
      </swiper-slide>
      <swiper-slide>
        <jdx-honor :data="getAbout.honor" :header="getAbout.honor_header" :more="more"></jdx-honor>
      </swiper-slide>
      <swiper-slide>
        <jdx-client :client="client" :header="getAbout.client_header" :more="more"></jdx-client>
      </swiper-slide>
      <swiper-slide>
        <jdx-contact
          :contact="contact"
          :data="getAbout.contact"
          :header="getAbout.contact_header"
          :more="more"
        ></jdx-contact>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <common-right-menu></common-right-menu>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import * as swiperAni from '../../assets/js/swiper.animate.min'
import jdxAbout from './template/about'
import jdxMilestones from './template/milestones'
import jdxHonor from './template/honor'
import jdxClient from './template/client'
import jdxContact from './template/contact'
export default {
  components: {
    swiper,
    swiperSlide,
    jdxAbout,
    jdxMilestones,
    jdxHonor,
    jdxClient,
    jdxContact
  },
  computed: {
    getAbout () {
      return this.$store.getters['common/getAbout'].data
    },
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        mousewheel: true,
        on: {
          init: function () {
            // console.log(this)
            swiperAni.swiperAnimateCache(this)
            swiperAni.swiperAnimate(this)
          },
          slideChange: function () {
            swiperAni.swiperAnimate(this)
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      more: '查看详情',
      contact: {},
      client: {}
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'jdx') this.loadData()
    },
    '$store.state.common.commonLanguage' (val) {
      this.lang()
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.lang()
      this.$store.dispatch('common/getAbout')
      this.$store.dispatch('common/commonPublic')
    },
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.more = '查看詳情'
        this.contact = {
          city: '深圳',
          address: '地址',
          code: '郵編',
          tel: '電話',
          fax: '傳真'
        }
        this.client = {
          bank: '銀行',
          equity: '私募股權/投資 基金',
          estate: '房地產',
          energy: '能源與自然 資源',
          technology: '信息技術、電 信、傳媒與娛樂',
          manufacturing: '制造業',
          government: '協會/政府部門'
        }
      } else if (this.commonLanguage == 'en-US') {
        this.more = 'MORE'
        this.contact = {
          city: 'Shenzhen',
          address: 'ADDRESS',
          code: 'ZIP CODE',
          tel: 'TEL',
          fax: 'FAX'
        }
        this.client = {
          bank: 'bank',
          equity: 'Private equity/investment fund',
          estate: 'estate',
          energy: 'Energy and nature resources',
          technology: 'Information technology, telecommunications, media and entertainment',
          manufacturing: 'manufacturing',
          government: 'Association / government department'
        }
      } else {
        this.more = '查看详情'
        this.contact = {
          city: '深圳',
          address: '地址',
          code: '邮编',
          tel: '电话',
          fax: '传真'
        }
        this.client = {
          bank: '银行',
          equity: '私募股权/投资 基金',
          estate: '房地产',
          energy: '能源与自然 资源',
          technology: '信息技术、电 信、传媒与娱乐',
          manufacturing: '制造业',
          government: '协会/政府部门'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.page-jdx {
  height: 100%;
  overflow: hidden;
  .swiper-container {
    height: 100%;
  }
  .swiper-wrapper {
    display: flex;
    height: 100%;
  }
  .swiper-slide {
    float: left;
  }
  .title {
    background: url('../../assets/images/jdx/title-bg.png') no-repeat center 0;
    background-size: 247px 240px;
    padding-top: 80px;
    width: 990px;
    height: 160px;
    text-align: center;
    margin: 0 auto;
    p {
      padding-bottom: 20px;
      font-size: 44px;
    }
    div {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .zi {
    width: 110px;
    margin-left: -55px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    cursor: pointer;
    .look {
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: white;
      color: black;
      border-radius: 20px;
      font-size: 16px;
    }
    .icon-jiantou {
      margin-top: 5px;
      text-align: center;
      font-size: 42px;
      color: #c12219;
      -webkit-animation: baloon_1 4s infinite;
      animation: baloon_1 4s infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
    }
    @-webkit-keyframes baloon_1 {
      0% {
        transform: translateY(-5px);
      }
      50% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(-5px);
      }
    }

    @keyframes baloon_1 {
      0% {
        transform: translateY(-5px);
      }
      50% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  }
}
</style>
