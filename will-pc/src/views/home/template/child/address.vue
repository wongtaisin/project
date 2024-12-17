<template>
  <div class="child-address">
    <div class="img">
      <img alt src="../../../../assets/images/home/address.png" />
    </div>
    <div class="wechat">
      <img alt src="../../../../assets/images/common/wechat.jpg" />
      <p>地址：{{address}}</p>
      <p>联系电话：{{tel}}</p>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
  margin: 40px auto;
  .img {
    width: 801px;
    height: 264px;
    img {
      width: 801px;
      height: 264px;
    }
  }
  .wechat {
    width: 250px;
    text-align: center;
    font-size: 12px;
    img {
      width: 163px;
      height: 163px;
    }
  }
}
</style>
