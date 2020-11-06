<template>
  <div id="app">
    <will-header :data="commonPublic.header" @loadData="loadData"></will-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <will-footer :data="commonPublic.footer"></will-footer>
    <common-right-menu></common-right-menu>
    <common-scroll-top></common-scroll-top>
  </div>
</template>

<script>
import willHeader from '@/views/home/template/header'
import willFooter from '@/views/home/template/footer'
export default {
  components: {
    willHeader,
    willFooter
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
