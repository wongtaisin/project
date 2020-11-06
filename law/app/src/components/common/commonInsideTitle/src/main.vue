<template>
  <div class="common-inside-title">
    <div class="icon" v-if="icon"></div>
    <div class="text">
      <span>{{cn}}</span>
      <p>{{en}}</p>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'common-inside-title',
  props: {
    icon: {
      type: Boolean,
      default () {
        return true
      }
    },
    cn: {
      type: String,
      default () {
        return ''
      }
    },
    en: {
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
.common-inside-title {
  margin-top: 50px;
  margin-bottom: 39px;
  text-align: center;
  .icon {
    width: 21px;
    height: 21px;
    background: #c12219;
    margin: 0 auto;
    transform: rotateX(360deg) rotateY(360deg) rotateZ(45deg);
  }
  .text {
    font-size: 28px;
    margin-top: 20px;
    p {
      letter-spacing: 5px;
      margin-top: 5px;
    }
  }
  .line {
    width: 30px;
    height: 2px;
    background: #c12219;
    margin-left: 47%;
    margin-top: 30px;
    border-radius: 3px;
  }
}
</style>
