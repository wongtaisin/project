<template>
  <section class="page-team">
    <common-banner-img :src="getProfessionals.banner"></common-banner-img>
    <div class="content">
      <common-inside-title :cn="`专业团队`" :en="`Professional TEAM`"></common-inside-title>
      <ul class="list">
        <li :key="i" @click="changeMenu(item, i)" v-for="(item, i) in getProfessionals.list">
          <div class="img">
            <img :src="item.avatar" alt />
          </div>
          <div class="text">
            <div class="cont">
              <div class="name">{{item.name}}</div>
              <div class="duties">{{item.duties}}</div>
              <div class="line"></div>
              <div>
                业务领域：
                <div>{{item.profession}}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <common-pageContainer :totalPages="getProfessionals.totalCount" @current="current"></common-pageContainer>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      page: {
        page: 1
      }
    }
  },
  computed: {
    getProfessionals () {
      return this.$store.getters['team/getProfessionals']
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'team') this.loadData()
    }
  },
  created () { },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: this.page,
        callBack: () => {

        }
      }
      this.$store.dispatch('team/getProfessionals', _params)
    },
    current (e) {
      this.page.page = e
      this.loadData()
    },
    changeMenu (item) {
      this.$router.push({
        path: '/team/detail',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-team {
  width: 100%;
  min-height: 100%;
  .content {
    width: 1080px;
    margin: 0 auto 60px;
    .list {
      width: 1080px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;
      li {
        width: 530px;
        height: 240px;
        border: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        cursor: pointer;
        &:hover {
          color: white;
          background: #c12219;
          animation: pageTeamLi 0.5s alternate;
          animation-fill-mode: forwards;
          animation-direction: alternate;
          img {
            animation: pageTeamImg 0.5s alternate;
            animation-fill-mode: forwards;
            animation-direction: alternate;
          }
          .line {
            animation: pageTeamLine 0.5s alternate;
            animation-fill-mode: forwards;
            animation-direction: alternate;
          }
        }
        .img {
          width: 240px;
          height: 240px;
          overflow: hidden;
          margin-top: -30px;
          margin-left: 20px;
          img {
            width: 240px;
            height: 240px;
          }
        }
        .text {
          width: 226px;
          margin-top: 30px;
          margin-right: 20px;
          .name {
            font-size: 14px;
            margin-bottom: 5px;
          }
          .duties {
            font-size: 14px;
            margin-bottom: 5px;
          }
          .line {
            width: 25px;
            height: 2px;
            margin: 10px 0 20px;
            border-radius: 2px;
            background: #c12219;
          }
        }
      }
    }
  }
}
@keyframes pageTeamLi {
  0% {
    color: black;
    background: white;
  }
  100% {
    background: #c12219;
  }
}
@keyframes pageTeamImg {
  0% {
    width: 240px;
    height: 240px;
  }
  100% {
    width: 260px;
    height: 260px;
  }
}
@keyframes pageTeamLine {
  0% {
    width: 25px;
  }
  100% {
    width: 100px;
    background: #ddd;
  }
}
</style>
