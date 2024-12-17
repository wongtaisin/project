<template>
  <div class="page-suggest">
    <common-banner-img :src="getQuestion.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="`投诉建议`" :en="`Complaints Proposals`"></common-inside-title>
        <div class="form">
          <div>
            <label for>姓名：</label>
            <input name="name" placeholder="请输入姓名" type="text" v-model="inputtext.name" />
          </div>
          <div>
            <label for>号码：</label>
            <input
              maxlength="11"
              name="mobile"
              placeholder="请输入正确的号码"
              type="text"
              v-model="inputtext.mobile"
            />
          </div>
          <div>
            <label for>邮箱：</label>
            <input name="email" placeholder="请输入正确的邮箱" type="text" v-model="inputtext.email" />
          </div>
          <div>
            <label for>内容：</label>
            <textarea
              cols="30"
              name="content"
              placeholder="请输入内容"
              rows="10"
              v-model="inputtext.content"
            ></textarea>
          </div>
          <div>
            <button @click="sub">提交</button>
            <button @click="reset">重置</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputtext: {
        content: '',
        email: '',
        mobile: '',
        name: ''
      }
    }
  },
  computed: {
    getQuestion () {
      return this.$store.getters['suggest/getQuestion'].data
    },
    getMessage () {
      return this.$store.getters['suggest/getMessage']
    }
  },
  created () { },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('suggest/getQuestion')
    },
    sub () {
      console.log(this.inputtext)
      if (this.inputtext.name == '') return this._utils.tipMessage('姓名不能为空')
      if (this.inputtext.mobile == '') return this._utils.tipMessage('请输入争取的手机号')
      if (this.inputtext.content == '') return this._utils.tipMessage('请输入投诉建议的内容')
      let _params = {
        paramsDate: this.inputtext,
        callBack: (res) => {
          this._utils.tipMessage(this.getMessage)
        }
      }
      this.$store.dispatch('suggest/getMessage', _params)
    },
    reset () {
      this.inputtext = {
        content: '',
        email: '',
        mobile: '',
        name: ''
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.page-suggest {
  width: 100%;
  min-height: 100%;
  .content {
    width: 750px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 36px;
      font-weight: bold;
    }
    .right {
      padding: 0 32px;
    }
    .form {
      width: 700px;
      margin: 50px auto 40px;
      div {
        margin-top: 30px;
      }
      label {
        width: 100px;
      }
      input {
        width: 580px;
        line-height: 48px;
        text-indent: 10px;
        border: 1px solid #ddd;
      }
      textarea {
        width: 560px;
        padding: 10px;
        border: 1px solid #ddd;
      }
      button {
        font-size: 16px;
        text-align: center;
        line-height: 64px;
        width: 280px;
        height: 64px;
        color: white;
        border: none;
        cursor: pointer;
        &:first-child {
          margin-left: 80px;
          margin-right: 20px;
          background: rgba(232, 20, 27, 1);
        }
        &:last-child {
          background: #595757;
        }
        &:active {
          background: #850e07;
        }
      }
    }
  }
}
</style>
