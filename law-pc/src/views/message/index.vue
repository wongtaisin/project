<template>
  <section class="page-message">
    <common-banner-img :src="getQuestion.banner"></common-banner-img>
    <div class="content">
      <common-inside-title :cn="getQuestion.title" :en="`Feedback`"></common-inside-title>
      <div class="title" v-if="getQuestion.quantions.length">{{problems}}</div>
      <ul class="list">
        <li :key="i" v-for="(item, i) in getQuestion.quantions">
          <div class="answer">
            <div class="answer-ti">
              <div>{{question}}</div>
              <div>{{item.question}}</div>
            </div>
            <span>{{item.date}}</span>
          </div>
          <div class="question">
            <div>{{answer}}</div>
            {{item.answer}}
          </div>
        </li>
      </ul>
      <div class="title">{{consulting}}</div>
      <div class="form">
        <textarea :placeholder="placeholder" cols="30" name="message" rows="10" v-model="message"></textarea>
        <button @click="sub">{{submit}}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      message: '',
      question: 'Q',
      answer: 'A',
      problems: 'Common problems',
      consulting: ' Consulting',
      submit: 'Submit',
      placeholder: 'question'
    }
  },
  computed: {
    getQuestion () {
      return this.$store.getters['message/getQuestion']
    },
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    },
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'message') this.loadData()
    },
    '$store.state.common.commonLanguage' (val) {
      this.lang()
    }
  },
  created () { },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.lang()
      this.$store.dispatch('message/getQuestion')
    },
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.question = '問'
        this.answer = '答'
        this.problems = '常見問題'
        this.consulting = '我要咨詢'
        this.submit = '提交問題'
        this.placeholder = '在這裏輸入問題，嘉得信專家會幫您解答。'
      } else if (this.commonLanguage == 'en-US') {
        this.question = 'Q'
        this.answer = 'A'
        this.problems = 'Common problems'
        this.consulting = 'Consulting'
        this.submit = 'Submit'
      } else {
        this.question = '问'
        this.answer = '答'
        this.problems = '常见问题'
        this.consulting = '我要咨询'
        this.submit = '提交问题'
        this.placeholder = '在这里输入问题，嘉得信专家会帮您解答。'
      }
    },
    sub () {
      if (this.message == '') return false
      let _params = {
        paramsDate: {
          message: this.message
        },
        callBack: () => {

        }
      }
      this.$store.dispatch('message/getMessage', _params)
    },
  }
}
</script>

<style lang='scss' scoped>
.page-message {
  width: 100%;
  min-height: 100%;
  .content {
    width: 1080px;
    margin: 0 auto 60px;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .list {
      line-height: 2;
      font-size: 16px;
      margin-bottom: 30px;
      li {
        border-bottom: 1px solid #eee;
        font-size: 16px;
        padding: 30px 0;
        .answer {
          .answer-ti {
            display: flex;
            align-items: center;
            div:first-child {
              margin-right: 5px;
              background: #c12219;
              color: white;
              width: 16px;
              height: 16px;
              text-align: center;
              border-radius: 3px;
              line-height: 16px;
              font-size: 12px;
            }
          }
          span {
            display: inline-block;
            font-size: 14px;
            color: #666;
            text-indent: 22px;
          }
        }
        .question {
          display: flex;
          align-items: center;
          div:first-child {
            margin-right: 5px;
            background: #3c3835;
            color: white;
            width: 16px;
            height: 16px;
            text-align: center;
            border-radius: 3px;
            line-height: 16px;
            font-size: 12px;
          }
        }
        span {
          display: inline-block;
          font-size: 14px;
          color: #666;
          text-indent: 20px;
        }
      }
    }
    .form {
      margin-top: 20px;
      textarea {
        width: 1040px;
        padding: 20px;
        border: 1px solid #dddddd;
      }
      button {
        margin-top: 20px;
        font-size: 16px;
        text-align: center;
        line-height: 45px;
        width: 168px;
        height: 45px;
        background: #c12219;
        color: white;
        border: none;
        cursor: pointer;
        &:active {
          background: #850e07;
        }
      }
    }
  }
}
</style>
