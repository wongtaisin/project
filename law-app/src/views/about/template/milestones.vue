<template>
  <section class="page-milestones">
    <common-banner-img :src="getAboutMilestones.banner"></common-banner-img>
    <div class="content">
      <div class="blok">
        <common-inside-title :cn="`关于嘉得信`" :en="`about jiadesen`"></common-inside-title>
        <common-date-list
          :year="getAboutMilestones.years"
          @year="year"
          v-if="getAboutMilestones.years"
        ></common-date-list>
        <ul class="list">
          <li :key="i" v-for="(item, i) in getAboutMilestones.results">
            <div class="left">
              <p>{{item.month}}</p>
              <span>{{item.month_en}}</span>
            </div>
            <div class="right">
              <div :key="index" v-for="(res, index) in item.data">
                <!-- <p>嘉得信全部中标商务部律师事务所库</p> -->
                <span>{{res.content}}</span>
              </div>
            </div>
          </li>
        </ul>
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
      years: ''
    }
  },
  computed: {
    getAboutMilestones () {
      return this.$store.getters['common/getAboutMilestones'].data
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'milestones') this.loadData()
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: {
          year: this.years
        },
        callBack: () => {

        }
      }
      this.$store.dispatch('common/getAboutMilestones', _params)
    },
    select (url) {
      this.$router.push({
        path: url
      })
    },
    year (e) {
      this.years = e
      this.loadData()
    },
  }
}
</script>

<style lang="scss">
.page-milestones {
  width: 100%;
  .content {
    padding: 0 39px;
  }
  .blok {
    width: 100%;
    margin-bottom: 39px;
    .list {
      width: 100%;
      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
      }
      .left {
        width: 120px;
        height: 120px;
        border: 1px solid #bbb;
        border-radius: 50%;
        text-align: center;
        color: #666;
        p {
          margin-top: 20px;
          font-size: 24px;
        }
      }
      .right {
        width: 525px;
        margin-top: 20px;

        div {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        p {
          color: #222;
          margin-bottom: 10px;
        }
        span {
          color: #666;
        }
      }
    }
  }
}
</style>
