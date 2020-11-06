<template>
  <div class="common-banner-img">
    <img :src="src?src:img" alt />
  </div>
</template>

<script>
export default {
  name: 'common-banner-img',
  props: {
    src: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      // img: require('../../../../assets/images/common/main.png')
      img: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.common-banner-img {
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
  }
}
</style>
