

<template>
  <div class="common-banner-img">
    <img alt v-lazy="src?src:img" />
  </div>
</template>

<script>
export default {
  name: 'common-banner-img',
  props: {
    src: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      // img: require('../../../../assets/images/common/main.png')
      img: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.common-banner-img {
  width: 750px;
  height: 300px;
  overflow: hidden;
  img {
    width: 750px;
    height: 300px;
  }
}
</style>
