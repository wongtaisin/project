

<template>
  <div class="common-scroll-top" v-if="btnFlag">
    <div @click="backTop" class="go-top">
      <i class="iconfont icon-dingbu"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-scroll-top',
  data () {
    return {
      scrollTop: 0,
      btnFlag: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 100) {
        this.btnFlag = true
      } else {
        this.btnFlag = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.common-scroll-top {
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: fixed;
  bottom: 60px;
  right: 30px;
  .go-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: rgba(232, 20, 27, 1);;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
