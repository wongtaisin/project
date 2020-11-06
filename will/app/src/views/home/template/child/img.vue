<template>
  <div class="child-img">
    <div class="kua">
      {{text}}
      <!-- <p>make an appointment</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default () {
        return ''
      }
    },
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
.child-img {
  // background: url()
  height: 109px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  margin: 40px 0;
  .kua {
    width: 200px;
    line-height: 82px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.7;
    font-size: 32px;
    color: #405680;
    text-align: center;
    p {
      font-size: 20px;
    }
  }
}
</style>
