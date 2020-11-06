<template>
  <div class="common-inside-title">
    <!-- <div class="icon" v-if="icon"></div> -->
    <div>
      <div class="text">
        <span>{{cn}}</span>
        <!-- <p>{{en}}</p> -->
      </div>
      <div class="line"></div>
    </div>
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
  margin-top: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    width: 28px;
    height: 28px;
    background: rgba(232, 20, 27, 1);
    transform: rotateX(360deg) rotateY(360deg) rotateZ(45deg);
    margin-right: 20px;
  }
  // .icon {
  //   position: relative;
  //   width: 40px;
  //   height: 35px;
  //   margin-right: 15px;
  // }
  // .icon:before,
  // .icon:after {
  //   position: absolute;
  //   content: '';
  //   left: 20px;
  //   top: 0;
  //   width: 20px;
  //   height: 30px;
  //   background: red;
  //   -moz-border-radius: 25px 25px 0 0;
  //   border-radius: 25px 25px 0 0;
  //   -webkit-transform: rotate(-45deg);
  //   -moz-transform: rotate(-45deg);
  //   -ms-transform: rotate(-45deg);
  //   -o-transform: rotate(-45deg);
  //   transform: rotate(-45deg);
  //   -webkit-transform-origin: 0 100%;
  //   -moz-transform-origin: 0 100%;
  //   -ms-transform-origin: 0 100%;
  //   -o-transform-origin: 0 100%;
  //   transform-origin: 0 100%;
  // }
  // .icon:after {
  //   left: 0;
  //   -webkit-transform: rotate(45deg);
  //   -moz-transform: rotate(45deg);
  //   -ms-transform: rotate(45deg);
  //   -o-transform: rotate(45deg);
  //   transform: rotate(45deg);
  //   -webkit-transform-origin: 100% 100%;
  //   -moz-transform-origin: 100% 100%;
  //   -ms-transform-origin: 100% 100%;
  //   -o-transform-origin: 100% 100%;
  //   transform-origin: 100% 100%;
  // }
  .text {
    font-size: 16px;
    p {
      letter-spacing: 4px;
      margin-top: 5px;
    }
  }
  .line {
    width: 25px;
    height: 2px;
    background: rgba(232, 20, 27, 1);
    margin: 10px auto 0;
    border-radius: 2px;
  }
}
</style>
