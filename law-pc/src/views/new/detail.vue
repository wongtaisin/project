<template>
  <section class="page-domain-detail">
    <common-banner-img :src="getNewsDetail.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">{{getNewsDetail.sidebar_title}}</div>
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
          <span class="original" v-if="original">{{language.original}}</span>
          <span>{{language.read}}：{{getNewsDetail.views}}</span>
        </div>
        <div @contextmenu.prevent class="text" v-html="getNewsDetail.content" v-if="original"></div>
        <div v-html="getNewsDetail.content" v-if="!original"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      original: false,
      styleObj: '../../assets/images/new/watermark.png',
      language: {}
    }
  },
  computed: {
    getNewsDetail () {
      return this.$store.getters['news/getNewsDetail'].data
    },
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'newsDetail') this.loadData()
    },
    '$store.state.common.commonLanguage' (val) {
      this.lang()
    }
  },
  created () { },
  activated () {
    this.loadData()
  },
  destroy () { },
  methods: {
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.language = {
          read: '閱讀',
          original: '原創',
        }
      } else if (this.commonLanguage == 'en-US') {
        this.language = {
          read: 'Read',
          original: 'Original',

        }
      } else {
        this.language = {
          read: '阅读',
          original: '原创',
        }
      }
    },
    loadData () {
      this.lang()
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
        path: '/new',
        query: {
          id: e
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-domain-detail {
  height: calc(100% - 90px);
  .content {
    width: 1080px;
    min-height: calc(100% - 300px);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .right {
      width: 830px;
      margin-bottom: 60px;
      .year {
        font-size: 16px;
        color: #999;
        margin: 40px 0;
        span {
          margin-right: 10px;
        }
        .original {
          color: #c12219;
          font-weight: bold;
        }
      }
      .text {
        background: url('../../assets/images/new/watermark.png');
      }
    }
  }
}
</style>
