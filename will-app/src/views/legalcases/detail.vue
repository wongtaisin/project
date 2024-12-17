<template>
  <div class="page-legalcases-detail">
    <common-banner-img :src="getLegalcasesDetail.wap_banner"></common-banner-img>
    <common-inside-title :cn="getLegalcasesDetail.title" :icon="false"></common-inside-title>
    <div class="content">
      <div class="text" v-html="getLegalcasesDetail.content"></div>
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
    getLegalcasesDetail () {
      return this.$store.getters['legalcases/getLegalcasesDetail'].data
    }
  },
  activated () {
    this.loadData()
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
      this.$store.dispatch('legalcases/getLegalcasesDetail', _params)
    }
  }
}
</script>

<style scoped lang="scss">
.page-legalcases-detail {
  margin-bottom: 40px;
  .content {
    margin-top: 40px;
    padding: 0 32px;
    overflow: hidden;
    .text {
      font-size: 28px !important;
      line-height: 1.8 !important;
      img {
        max-width: 100% !important;
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
          max-width: 100% !important;
        }
      }
      p {
        &:last-child {
          text-indent: 0 !important;
        }
      }
    }
  }
}
</style>
