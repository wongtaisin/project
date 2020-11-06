<template>
  <div class="page-legalcases-detail">
    <common-banner-img :src="getLegalcasesDetail.banner"></common-banner-img>
    <common-inside-title :cn="getLegalcasesDetail.title" :icon="false"></common-inside-title>
    <div class="content" v-html="getLegalcasesDetail.content"></div>
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
      let data = {
        id: this.$route.query.id
      }
      let _params = {
        paramsDate: data,
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
  .content {
    width: 1080px;
    margin: 40px auto 60px;
  }
}
</style>
