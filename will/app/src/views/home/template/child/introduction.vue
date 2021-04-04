<template>
  <div class="child-introduction">
    <div class="left">
      <div class="title">
        机构简介
        <p>Agency introduction</p>
      </div>
      <div class="about" v-html="data"></div>
      <div @click="goUrl" class="more">了解更多</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    goUrl(url) {
      this.$router.push({
        path: '/institution?id=1'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.child-introduction {
  width: 750px;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    padding: 0 32px;
    .title {
      text-align: center;
      font-size: 40px;
      margin-bottom: 20px;
      p {
        font-size: 26px;
        margin-top: 20px;
      }
    }
    .about {
      text-indent: 2em;
      text-align: left;
      font-size: 14px;
      margin: 20px 0;
      line-height: 1.6;
    }
    .more {
      border: 1px solid black;
      width: 180px;
      height: 55px;
      line-height: 55px;
      text-align: center;
      border-radius: 10px;
      float: right;
      font-size: 28px;
      cursor: pointer;
      &:hover {
        border: 1px solid rgba(232, 20, 27, 1);
        color: rgba(232, 20, 27, 1);
      }
    }
  }
}
</style>
