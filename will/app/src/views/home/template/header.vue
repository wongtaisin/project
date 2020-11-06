<template>
  <div class="common-header">
    <div class="top">
      <div class="top-right">
        <a :href="'tel:' + data.tel" class="tel">
          <i class="iconfont icon-dianhua"></i>
          {{data.tel}}
        </a>
      </div>
    </div>
    <div class="bottom">
      <div @click="home" class="logo">
        <img alt src="../../../assets/images/logo.png" />
      </div>
      <div class="block">
        <div @click="clickNav" class="mini">
          导航
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
              <i class="iconfont icon-jiantou" v-if="item.child" v-on:click.stop="mouMenu(i)"></i>
              <ul :class="sub===i?'block':'none'" class="sub-menu" v-if="item.child">
                <li
                  :key="index"
                  class="sub-li"
                  v-for="(res, index) in item.child"
                  v-on:click.stop="changeChild( res.id, item)"
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
  </div>
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
      sub: ''
    }
  },
  computed: {
    commonUrl () {
      return this.$store.getters['common/commonUrl']
    }
  },
  watch: {
    'navShow' (val) {
      this.capture()
    }
  },
  created () { },
  mounted () {
    console.log(this.commonUrl)
  },
  methods: {
    Toggle (i) {
      document.querySelectorAll('.sidebar-ul').forEach((item, index) => {
        let _class = item.querySelectorAll('.sidebar-li')[i].childNodes[2]
        if (_class.classList.contains("block")) return _class.classList.remove('block')
        _class.classList.add('block')
      })
    },
    home () {
      this.navShow = false
      this.$router.push({
        path: `/home`
      })
    },
    clickNav () {
      this.navShow = !this.navShow
      this.sub = ''
    },
    capture () {
      // 为body蒙层容器dom节点，stopTouch禁止属性
      // if (this.navShow) {
      //   document.body.addEventListener('touchmove', this.stopTouch, { passive: false, capture: true })
      //   document.documentElement.scrollTop = 0
      // } else {
      //   document.body.removeEventListener('touchmove', this.stopTouch, { capture: true })
      // }
      if (this.navShow) {
        document.body.style.width = '100%'
        document.body.style.height = '100%'
        document.body.style.position = 'fixed'
        document.documentElement.scrollTop = 0
      } else {
        document.body.style.height = ''
        document.body.style.overflow = ''
        document.body.style.position = ''
      }
    },
    stopTouch (e) {
      e.preventDefault()
    },
    changeMenu (item) {
      this.navShow = false
      if (item.child) {
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
    mouMenu (i) {
      this.sub = i
      this.Toggle(i)
    },
    changeChild (id, item) {
      this.navShow = false
      this.$router.push({
        path: `${item.url}?id=${id}`
      })
      this.$store.dispatch('common/commonUrl', item.url)
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
    }
  }
  .bottom {
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    .logo {
      width: 468px;
      height: 142px;
      img {
        width: 468px;
        height: 142px;
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
        top: 243px;
        left: 0;
        background: rgba($color: black, $alpha: 0.8);
        width: 100%;
        height: 100%;
        font-size: 28px;
        z-index: 9;
        color: white;
        overflow-y: auto;
        .sidebar-ul {
          padding: 0 20px;
          .none {
            display: none;
          }

          .block {
            display: block;
          }
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
          overflow-y: auto;
          line-height: 82px;
          display: none;
          max-height: 350px;
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
</style>
