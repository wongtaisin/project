<template>
  <section class="page-jdx">
    <swiper :options="swiperOption">
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
        <jdx-client :header="getAbout.client_header" :more="more"></jdx-client>
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
    getAbout() {
      return this.$store.getters['common/getAbout'].data
    },
    commonLanguage() {
      return this.$store.getters['common/commonLanguage']
    }
  },
  data() {
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
      contact: {
        address: '地址',
        code: '邮编',
        tel: '电话',
        fax: '传真'
      }
    }
  },
  watch: {
    '$store.state.home.getLanguage'(data) {
      if (data.code != 0) return false
      if (this.$route.name == 'jdx') this.loadData()
    },
    '$store.state.common.commonLanguage'(val) {
      this.lang()
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.lang()
      this.$store.dispatch('common/getAbout')
      this.$store.dispatch('common/commonPublic')
    },
    lang() {
      if (this.commonLanguage == 'zh-HK') {
        this.more = '查看詳情'
        this.contact = {
          city: '深圳',
          address: '地址',
          code: '郵編',
          tel: '電話',
          fax: '傳真'
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
      } else {
        this.more = '查看详情'
        this.contact = {
          city: '深圳',
          address: '地址',
          code: '邮编',
          tel: '电话',
          fax: '传真'
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
    background-size: 246px 164px;
    padding-top: 50px;
    height: 164px;
    text-align: center;
    padding-bottom: 20px;
    span {
      font-size: 36px;
    }
    p {
      width: 144px;
      height: 48px;
      margin: 0 auto;
    }
  }
  .zi {
    width: 159px;
    margin-left: -79px;
    position: absolute;
    bottom: 60px;
    left: 50%;
    cursor: pointer;
    .look {
      width: 159px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: white;
      color: black;
      border-radius: 39px;
      font-size: 24px;
    }
    .icon-jiantou {
      text-align: center;
      font-size: 48px;
      color: #c12219;
      -webkit-animation: baloon_1 2s infinite;
      animation: baloon_1 2s infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
    }
    @-webkit-keyframes baloon_1 {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(30px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @keyframes baloon_1 {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(30px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
}
</style>
