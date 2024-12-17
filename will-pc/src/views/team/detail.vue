<template>
  <div class="page-team-detail">
    <common-banner-img :src="getwillyerDetail.banner"></common-banner-img>
    <div class="content">
      <div class="introduce">
        <div class="left">
          <p>{{getwillyerDetail.info.name}}</p>
          <div class="left-content">
            <div class="left-content-i">
              <div>学校：{{getwillyerDetail.info.school}}</div>
              <div>专业：{{getwillyerDetail.info.profession}}</div>
            </div>
            <div class="left-content-z">
              <div>电话：{{getwillyerDetail.info.tel}}</div>
              <div>邮箱：{{getwillyerDetail.info.email}}</div>
            </div>
          </div>
          <div class="shzr_d"></div>
        </div>
        <div class="right">
          <img :src="getwillyerDetail.info.avatar" alt />
        </div>
      </div>
      <div class="describe">
        <div v-html="getwillyerDetail.info.info"></div>
        <div class="test">
          <span @click="goBack">
            <i class="iconfont icon-fanhui"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    getwillyerDetail () {
      return this.$store.getters['team/getwillyerDetail']
    }
  },
  activated () {
    this.loadData()
  },
  methods: {
    loadData () {
      let data = {
        id: this.$route.query.id
      }
      let _params = {
        paramsDate: data,
        callBack: () => {

        }
      }
      this.$store.dispatch('team/getwillyerDetail', _params)
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
          font-size: 32px;
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
            color: rgba(232, 20, 27, 1);
          }
        }
      }
    }
  }
}
</style>
