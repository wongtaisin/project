<template>
  <section class="page-domain-detail">
    <common-banner-img :src="getPracticeAreasDetail.banner"></common-banner-img>
    <common-inside-title :cn="getPracticeAreasDetail.info.title" :icon="false"></common-inside-title>
    <div class="content">
      <div class="texts" v-html="getPracticeAreasDetail.info.info"></div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    getPracticeAreasDetail () {
      return this.$store.getters['domain/getPracticeAreasDetail']
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'domainDetail') this.loadData()
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
    loadData () {
      let data = {
        id: this.$route.query.id
      }
      let _params = {
        paramsDate: data,
        callBack: () => {

        }
      }
      this.$store.dispatch('domain/getPracticeAreasDetail', _params)
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
  .content {
    padding: 0 40px;
    margin-top: 40px;
    margin-bottom: 40px;
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
  }
}
</style>
