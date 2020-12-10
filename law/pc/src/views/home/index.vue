<template>
  <section id="init">
    <law-header :data="commonPublic.header" @loadData="loadData"></law-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <law-footer :data="commonPublic.footer"></law-footer> -->
    <law-footer :data="commonPublic.condition"></law-footer>
    <!-- <common-right-menu></common-right-menu> -->
    <common-bottom-consult></common-bottom-consult>
    <common-scroll-top></common-scroll-top>
  </section>
</template>

<script>
import lawHeader from './template/header'
import lawFooter from './template/footer'
export default {
  components: {
    lawHeader,
    lawFooter
  },
  data () {
    return {

    }
  },
  computed: {
    commonPublic () {
      return this.$store.getters['common/commonPublic']
    }
  },
  created () {
    let language = localStorage.getItem('language')
    this.$store.dispatch('common/commonLanguage', language)
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('common/commonPublic')
    }
  }
}
</script>

<style lang='scss' scoped>
#init {
  width: 100%;
  height: 100%;
}
</style>
