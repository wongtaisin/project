<template>
  <div class="page-home">
    <will-sidebar :data="homeData.banner"></will-sidebar>
    <will-introduction :data="homeData.website_description"></will-introduction>
    <!-- <will-from></will-from> -->
    <will-new :data="homeData.news"></will-new>
    <will-img :data="homeData.ads"></will-img>
    <will-ad :address="homeData.address" :tel="homeData.tel"></will-ad>
  </div>
</template>

<script>
import willSidebar from '@/views/home/template/child/sidebar.vue'
import willIntroduction from '@/views/home/template/child/introduction.vue'
import willImg from '@/views/home/template/child/img.vue'
// import willFrom from '@/views/home/template/child/from.vue'
import willNew from '@/views/home/template/child/new.vue'
import willAd from '@/views/home/template/child/address.vue'
export default {
  components: {
    willSidebar,
    willIntroduction,
    willImg,
    // willFrom,
    willNew,
    willAd
  },
  data() {
    return {}
  },
  computed: {
    homeData() {
      return this.$store.getters['home/homeData'].data
    }
  },
  created() {},
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.dispatch('home/homeData')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  width: 100%;
  font-size: 14px;
}
</style>
