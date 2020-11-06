<template>
  <div class="page-research-detail">
    <common-banner-img :src="getPracticeAreasDetail.wap_banner"></common-banner-img>
    <common-inside-title :cn="getPracticeAreasDetail.title" :icon="false"></common-inside-title>
    <div class="content">
      <div class="texts" v-html="getPracticeAreasDetail.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    getPracticeAreasDetail () {
      return this.$store.getters['research/getPracticeAreasDetail'].data
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
          id: this.$route.query.id
        },
        callBack: () => {
        }
      }
      this.$store.dispatch('research/getPracticeAreasDetail', _params)
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
    margin-top: 40px;
    padding: 0 32px;
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
</style>
