

<template>
  <section class="common-right-menu">
    <div class="kua">
      <div
        :key="i"
        @click="i == 0 ? newUrl(): ''"
        @mouseout="i == 2 ? keyHide():  i == 1 ? telHide(): ''"
        @mouseover="i == 2 ? keyShow(): i == 1 ? telShow(): ''"
        v-for="(item, i) in kua"
      >
        <p>
          <img :src="item.img" />
        </p>
        {{item.text}}
      </div>
    </div>
    <div class="tel" v-show="tel">
      <i class="iconfont icon-dianhua"></i>
      {{commonPublic.header.tel}}
    </div>
    <div class="wechat" v-show="key">
      <img src="../../../../assets/images/common/wechat.jpg" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'common-right-menu',
  data () {
    return {
      kua: [
        {
          img: require('../../../../assets/images/common/mes.png'),
          text: '客服咨询'
        },
        {
          img: require('../../../../assets/images/common/tel.png'),
          text: '服务热线'
        },
        {
          img: require('../../../../assets/images/common/wechat.png'),
          text: '微信公众号'
        }
      ],
      key: false,
      tel: false
    }
  },
  computed: {
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    },
    commonPublic () {
      return this.$store.getters['common/commonPublic']
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      this.lang()
    }
  },
  created () { },
  methods: {
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.kua[0].text = '客服咨詢'
        this.kua[1].text = '服務熱線'
        this.kua[2].text = '微信公眾號'
      } else if (this.commonLanguage == 'en-US') {
        this.kua[0].text = 'Message'
        this.kua[1].text = 'Tel'
        this.kua[2].text = 'WeChat'
      } else {
        this.kua[0].text = '客服咨询'
        this.kua[1].text = '服务热线'
        this.kua[2].text = '微信公众号'
      }
    },
    newUrl () {
      this.$router.push({
        path: `/message`
      })
      this.$store.dispatch('common/commonUrl', '/message')
    },
    telShow () {
      this.tel = true
    },
    telHide () {
      this.tel = false
    },
    keyShow () {
      this.key = true
    },
    keyHide () {
      this.key = false
    },
  }
}
</script>

<style lang="scss" scoped>
.common-right-menu {
  width: 80px;
  position: fixed;
  right: 30px;
  top: 160px;
  z-index: 999;
  .kua {
    div {
      width: 80px;
      height: 70px;
      margin-bottom: 4px;
      background: #c12219;
      text-align: center;
      padding-top: 10px;
      color: white;
      font-size: 12px;
      border: 1px solid #c12219;
      img {
        width: 40px;
        height: 40px;
      }
      p {
        width: 40px;
        height: 40px;
        margin-left: 20px;
        margin-bottom: 5px;
      }
    }
    div:last-child {
      background: white;
      color: #c12219;
    }
    div:first-child {
      cursor: pointer;
    }
  }
  .tel {
    padding: 10px;
    border-radius: 10px;
    background: white;
    position: fixed;
    top: 275px;
    right: 120px;
    i {
      margin-right: 5px;
    }
  }
  .wechat {
    width: 138px;
    height: 138px;
    background: white;
    position: fixed;
    top: 275px;
    right: 120px;
    img {
      width: 138px;
      height: 138px;
    }
  }
}
</style>
