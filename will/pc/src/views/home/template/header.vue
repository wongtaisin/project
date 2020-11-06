<template>
  <div class="common-header">
    <div class="fu">
      <div @click="home" class="logo">
        <img alt src="../../../assets/images/logo.png" />
      </div>
      <div class="flower">热线：{{data.tel}}</div>
    </div>
    <nav class="nav">
      <ul class="sidebar-ul">
        <li
          :class="commonUrl===item.url ?'active sidebar-li':'sidebar-li'"
          :key="i"
          @click="changeMenu(item, i)"
          v-for="(item,i) in data.nav"
        >
          <span @mouseenter="mouMenu(item, i)">
            {{item.name}}
            <!-- <p>{{item.name_en}}</p> -->
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
              v-on:click.stop="changeChild(res.id, item)"
            >{{res.name}}</li>
          </ul>
        </li>
      </ul>
    </nav>
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
      sub: '',
    }
  },
  computed: {
    commonUrl () {
      return this.$store.getters['common/commonUrl'] || '/home'
    }
  },
  mounted () { },
  methods: {
    home () {
      this.$router.push({
        path: `/home`
      })
      this.$store.dispatch('common/commonUrl', '/home')
    },
    changeMenu (item) {
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
    mouMenu (item, i) {
      this.sub = i
    },
    moveMenu () {
      this.sub = ''
    },
    changeChild (id, item) {
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
  .fu {
    width: 1080px;
    height: 146px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 307px;
      height: 99px;
      cursor: pointer;
      img {
        width: 307px;
        height: 99px;
      }
    }
    .flower {
      width: 262px;
      height: 146px;
      background: url('../../../assets/images/common/flower.png') no-repeat;
      background-size: 262px 146px;
      color: white;
      text-align: center;
      line-height: 72px;
      font-size: 16px;
    }
  }
  .nav {
    width: 100%;
    background: #e41315;
    .sidebar-ul {
      width: 1080px;
      height: 44px;
      margin: 0 auto;
      font-size: 14px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .sidebar-li {
        width: 100%;
        line-height: 44px;
        position: relative;
        text-align: center;
        cursor: pointer;
        span {
          display: inline-block;
        }
        &:hover {
          color: white;
          line-height: 44px;
        }
      }
      .active {
        line-height: 44px;
        background: #741011;
      }
    }
    .sidebar-li {
      &:nth-child(2) {
        ul {
          width: 310px;
        }
      }
    }
    .sub-menu {
      background: white;
      position: absolute;
      overflow: hidden;
      border: 1px solid #e7e7e7;
      transition: 0.3s;
      color: black;
      // z-index: 9;
      .sub-li {
        text-align: center;
        line-height: 48px;
        border-bottom: 1px solid #e7e7e7;
        padding: 0 10px;
        min-width: 90px;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          color: rgba(232, 20, 27, 1);
        }
      }
    }
    .block {
      // opacity: 1;
      // transform: translateY(0);
      display: block;
      z-index: 9;
    }
    .none {
      // opacity: 0;
      // transform: translateY(26%);
      display: none;
    }
  }
}
</style>
