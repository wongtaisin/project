<template>
  <div class="page-team">
    <common-banner-img :src="getProfessionals.data.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="title" :icon="false"></common-inside-title>
        <div class="texts" v-html="getConsult.content" v-if="page.type==3"></div>
        <div class="texts" v-else-if="page.type==4" v-html="getLawyer.content"></div>
        <div v-else>
          <ul class="list">
            <li :key="i" v-for="(item, i) in getProfessionals.list">
              <div class="img">
                <img alt v-lazy="item.avatar" />
              </div>
              <div class="text">{{item.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      page: {
        type: 1,
        page: 1
      },
      loadMoreFlag: true,
      title: ''
    }
  },
  computed: {
    getConsult () {
      return this.$store.getters['team/getConsult']
    },
    getLawyer () {
      return this.$store.getters['team/getLawyer']
    },
    getProfessionals () {
      return this.$store.getters['team/getProfessionals']
    }
  },
  watch: {
    $route: {
      handler: function (val, from) {
        if (val.name != 'team') return false
        this.page.type = val.query.id
        if (val.query.id == 3) return this.loadConsult()
        if (val.query.id == 4) return this.loadLawyer()
        this.page.page = 1
        this.loadData()
      },
      immediate: true
    }
  },
  mounted () {
    this.scroll()
  },
  methods: {
    loadConsult () {
      let _params = {
        callBack: () => {
          this.title = '监事会'
        }
      }
      this.$store.dispatch('team/getConsult', _params)
    },
    loadLawyer () {
      let _params = {
        callBack: () => {
          this.title = '公益律师团'
        }
      }
      this.$store.dispatch('team/getLawyer', _params)
    },
    scroll () {
      this.$nextTick(() => {
        window.onscroll = () => {
          if (this.$route.query.id == 3 || this.$route.query.id == 4) return false
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset  // 滚动条的垂直位置
          let innerHeight = window.innerHeight // 返回窗口的文档显示区的高度
          let scrollHeight = document.documentElement.scrollHeight // 页面内容高度
          if (scrollTop + innerHeight + 10 >= scrollHeight) {
            this.loadMore()
          }
        }
      })
    },
    loadData () {
      let _params = {
        paramsDate: this.page,
        callBack: () => {
          this.loadMoreFlag = true
          this.getProfessionals.data.sidebar.map((item, i) => {
            if (this.getProfessionals.data.type == item.id) {
              this.title = item.name
            }
          })
        }
      }
      this.$store.dispatch('team/getProfessionals', _params)
    },
    loadMore () {
      if (!this.loadMoreFlag) return false
      if (this.page.page >= this.getProfessionals.data.pageCount) return false
      this.page.page += 1
      this.loadData()
    }
  }
}
</script>

<style lang='scss' scoped>
.page-team {
  width: 100%;
  min-height: 100%;
  .content {
    width: 750px;
    .right {
      padding: 0 32px;
      margin-bottom: 40px;
      .list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 324px;
          margin-top: 50px;
          cursor: pointer;
          &:hover {
            color: rgba(232, 20, 27, 1);
            animation: pageTeamLi 0.5s alternate;
            animation-fill-mode: forwards;
            animation-direction: alternate;
            img {
              animation: pageTeamImg 0.5s alternate;
              animation-fill-mode: forwards;
              animation-direction: alternate;
            }
            .line {
              animation: pageTeamLine 0.5s alternate;
              animation-fill-mode: forwards;
              animation-direction: alternate;
            }
          }
          .img {
            width: 324px;
            height: 364px;
            overflow: hidden;
            img {
              width: 324px;
              height: 364px;
            }
          }
          .text {
            width: 324px;
            margin-top: 10px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
