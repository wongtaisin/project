<template>
  <section class="page-about">
    <common-banner-img :src="getAboutDesc.banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="`关于嘉得信`" :en="`about jiadesen`"></common-inside-title>
        <div class="texts" v-html="getAboutDesc.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {

  },
  computed: {
    getAboutDesc () {
      return this.$store.getters['common/getAboutDesc'].data
    }
  },
  data () {
    return {

    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'about') this.loadData()
    }
  },
  mounted () {
    this.loadData()
  },
  updated () {
    this.widthImg()
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: {
          lang: 'zh-CN'
        },
        callBack: () => {

        }
      }
      this.$store.dispatch('common/getAboutDesc', _params)
    },
    select (url) {
      this.$router.push({
        path: url
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

<style lang="scss">
.page-about {
  width: 100%;
  .content {
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
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
      p {
        &:last-child {
          text-indent: 0 !important;
        }
      }
    }
  }
  .right {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
