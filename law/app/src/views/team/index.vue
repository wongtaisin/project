<template>
  <section class="page-team">
    <common-banner-img :src="getProfessionals.banner"></common-banner-img>
    <div class="content">
      <common-inside-title :cn="`专业团队`" :en="`Professional TEAM`"></common-inside-title>
      <ul class="list">
        <li :key="i" @click="changeMenu(item, i)" v-for="(item, i) in getProfessionals.list">
          <div class="img">
            <img :src="item.avatar" alt />
          </div>
          <div class="text">
            <div class="cont">
              <div class="name">{{item.name}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      page: {
        page: 1
      },
      loadMoreFlag: true
    }
  },
  computed: {
    getProfessionals () {
      return this.$store.getters['team/getProfessionals']
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'team') this.loadData()
    }
  },
  created () { },
  mounted () {
    this.loadData()
    this.scroll()
  },
  methods: {
    scroll () {
      this.$nextTick(() => {
        window.onscroll = () => {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset  // 滚动条的垂直位置
          let innerHeight = window.innerHeight // 返回窗口的文档显示区的高度
          let scrollHeight = document.documentElement.scrollHeight // 页面内容高度
          // console.log(scrollTop, innerHeight, scrollHeight, `滑动事件11`)
          if (scrollTop + innerHeight + 10 >= scrollHeight) {
            this.loadMore()
          }
        }
      })
    },
    loadData () {
      this.loadMoreFlag = false
      let _params = {
        paramsDate: this.page,
        callBack: () => {
          this.loadMoreFlag = true
        }
      }
      this.$store.dispatch('team/getProfessionals', _params)
    },
    loadMore () {
      if (!this.loadMoreFlag) return false
      if (this.page.page >= this.getProfessionals.totalPages) return false
      this.page.page += 1
      this.loadData()
    },
    changeMenu (item) {
      this.$router.push({
        path: '/team/detail',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-team {
  width: 100%;
  min-height: calc(100% - 318px);
  padding-bottom: 30px;
  .content {
    padding: 0 39px;
    .list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 324px;
        height: 380px;
        border: 1px solid #ddd;
        margin-bottom: 9px;
        &:hover {
          color: white;
          background: #c12219;
          animation: pageTeamLi 0.5s alternate;
          animation-fill-mode: forwards;
          animation-direction: alternate;
          img {
            animation: pageTeamImg 0.5s alternate;
            animation-fill-mode: forwards;
            animation-direction: alternate;
          }
        }
        .img {
          width: 324px;
          height: 300px;
          overflow: hidden;
          img {
            width: 324px;
            height: 300px;
          }
        }
        .text {
          width: 324px;
          line-height: 80px;
          background: #c12219;
          color: white;
          .name {
            text-align: center;
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>
