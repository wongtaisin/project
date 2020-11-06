<template>
  <div id="app">
    <will-header :data="commonPublic.header" @loadData="loadData"></will-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <will-footer :data="commonPublic.footer"></will-footer>
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
  created () {
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
#app {
  width: 100%;
  min-height: 100%;
}
</style>
