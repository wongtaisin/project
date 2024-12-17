<template>
  <div class="common-footer">
    <div class="footer">
      <div class="copy">{{data}}</div>
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
  }
}
</script>

<style lang="scss" scoped>
.common-footer {
  overflow: hidden;
  .footer {
    height: 56px;
    line-height: 56px;
    background: black;
    .copy {
      text-align: center;
      color: white;
    }
  }
}
</style>
