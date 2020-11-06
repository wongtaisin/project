<template>
  <div class="page-research-detail">
    <common-banner-img :src="getNewsDetail.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>新闻详情</p>
        </div>
        <ul>
          <li
            :class="{active: getNewsDetail.cid === item.id}"
            :key="i"
            @click="select(item.id)"
            v-for="(item, i) in getNewsDetail.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="getNewsDetail.title" :icon="false"></common-inside-title>
        <div class="year">
          <span>{{getNewsDetail.date}}</span>
          <span class="original" v-if="original">原创</span>
          <span>阅读：{{getNewsDetail.views}}</span>
        </div>
        <div @contextmenu.prevent class="text" v-html="getNewsDetail.content" v-if="original"></div>
        <div v-html="getNewsDetail.content" v-if="!original"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      original: false
    }
  },
  computed: {
    getNewsDetail () {
      return this.$store.getters['news/getNewsDetail'].data
    }
  },
  activated () {
    this.loadData()
  },
  destroy () { },
  methods: {
    loadData () {
      let _params = {
        paramsDate: {
          id: this.$route.query.cid
        },
        callBack: () => {
          if (this.getNewsDetail.is_original == 1) {
            this.original = true
            this.$nextTick(() => {
              document.oncontextmenu = new Function("event.returnValue=false") // 禁用右键
              document.onselectstart = new Function("event.returnValue=false") // 禁用选择
            })
          } else {
            this.original = false
            this.$nextTick(() => {
              document.oncontextmenu = new Function("event.returnValue=true") // 启用右键
              document.onselectstart = new Function("event.returnValue=true") // 启用选择
            })
          }
        }
      }
      this.$store.dispatch('news/getNewsDetail', _params)
    },
    select (e) {
      this.$router.push({
        path: '/news',
        query: {
          id: e
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-research-detail {
  height: calc(100% - 90px);
  .content {
    width: 1080px;
    min-height: calc(100% - 300px);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .right {
      width: 810px;
      margin-bottom: 60px;
      .year {
        font-size: 16px;
        color: #999;
        margin: 40px 0;
        span {
          margin-right: 10px;
        }
        .original {
          color: rgba(232, 20, 27, 1);
          font-weight: bold;
        }
      }
      .text {
        background: white;
      }
    }
  }
}
</style>
