<template>
  <div class="page-new">
    <common-banner-img :src="getNews.data.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="title" :icon="false"></common-inside-title>
        <ul class="list">
          <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getNews.list">
            <div class="text">
              <div class="dis">
                <p>{{item.title}}</p>
                <span>{{item.description}}</span>
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
  data () {
    return {
      id: '',
      page: {
        page: 1,
        cid: 1,
      },
      nothing: require('../../assets/images/common/nothing.png'),
      loadMoreFlag: true,
      title: ''
    }
  },
  computed: {
    getNews () {
      return this.$store.getters['news/getNews']
    }
  },
  watch: {
    $route: {
      handler: function (val, from) {
        if (val.name != 'news') return false
        this.page.cid = val.query.id
        this.loadData()
      },
      immediate: true
    }
  },
  // activated () {
  //   this.page.cid = this.$route.query.id
  //   this.loadData()
  // },
  mounted () {
    this.scroll()
  },
  methods: {
    scroll () {
      this.$nextTick(() => {
        window.onscroll = () => {
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
      this.loadMoreFlag = false
      let _params = {
        paramsDate: this.page,
        callBack: () => {
          this.loadMoreFlag = true
          this.getNews.data.sidebar.map((item, i) => {
            if (this.getNews.data.cid == item.id) {
              this.title = item.name
            }
          })
        }
      }
      this.$store.dispatch('news/getNews', _params)
    },
    loadMore () {
      if (!this.loadMoreFlag) return false
      if (this.page.page >= this.getNews.data.pageCount) return false
      this.page.page += 1
      this.loadData()
    },
    goDetail (e) {
      this.$router.push({
        path: '/news/detail',
        query: {
          cid: e
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-new {
  width: 100%;
  .content {
    width: 750px;
    .right {
      padding: 0 32px;
      margin-bottom: 30px;
      .list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        li {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 30px 0;
          border-bottom: 1px solid #ebe8e8;
          cursor: pointer;
          .img {
            width: 320px;
            height: 240px;
            overflow: hidden;
            img {
              width: 320px;
              height: 240px;
            }
          }
          .text {
            width: 100%;
            .dis {
              p {
                font-size: 36px;
                margin-bottom: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              span {
                color: #666;
              }
            }
          }
        }
      }
    }
  }
}
</style>
