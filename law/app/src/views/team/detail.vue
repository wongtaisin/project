<template>
  <section class="page-team-detail">
    <common-banner-img :src="getLawyerDetail.banner"></common-banner-img>
    <div class="content">
      <div class="introduce">
        <div class="img">
          <img :src="getLawyerDetail.info.avatar" alt />
        </div>
        <div class="text">
          <p>{{getLawyerDetail.info.name}}</p>
          <ul>
            <li>{{language.profession}}：{{getLawyerDetail.info.profession}}</li>
            <li>{{language.school}}：{{getLawyerDetail.info.school}}</li>
            <li>{{language.tel}}：{{getLawyerDetail.info.tel}}</li>
            <li>{{language.fax}}：{{getLawyerDetail.info.fax}}</li>
            <li>{{language.email}}：{{getLawyerDetail.info.email}}</li>
            <!-- <li>地址：{{getLawyerDetail.info.name}}</li> -->
          </ul>
        </div>
      </div>
      <div class="describe">
        <div class="texts" v-html="getLawyerDetail.info.info"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      language: {}
    }
  },
  computed: {
    getLawyerDetail () {
      return this.$store.getters['team/getLawyerDetail']
    },
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    },
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'teamDetail') this.loadData()
    },
    '$store.state.common.commonLanguage' (val) {
      this.lang()
    }
  },
  created () { },
  activated () {
    this.loadData()
  },
  updated () {
    this.widthImg()
  },
  methods: {
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.language = {
          profession: '專業領域',
          school: '畢業院校',
          email: '郵箱',
          tel: '電話',
          fax: '傳真'
        }
      } else if (this.commonLanguage == 'en-US') {
        this.language = {
          profession: 'profession',
          school: 'School',
          email: 'Email',
          tel: 'TEL',
          fax: 'FAX'
        }
      } else {
        this.language = {
          profession: '业务领域',
          school: '毕业学校',
          email: '邮箱',
          tel: '电话',
          fax: '传真'
        }

      }
    },
    loadData () {
      this.lang()
      let data = {
        id: this.$route.query.id
      }
      let _params = {
        paramsDate: data,
        callBack: () => {

        }
      }
      this.$store.dispatch('team/getLawyerDetail', _params)
    },
    widthImg () {
      let texts = document.getElementsByClassName('texts')[0]
      texts.querySelectorAll('img').forEach((item) => {
        item.style.maxWidth = '100%'
      })
      texts.querySelectorAll('p').forEach((item) => {
        if (item.querySelectorAll('img').length !== 0) {
          item.style.textIndent = '0'
          item.style.textAlign = 'center'
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-team-detail {
  width: 100%;
  min-height: calc(100% - 318px);
  padding-bottom: 40px;
  .content {
    margin-top: 50px;
    .introduce {
      margin: 0 40px;
      background: #4e4d4d;
      color: white;
      .img {
        width: 668px;
        height: 618px;
        img {
          width: 668px;
          height: 618px;
        }
      }
      .text {
        width: 100%;
        padding: 30px;
        font-size: 28px;
        p {
          font-size: 32px;
          margin-bottom: 34px;
        }
        ul {
          width: 100%;
        }
        li {
          margin-bottom: 10px;
        }
      }
    }
    .describe {
      padding: 30px;
      margin: 0 40px;
      border: 1px solid #ddd;
      .texts {
        font-size: 28px !important;
        line-height: 1.8 !important;
        img {
          width: 100% !important;
        }
        p,
        span,
        ul,
        li,
        div,
        em,
        i {
          font-size: 28px !important;
          line-height: 1.8 !important;
          img {
            width: 100% !important;
          }
        }
      }
    }
  }
}
</style>
