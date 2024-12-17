<template>
  <div class="page-team">
    <common-banner-img :src="getProfessionals.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>公益团队</p>
        </div>
        <ul>
          <li
            :class="{active: page.type == item.id}"
            :key="i"
            @click="select(item.id)"
            v-for="(item, i) in getProfessionals.sidebar"
          >{{item.name}}</li>
          <li :class="{active: page.type == 3}" @click="select(3)">监事会</li>
          <li :class="{active: page.type == 4}" @click="select(4)">公益律师团</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="title" :icon="false"></common-inside-title>
        <div class="texts" v-html="getConsult.content" v-if="page.type==3"></div>
        <div class="texts" v-else-if="page.type==4" v-html="getLawyer.content"></div>
        <div v-else>
          <ul class="list">
            <li :key="i" v-for="(item, i) in getProfessionals.datas">
              <div class="img">
                <img :src="item.avatar" alt />
              </div>
              <div class="text">{{item.name}}</div>
            </li>
          </ul>
          <common-pageContainer :totalPages="getProfessionals.pageCount" @current="current"></common-pageContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      page: {
        type: 1,
        page: 1
      },
      title: ''
    }
  },
  computed: {
    getConsult () {
      return this.$store.getters['team/getConsult']
    },
    getLawyer () {
      return this.$store.getters['team/getLawyer']
    },
    getProfessionals () {
      return this.$store.getters['team/getProfessionals'].data
    }
  },
  watch: {
    $route: {
      handler: function (val, from) {
        if (val.name != 'team') return false
        this.page.type = val.query.id
        if (val.query.id == 3) return this.loadConsult()
        if (val.query.id == 4) return this.loadLawyer()
        this.page.page = 1
        this.loadData()
      },
      immediate: true
    }
  },
  methods: {
    loadConsult () {
      let _params = {
        callBack: () => {
          this.title = '监事会'
        }
      }
      this.$store.dispatch('team/getConsult', _params)
    },
    loadLawyer () {
      let _params = {
        callBack: () => {
          this.title = '公益律师团'
        }
      }
      this.$store.dispatch('team/getLawyer', _params)
    },
    loadData () {
      let _params = {
        paramsDate: this.page,
        callBack: () => {
          this.getProfessionals.sidebar.map((item, i) => {
            if (this.getProfessionals.type == item.id) {
              this.title = item.name
            }
          })
        }
      }
      this.$store.dispatch('team/getProfessionals', _params)
    },
    current (e) {
      this.page.page = e
      this.loadData()
    },
    select (id) {
      this.$router.push({
        path: `/team?id=${id}`
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
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .right {
      width: 810px;
      margin-bottom: 40px;
      .list {
        width: 810px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          width: 247px;
          margin-top: 50px;
          margin-right: 33px;
          &:nth-child(3n) {
            margin-right: 0;
          }
          &:hover {
            color: rgba(232, 20, 27, 1);
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
            width: 247px;
            height: 287px;
            overflow: hidden;
            img {
              width: 247px;
              height: 287px;
            }
          }
          .text {
            width: 247px;
            margin-top: 5px;
            text-align: center;
          }
        }
      }
      .texts {
        p {
          margin-top: 5px;
        }
        ul {
          li {
            margin-top: 5px;
            float: left;
            width: 200px;
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
    // background: rgba(232, 20, 27, 1);
  }
}
@keyframes pageTeamImg {
  0% {
    width: 247px;
    height: 287px;
  }
  100% {
    width: 257px;
    height: 307px;
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
