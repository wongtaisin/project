<template>
  <section class="common-header">
    <div class="top">
      <div class="top-right">
        <a :href="'tel:' + data.tel" class="tel">
          <i class="iconfont icon-dianhua"></i>
          {{data.tel}}
        </a>
        <div class="language">
          <span @click="language('zh-CN')">简体</span>
          <span @click="language('zh-HK')">繁体</span>
          <span @click="language('en-US')">英文</span>
        </div>
        <!-- <div class="search">
          <i @click="clickSea" class="iconfont icon-sousuo"></i>
          <div class="input" v-show="searchShow">
            <input placeholder="请输入" type="text">
          </div>
        </div>-->
      </div>
    </div>
    <div class="bottom">
      <div @click="home" class="logo">
        <img alt src="../../../assets/images/logo.png" />
      </div>
      <div class="block">
        <div @click="clickNav" class="mini">
          {{navigation}}
          <i :class="navShow ? 'iconfont icon-error' : 'iconfont icon-menu'"></i>
        </div>
        <div class="nav" v-show="navShow">
          <ul class="sidebar-ul">
            <li
              :class="commonUrl===item.url?'active sidebar-li':'sidebar-li'"
              :key="i"
              @click="changeMenu(item, i)"
              v-for="(item,i) in data.nav"
            >
              <span>{{item.name}}</span>
              <i class="iconfont icon-jiantou" v-if="item.child" v-on:click.stop="mouMenu(item, i)"></i>
              <ul :class="sub===i?'block':'none'" class="sub-menu" v-if="item.child">
                <li
                  :key="index"
                  class="sub-li"
                  v-for="(res, index) in item.child"
                  v-on:click.stop="changeChild(res.url, res.id, item)"
                >
                  <div class="icon"></div>
                  <div>{{res.name}}</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  data () {
    return {
      navShow: false,
      sub: '',
      // searchShow: false,
      navigation: '导航'
    }
  },
  computed: {
    commonUrl () {
      return this.$store.getters['common/commonUrl']
    },
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    },
  },
  watch: {
    '$store.state.common.commonLanguage' (val) {
      this.lang()
    }
  },
  created () { },
  mounted () { },
  methods: {
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.navigation = '導航'
      } else if (this.commonLanguage == 'en-US') {
        this.navigation = 'Menu'
      } else {
        this.navigation = '导航'
      }
    },
    home () {
      this.$router.push({
        path: `/home`
      })
    },
    clickNav () {
      this.navShow = !this.navShow
      this.sub = ''
      if (this.navShow) {
        document.body.addEventListener('touchmove', this.stopTouch, { passive: false, capture: true })
        document.documentElement.scrollTop = 0
      } else {
        document.body.removeEventListener('touchmove', this.stopTouch, { capture: true })
      }
    },
    stopTouch (e) {
      e.preventDefault()
    },
    changeMenu (item, i) {
      this.navShow = false
      document.body.removeEventListener('touchmove', this.stopTouch, { capture: true })
      if (item.url == '/new') {
        this.$router.push({
          path: `${item.url}?id=${item.child[0].id}`
        })
      } else {
        this.$router.push({
          path: item.url
        })
      }
      this.$store.dispatch('common/commonUrl', item.url)
    },
    mouMenu (item, i) {
      this.sub = i
    },
    // clickSea () {
    //   this.searchShow = !this.searchShow
    // },
    language (data) {
      let res = {
        lang: data
      }
      let _params = {
        paramsDate: res,
        callBack: () => {
          this.$emit('loadData')
          this.$store.dispatch('common/commonLanguage', data)
          localStorage.setItem('language', data)
        }
      }
      this.$store.dispatch('home/getLanguage', _params)
    },
    changeChild (url, id, item) {
      this.changeMenu(item)
      if (url == undefined) {
        this.$router.push({
          path: `/new?id=${id}`
        })
      } else {
        this.$router.push({
          path: url
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.common-header {
  width: 100%;
  .top {
    width: 100%;
    height: 64px;
    background: #46433f;
    color: white;
    overflow: hidden;
    .top-right {
      display: flex;
      position: absolute;
      right: 40px;
      line-height: 64px;
      font-size: 24px;
      div {
        margin: 0 0 0 20px;
      }
      .tel {
        color: white;
        text-decoration: none;
        i {
          margin-right: 9px;
        }
      }
      .language {
        span {
          padding: 0 15px;
          border-right: 1px solid #999999;
          cursor: pointer;
          &:hover {
            color: #c12219;
          }
        }
      }
    }
    .search {
      i {
        display: block;
      }
      .input {
        position: absolute;
        top: 64px;
        right: -40px;
        background: #3a3633;
        width: 262px;
        height: 84px;
        padding: 0 30px;
        animation: mySea 0.5s alternate;
        animation-fill-mode: forwards;
        animation-direction: alternate;
        overflow: hidden;
        input {
          line-height: 24px;
          margin-top: 5px;
          width: 262px;
          background: #3a3633;
          border: none;
          border-bottom: 1px solid white;
          color: white;
        }
      }
    }
  }
  .bottom {
    height: 150px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 468px;
      height: 64px;
      img {
        width: 468px;
        height: 64px;
      }
    }
    .block {
      font-size: 28px;
      .mini {
        i {
          color: #666;
        }
      }
      .nav {
        position: fixed;
        top: 213px;
        left: 0;
        background: rgba($color: black, $alpha: 0.8);
        width: 100%;
        height: 100%;
        font-size: 28px;
        z-index: 9;
        color: white;
        .sidebar-ul {
          padding: 0 20px;
          .sidebar-li {
            width: 100%;
            border-bottom: 1px solid white;
            min-height: 82px;
            line-height: 82px;
            i {
              float: right;
            }
            &:last-child {
              border-bottom: none;
            }
          }
        }
        .sub-menu {
          overflow: hidden;
          line-height: 82px;
          .sub-li {
            height: 90px;
            display: flex;
            align-items: center;
          }
          .icon {
            width: 16px;
            height: 16px;
            background: #c12219;
            transform: rotateX(360deg) rotateY(360deg) rotateZ(45deg);
            margin: 0 20px;
          }
        }
      }
    }
  }
}
@keyframes mySea {
  0% {
    height: 0;
  }
  100% {
    height: 84px;
  }
}
</style>
