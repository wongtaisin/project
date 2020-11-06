<template>
  <div class="child-from">
    <form class="form">
      <div class="input">
        <label for>姓名：</label>
        <input type="text" value />
      </div>
      <div class="input">
        <label for>电话：</label>
        <input type="text" value />
      </div>
      <div class="input">
        <label for>年龄：</label>
        <input type="text" value />
      </div>
      <div class="input">
        <label for>地址：</label>
        <input type="text" value />
      </div>
      <div class="button">
        <button>提交</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.child-from {
  width: 980px;
  margin: 0 auto;
  .form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .input {
    width: 480px;
    height: 42px;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 20px;
    text-indent: 15px;
    input {
      width: 380px;
      line-height: 40px;
      border: none;
    }
  }
  .button {
    width: 480px;
    background: #417dc0;
    border-radius: 10px;
    text-align: center;
    button {
      font-size: 18px;
      background: #417dc0;
      border: none;
      line-height: 42px;
      color: white;
    }
  }
}
</style>
