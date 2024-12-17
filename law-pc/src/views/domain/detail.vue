<template>
  <section class="page-domain-detail">
    <common-banner-img :src="getPracticeAreasDetail.banner"></common-banner-img>
    <common-inside-title :cn="getPracticeAreasDetail.info.title" :icon="false"></common-inside-title>
    <div class="content" v-html="getPracticeAreasDetail.info.info"></div>
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
    }
  }
}
</script>

<style scoped lang="scss">
.page-domain-detail {
  .content {
    width: 1080px;
    margin: 40px auto 60px;
  }
}
</style>
