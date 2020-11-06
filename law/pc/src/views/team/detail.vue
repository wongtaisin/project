<template>
  <section class="page-team-detail">
    <common-banner-img :src="getLawyerDetail.banner"></common-banner-img>
    <div class="content">
      <div class="introduce">
        <div class="left">
          <p>{{getLawyerDetail.info.name}}</p>
          <div class="left-content">
            <div class="left-content-i">
              <div>{{language.school}}：{{getLawyerDetail.info.school}}</div>
              <div>{{language.profession}}：{{getLawyerDetail.info.profession}}</div>
            </div>
            <div class="left-content-z">
              <div>{{language.tel}}：{{getLawyerDetail.info.tel}}</div>
              <div>{{language.email}}：{{getLawyerDetail.info.email}}</div>
            </div>
          </div>
          <div class="shzr_d"></div>
        </div>
        <div class="right">
          <img :src="getLawyerDetail.info.avatar" alt />
        </div>
      </div>
      <div class="describe">
        <div v-html="getLawyerDetail.info.info"></div>
        <div class="test">
          <span @click="goBack">
            <i class="iconfont icon-fanhui"></i>
          </span>
        </div>
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
    }
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
  created () {

  },
  activated () {
    this.loadData()
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
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.page-team-detail {
  .content {
    width: 1080px;
    margin: 60px auto;
    .introduce {
      width: 1080px;
      height: 390px;
      background: #4e4d4d;
      color: white;
      display: flex;
      justify-content: space-between;
      .left {
        width: 640px;
        margin-right: 20px;
        padding: 30px 0 0 30px;
        font-size: 16px;
        .shzr_d {
          margin-top: 25px;
          height: 135px;
          background: url('../../assets/images/team/shzr_d.png');
        }
        p {
          font-size: 16px;
          margin-bottom: 40px;
        }
        .left-content {
          display: flex;
          justify-content: space-between;
          .left-content-i {
            width: 300px;
            padding-right: 20px;
            div {
              margin-bottom: 10px;
            }
            border-right: 1px solid #7a7f89;
          }
          .left-content-z {
            width: 300px;
            div {
              margin-bottom: 10px;
            }
          }
        }
      }
      .right {
        width: 390px;
        height: 390px;
        img {
          width: 390px;
          height: 390px;
        }
      }
    }
    .describe {
      width: 1018px;
      font-size: 18px;
      padding: 30px;
      border: 1px solid #ddd;
      line-height: 1.6;
      div {
        &:first-child {
          margin-bottom: 20px;
        }
      }
      .test {
        margin-bottom: 0;
        overflow: hidden;
        span {
          line-height: 1;
          float: right;
          cursor: pointer;
          i {
            font-size: 24px;
          }
          &:hover {
            color: #c12219;
          }
        }
      }
    }
  }
}
</style>
