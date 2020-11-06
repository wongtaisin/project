<template>
  <div class="page-suggest">
    <common-banner-img :src="getQuestion.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>投诉建议</p>
        </div>
        <ul>
          <li class="active">投诉建议</li>
        </ul>
      </div>
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
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // .title {
    //   font-size: 18px;
    //   font-weight: bold;
    // }
    .right {
      width: 810px;
    }
    .form {
      width: 490px;
      margin: 50px auto 40px;
      div {
        margin-top: 20px;
      }
      label {
        width: 100px;
      }
      input {
        width: 440px;
        line-height: 32px;
        text-indent: 10px;
      }
      textarea {
        width: 420px;
        padding: 10px;
        border: 1px solid #dddddd;
      }
      button {
        margin-top: 20px;
        font-size: 16px;
        text-align: center;
        line-height: 45px;
        width: 168px;
        height: 45px;

        color: white;
        border: none;
        cursor: pointer;
        &:first-child {
          margin-left: 40px;
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
