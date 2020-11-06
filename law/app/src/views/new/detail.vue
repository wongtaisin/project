<template>
  <section class="page-domain-detail">
    <common-banner-img :src="getNewsDetail.banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="getNewsDetail.title" :icon="false"></common-inside-title>
        <div class="year">
          <span>{{getNewsDetail.date}}</span>
          <span class="year-original" v-if="original">{{language.original}}</span>
          <span>{{language.read}}：{{getNewsDetail.views}}</span>
        </div>
        <div
          @click.prevent="false"
          class="text text-original"
          v-html="getNewsDetail.content"
          v-if="original"
        ></div>
        <div class="texts" v-html="getNewsDetail.content" v-if="!original"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      original: false,
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
  updated () {
    this.widthImg()
  },
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
          if (this.getNewsDetail.is_original == 1) this.original = true
          else this.original = false
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
.page-domain-detail {
  width: 100%;
  min-height: calc(100% - 318px);
  padding-bottom: 40px;
  .content {
    .right {
      padding: 0 40px;
      .year {
        font-size: 32px;
        color: #999;
        margin-bottom: 20px;
        span {
          margin-right: 15px;
        }
        .year-original {
          color: #c12219;
          font-weight: bold;
        }
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
      }
      .text-origina {
        background: url('../../assets/images/new/watermark.png');
        background-size: 180%;
      }
    }
  }
}
</style>
