<template>
  <div class="common-banner-img">
    <img :src="src" alt />
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
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.common-banner-img {
  width: 100%;
  height: 230px;
  background: #f2f2f2;
  overflow: hidden;
  img {
    width: 100%;
    height: 230px;
  }
}
</style>
