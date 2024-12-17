<template>
  <div class="page-research">
    <common-banner-img :src="getPracticeAreas.data.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="title" :en="`Booking point`"></common-inside-title>
        <ul class="list">
          <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getPracticeAreas.list">
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
        cid: 0,
        page: 1
      },
      loadMoreFlag: true,
      title: ''
    }
  },
  computed: {
    getPracticeAreas () {
      return this.$store.getters['research/getPracticeAreas']
    }
  },
  watch: {
    $route: {
      handler: function (val, from) {
        if (val.name != 'research') return false
        this.page.cid = val.query.id
        this.loadData()
      },
      immediate: true
    }
  },
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
          this.getPracticeAreas.data.sidebar.map((item, i) => {
            if (this.page.cid == item.id) {
              this.title = item.name
            }
          })
        }
      }
      this.$store.dispatch('research/getPracticeAreas', _params)
    },
    loadMore () {
      if (!this.loadMoreFlag) return false
      if (this.page.page >= this.getPracticeAreas.data.pageCount) return false
      this.page.page += 1
      this.loadData()
    },
    goDetail (e) {
      this.$router.push({
        path: '/research/detail',
        query: {
          id: e
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-research {
  width: 100%;
  .content {
    padding: 0 32px;
    .list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;
      li {
        width: 100%;
        border-bottom: 1px solid #ebe8e8;
        margin-top: 30px;
        cursor: pointer;
        overflow: hidden;
        padding-bottom: 20px;
        &:hover {
          .title {
            color: rgba(232, 20, 27, 1);
          }
        }
        .title {
          font-size: 32px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .text {
          margin-top: 20px;
          font-size: 24px;
          line-height: 1.6;
          color: #666;
        }
      }
    }
  }
}
</style>
