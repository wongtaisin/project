<template>
  <section class="common-header">
    <div @click="home" class="logo">
      <img alt src="../../../assets/images/logo.png" />
    </div>
    <div class="right">
      <div class="top">
        <div class="top-right">
          <div class="tel">
            <i class="iconfont icon-dianhua"></i>
            {{data.tel}}
          </div>
          <div class="language">
            <span @click="language('zh-CN')">简体</span>
            <span @click="language('zh-HK')">繁体</span>
            <span @click="language('en-US')">英文</span>
          </div>
          <!-- <div class="search">
            <i @click="clickSea" class="iconfont icon-sousuo"></i>
            <div @mouseleave="moveSea" class="input" v-show="searchShow">
              <input placeholder="请输入" type="text">
            </div>
          </div>-->
        </div>
      </div>
      <div class="nav">
        <ul class="sidebar-ul">
          <li
            :class="commonUrl===item.url?'active sidebar-li':'sidebar-li'"
            :key="i"
            @click="changeMenu(item, i)"
            v-for="(item,i) in data.nav"
          >
            <span @mouseenter="mouMenu(item, i)">
              {{item.name}}
              <p>{{item.name_en}}</p>
            </span>
            <ul
              :class="sub===i?'block':'none'"
              @mouseleave="moveMenu"
              class="sub-menu"
              v-if="item.child"
            >
              <li
                :key="index"
                class="sub-li"
                v-for="(res, index) in item.child"
                v-on:click.stop="changeChild(res.url, res.id, item)"
              >{{res.name}}</li>
            </ul>
          </li>
        </ul>
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
      sub: '',
      // searchShow: false
    }
  },
  computed: {
    commonUrl () {
      return this.$store.getters['common/commonUrl'] || '/home'
    }
  },
  created () { },
  mounted () { },
  methods: {
    home () {
      this.$router.push({
        path: `/home`
      })
      this.$store.dispatch('common/commonUrl', '/home')
    },
    changeMenu (item) {
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
    moveMenu () {
      this.sub = ''
    },
    // clickSea () {
    //   this.searchShow = !this.searchShow
    // },
    // moveSea () {
    //   this.searchShow = false
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
  width: 1080px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .logo {
    width: 307px;
    height: 42px;
    cursor: pointer;
    img {
      width: 307px;
      height: 42px;
    }
  }
  .right {
    height: 90px;
    .top {
      height: 30px;
      width: 100%;
      position: relative;
      margin-top: 5px;
      .top-right {
        display: flex;
        position: absolute;
        right: 0;
        div {
          margin: 0 0 0 10px;
        }
        .tel {
          i {
            margin-right: 5px;
          }
        }
        .language {
          span {
            margin-left: 5px;
            cursor: pointer;
            &:hover {
              color: #c12219;
            }
          }
        }
      }
      .search {
        cursor: pointer;
        i {
          display: block;
        }
        .input {
          position: absolute;
          right: 0px;
          background: #3a3633;
          width: 256px;
          height: 42px;
          padding: 0 15px;
          animation: mySea 0.5s alternate;
          animation-fill-mode: forwards;
          animation-direction: alternate;
          overflow: hidden;
          z-index: 99;
          input {
            line-height: 24px;
            margin-top: 5px;
            width: 100%;
            background: #3a3633;
            border: none;
            border-bottom: 1px solid white;
            color: white;
          }
        }
      }
    }
    .nav {
      font-size: 14px;
      height: 55px;
      .sidebar-ul {
        display: flex;
        .sidebar-li {
          padding: 9px 17px;
          position: relative;
          text-align: center;
          cursor: pointer;
          span {
            &:hover {
              color: #c5241a;
            }
          }
          p {
            font-size: 12px;
          }
        }
        .active {
          color: #c12219;
        }
      }
      .sub-menu {
        background: white;
        position: absolute;
        overflow: hidden;
        width: 115px;
        border: 1px solid #e7e7e7;
        margin: -10px 0 0 -20px;
        transition: 0.3s;
        color: black;
        z-index: 9;
        .sub-li {
          text-align: center;
          line-height: 48px;
          border-bottom: 1px solid #e7e7e7;
          &:last-child {
            border-bottom: none;
          }
          &:hover {
            color: #c12219;
          }
        }
      }
      .block {
        // opacity: 1;
        display: block;
        transform: translateY(0);
      }
      .none {
        // opacity: 0;
        display: none;
        transform: translateY(26%);
      }
    }
  }
}
@keyframes mySea {
  0% {
    height: 0;
  }
  100% {
    height: 42px;
  }
}
</style>
