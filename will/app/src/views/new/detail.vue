<template>
  <div class="page-research-detail">
    <common-banner-img :src="getNewsDetail.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="getNewsDetail.title" :icon="false"></common-inside-title>
        <div class="year">
          <span>{{getNewsDetail.date}}</span>
          <span class="original" v-if="original">原创</span>
          <span>阅读：{{getNewsDetail.views}}</span>
        </div>
        <div @contextmenu.prevent class="text" v-html="getNewsDetail.content" v-if="original"></div>
        <div class="texts" v-html="getNewsDetail.content" v-if="!original"></div>
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
  updated () {
    this.widthImg()
  },
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
    widthImg () {
      let texts = document.getElementsByClassName('texts')[0]
      texts.querySelectorAll('img').forEach((item) => {
        item.style.maxWidth = '100%'
      })
      texts.querySelectorAll('p').forEach((item) => {
        if (item.querySelectorAll('img').length !== 0) {
          item.style.textIndent = '0'
          item.style.textAlign = 'center'
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-research-detail {
  .content {
    width: 750px;
    .right {
      padding: 0 32px;
      margin-bottom: 60px;
      overflow: hidden;
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
      .texts {
        font-size: 28px !important;
        line-height: 1.8 !important;
        img {
          width: 100% !important;
        }
        p,
        span,
        ul,
        li,
        div,
        em,
        i {
          font-size: 28px !important;
          line-height: 1.8 !important;
          img {
            width: 100% !important;
          }
        }
        section {
          p {
            text-indent: 0 !important;
            img {
              width: 100% !important;
            }
          }
        }
      }
    }
  }
}
</style>
