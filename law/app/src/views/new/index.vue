<template>
  <div class="page-new">
    <common-banner-img :src="getNews.data.banner"></common-banner-img>
    <div class="content">
      <div class="new">
        <common-inside-title :cn="getNews.data.title" :en="getNews.data.title_en"></common-inside-title>
        <common-date-list :year="getNews.data.years" @year="year" v-if="getNews.data.years"></common-date-list>
        <ul class="list">
          <li :key="i" @click="changeMenu(item, i)" v-for="(item, i) in getNews.list">
            <!-- <div class="img">
              <img :src="item.image || nothing" alt />
            </div>-->
            <div class="text">
              <div class="dis">
                <p>{{item.title}}</p>
                <span>{{item.Ym}}-{{item.day}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      page: {
        page: 1,
        cid: 1,
        year: 2019
      },
      loadMoreFlag: true,
      nothing: require('../../assets/images/common/nothing.jpg'),
    }
  },
  computed: {
    getNews () {
      return this.$store.getters['news/getNews']
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (to) {
        console.log(to)
        if (to.name != 'news') return false
        let date = new Date
        this.page.page = 1
        this.page.cid = to.query.id
        this.page.year = this.getNews.data.current_year || date.getFullYear()
        this.loadData()
        console.log(this.getNews)
      },
    },
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'news') this.loadData()
    }
  },
  mounted () {
    this.scroll()
  },
  methods: {
    scroll () {
      window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset // 滚动条的垂直位置
        let innerHeight = window.innerHeight // 返回窗口的文档显示区的高度
        let scrollHeight = document.documentElement.scrollHeight // 页面内容高度
        // console.log(scrollTop, innerHeight, scrollHeight, `滑动事件`)
        if (scrollTop + innerHeight + 10 >= scrollHeight) {
          this.loadMore()
        }
      }
    },
    loadData () {
      this.loadMoreFlag = false
      let _params = {
        paramsDate: this.page,
        callBack: () => {
          console.log(this.getNews)
          this.loadMoreFlag = true
        }
      }
      this.$store.dispatch('news/getNews', _params)
    },
    loadMore () {
      if (!this.loadMoreFlag) return false
      if (this.page.page >= this.getNews.totalPages) return false
      this.page.page += 1
      this.loadData()
    },
    changeMenu (item) {
      this.$router.push({
        path: '/new/detail',
        query: {
          cid: item.id
        }
      })
    },
    year (e) {
      this.page.page = 1
      this.page.year = e
      this.loadData()
    },
    select (id) {
      this.page.page = 1
      this.page.cid = id
      this.loadData()
    }
  }
}
</script>

<style lang='scss' scoped>
.page-new {
  width: 100%;
  min-height: calc(100% - 318px);
  padding-bottom: 39px;
  .content {
    padding: 0 39px;
    .new {
      width: 100%;
      .list {
        width: 100%;
        margin-top: 39px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid #f8f7f7;
          // .img {
          //   width: 140px;
          //   height: 111px;
          //   overflow: hidden;
          //   img {
          //     width: 140px;
          //     height: 111px;
          //   }
          // }
          .text {
            // width: 75%;
            width: 100%;
            margin-top: 20px;
            .dis {
              p {
                width: 100%;
                // white-space: nowrap;
                // text-overflow: ellipsis;
                // overflow: hidden;
                font-size: 28px;
                margin-bottom: 5px;
              }
              span {
                font-size: 24px;
                color: #666;
              }
            }
          }
        }
      }
    }
  }
}
@keyframes pagenewmLi {
  0% {
    color: black;
    background: white;
  }
  100% {
    background: #c12219;
  }
}
</style>
