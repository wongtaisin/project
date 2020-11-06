<template>
  <div class="child-address">
    <div class="img">
      <img alt src="../../../../assets/images/home/address.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default () {
        return ''
      }
    },
    tel: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.child-address {
  width: 750px;
  margin: 40px auto;
  .img {
    width: 750px;
    height: 243px;
    img {
      width: 750px;
      height: 243px;
    }
  }
}
</style>
