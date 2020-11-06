<template>
  <section class="jdx-about">
    <law-header :data="commonPublic.header"></law-header>
    <div class="content">
      <div class="bg-title"></div>
      <div class="text ani" swiper-animate-duration="1s" swiper-animate-effect="slideInLeft">
        <p>{{data}}</p>
      </div>
      <div class="zi">
        <div @click="goUrl" class="look">{{more}}</div>
        <div class="iconfont icon-jiantou animated bounce"></div>
      </div>
    </div>
  </section>
</template>

<script>
import lawHeader from '../../home/template/header'
export default {
  components: {
    lawHeader
  },
  props: {
    data: {
      type: String,
      default () {
        return ''
      }
    },
    more: {
      type: String,
      default () {
        return ''
      }
    },
  },
  computed: {
    commonPublic () {
      return this.$store.getters['common/commonPublic']
    }
  },
  data () {
    return {}
  },
  methods: {
    goUrl () {
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>

<style lang="scss">
.jdx-about {
  height: 100%;
  .content {
    background: url('../../../assets/images/jdx/about/bg.png') no-repeat;
    background-size: 100% 100%;
    font-size: 28px;
    height: calc(100% - 88px);
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .bg-title {
    background: url('../../../assets/images/jdx/about/img01.png') no-repeat;
    background-size: 408px 100%;
    width: 408px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -204px;
  }
  .text {
    background: url('../../../assets/images/jdx/about/text.png') no-repeat;
    background-size: 100% 408px;
    width: 80%;
    height: 338px;
    margin: 0 auto;
    color: white;
    line-height: 1.5;
    padding: 40px;
    text-indent: 40px;
    z-index: 1;
    overflow: hidden;
    p {
      width: 100%;
      height: 320px;
      overflow: hidden;
    }
  }
  .zi {
    bottom: 180px !important;
  }
}
</style>
