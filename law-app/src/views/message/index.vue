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
  components: {},
  data() {
    return {
      message: '',
      question: 'Q',
      answer: 'A',
      problems: 'Common problems',
      consulting: ' Consulting',
      submit: 'Submit',
      placeholder: '在这里输入问题，嘉得信专家会帮您解答。'
    }
  },
  computed: {
    getQuestion() {
      return this.$store.getters['message/getQuestion']
    },
    commonLanguage() {
      return this.$store.getters['common/commonLanguage']
    }
  },
  watch: {
    '$store.state.home.getLanguage'(data) {
      if (data.code != 0) return false
      if (this.$route.name == 'message') this.loadData()
    },
    '$store.state.common.commonLanguage'(val) {
      this.lang()
    }
  },
  created() {},
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.lang()
      this.$store.dispatch('message/getQuestion')
    },
    lang() {
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
        this.placeholder = 'question'
      } else {
        this.question = '问'
        this.answer = '答'
        this.problems = '常见问题'
        this.consulting = '我要咨询'
        this.submit = '提交问题'
        this.placeholder = '在这里输入问题，嘉得信专家会帮您解答。'
      }
    },
    sub() {
      if (this.message == '') return false
      let _params = {
        paramsDate: {
          message: this.message
        },
        callBack: () => {}
      }
      this.$store.dispatch('message/getMessage', _params)
    }
  }
}
</script>

<style lang='scss' scoped>
.page-message {
  width: 100%;
  min-height: calc(100% - 318px);
  padding-bottom: 39px;
  .content {
    padding: 0 39px;
    .title {
      font-size: 32px;
      font-weight: bold;
    }
    .list {
      line-height: 2;
      font-size: 28px;
      margin-bottom: 30px;
      li {
        border-bottom: 1px solid #eee;
        padding: 30px 0;
        &:last-child {
          border-bottom: none;
        }
        .answer {
          .answer-ti {
            display: flex;
            align-items: center;
            div:first-child {
              margin-right: 20px;
              background: #c12219;
              color: white;
              width: 26px;
              height: 26px;
              text-align: center;
              border-radius: 6px;
              line-height: 26px;
              font-size: 24px;
            }
          }
          span {
            display: inline-block;
            font-size: 28px;
            color: #666;
            text-indent: 22px;
          }
        }
        .question {
          display: flex;
          align-items: center;
          div:first-child {
            margin-right: 20px;
            background: #3c3835;
            color: white;
            width: 26px;
            height: 26px;
            text-align: center;
            border-radius: 6px;
            line-height: 26px;
            font-size: 24px;
          }
        }
        span {
          display: inline-block;
          font-size: 28px;
          color: #666;
          text-indent: 20px;
        }
      }
    }
    .form {
      margin-top: 30px;
      width: 100%;
      textarea {
        width: 600px;
        height: 120px;
        padding: 30px;
        border: 1px solid #dddddd;
      }
      button {
        margin-top: 20px;
        font-size: 28px;
        text-align: center;
        line-height: 80px;
        width: 100%;
        height: 80px;
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
