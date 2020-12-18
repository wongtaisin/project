

<template>
  <div class="common-right-menu">
    <div class="kua">
      <div
        :key="i"
        @click="i == 0 ? newUrl(): ''"
        @mouseout="activeM"
        @mouseover="activeC(i)"
        v-for="(item, i) in kua"
      >
        <p>
          <img :src="item.img" />
        </p>
        {{item.text}}
      </div>
    </div>
    <div class="tel" v-show="active===1">
      <i class="iconfont icon-dianhua"></i>
      {{homeData.tel}}
    </div>
    <div class="wechat" v-show="active===2">
      <img src="../../../../assets/images/common/wechat.jpg" />
    </div>
    <div class="wechat1" v-show="active===3">
      <img src="../../../../assets/images/common/001.jpg" />
    </div>
    <div class="wechat2" v-show="active===4">
      <img src="../../../../assets/images/common/002.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-right-menu',
  data() {
    return {
      kua: [
        {
          img: require('../../../../assets/images/common/mes.png'),
          text: '在线预约'
        },
        {
          img: require('../../../../assets/images/common/tel.png'),
          text: '服务热线'
        },
        {
          img: require('../../../../assets/images/common/wechat.jpg'),
          text: '微信公众号'
        },
        {
          img: require('../../../../assets/images/common/001.jpg'),
          text: '抖音号'
        },
        {
          img: require('../../../../assets/images/common/002.jpg'),
          text: '牛犇请你演电影'
        }
      ],
      active: 0
    }
  },
  computed: {
    homeData() {
      return this.$store.getters['home/homeData'].data
    }
  },
  methods: {
    newUrl() {
      this.$router.push({
        path: `/apply`
      })
      this.$store.dispatch('common/commonUrl', '/apply')
    },
    activeM() {
      this.active = 0
    },
    activeC(i) {
      this.active = i
    }
  }
}
</script>

<style lang="scss" scoped>
.common-right-menu {
  width: 85px;
  position: fixed;
  right: 30px;
  top: 160px;
  z-index: 999;
  .kua {
    div {
      width: 85px;
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
    div:nth-child(3) {
      background: white;
      color: #c12219;
    }
    div:nth-child(4) {
      background: white;
      color: #c12219;
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
  .wechat1 {
    width: 138px;
    height: 138px;
    background: white;
    position: fixed;
    top: 375px;
    right: 120px;
    img {
      width: 138px;
      height: 138px;
    }
  }
  .wechat2 {
    width: 138px;
    height: 138px;
    background: white;
    position: fixed;
    top: 475px;
    right: 120px;
    font-size: 10px;
    img {
      width: 138px;
      height: 138px;
    }
  }
}
</style>
