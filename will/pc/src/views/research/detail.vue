<template>
  <div class="page-research-detail">
    <common-banner-img :src="getPracticeAreasDetail.banner"></common-banner-img>
    <common-inside-title :cn="getPracticeAreasDetail.title" :icon="false"></common-inside-title>
    <div class="content" v-html="getPracticeAreasDetail.content"></div>
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
      this.$store.dispatch('research/getPracticeAreasDetail', _params)
    }
  }
}
</script>

<style scoped lang="scss">
.page-research-detail {
  .content {
    width: 1080px;
    margin: 40px auto 60px;
  }
}
</style>
