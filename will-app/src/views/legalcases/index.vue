<template>
  <div class="page-legalcases">
    <common-banner-img :src="getLegalcases.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="`法规案例`" :en="`Legislation & Cases`"></common-inside-title>
        <ul class="list">
          <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getLegalcases.list">
            <div class="title">{{item.title}}</div>
            <div class="text">{{item.description}}</div>
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
      page: {
        page: 1
      },
      loadMoreFlag: true
    }
  },
  computed: {
    getLegalcases () {
      return this.$store.getters['legalcases/getLegalcases'].data
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
        }
      }
      this.$store.dispatch('legalcases/getLegalcases', _params)
    },
    loadMore () {
      if (!this.loadMoreFlag) return false
      if (this.page.page >= this.getLegalcases.pageCount) return false
      this.page.page += 1
      this.loadData()
    },
    goDetail (e) {
      this.$router.push({
        path: '/legalcases/detail',
        query: {
          id: e
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-legalcases {
  width: 100%;
  min-height: 100%;
  .content {
    width: 750px;
    margin-bottom: 40px;
    .list {
      padding: 0 32px;
      li {
        width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid #dbdbdb;
        margin-top: 30px;
        overflow: hidden;
        &:hover {
          .title {
            color: rgba(232, 20, 27, 1);
          }
        }
        .title {
          font-size: 32px;
        }
        .text {
          margin-top: 20px;
          font-size: 24px;
          color: #666;
        }
      }
    }
  }
}
</style>
