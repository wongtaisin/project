<template>
  <div class="page-about">
    <common-banner-img :src="getAboutDesc.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="getAboutDesc.title" :icon="false"></common-inside-title>
        <div class="texts" v-html="getAboutDesc.content"></div>
      </div>
    </div>
  </div>
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
      id: ''
    }
  },
  watch: {
    $route: {
      handler: function (val, from) {
        if (val.name != 'institution') return false
        this.id = val.query.id
        this.loadData()
      },
      immediate: true
    }
  },
  updated () {
    this.widthImg()
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: {
          id: this.id
        },
        callBack: () => {
        }
      }
      this.$store.dispatch('common/getAboutDesc', _params)
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
    width: 750px;
  }
  .right {
    padding: 0 32px;
    padding-bottom: 40px;
    overflow: hidden;
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
