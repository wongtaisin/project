<template>
  <section class="page-milestones">
    <common-banner-img :src="getAboutMilestones.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">{{getAboutMilestones.sidebar_title}}</div>
        <ul>
          <li
            :class="{active: item.url === '/milestones'}"
            :key="i"
            @click="select(item.url)"
            v-for="(item, i) in getAboutMilestones.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="blok">
        <common-inside-title :cn="`关于嘉得信`" :en="`about jiadesen`"></common-inside-title>
        <common-date-list
          :swiperOption="swiperOption"
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
              <div :key="index" v-for="(res, index) in item.data">{{res.content}}</div>
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
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        // loop: true,
        // loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
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
    this.years = this.getAboutMilestones.current_year
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
  height: 100%;
  .content {
    min-height: calc(100% - 300px);
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .blok {
    width: 830px;
    padding-bottom: 80px;
    .list {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
          margin-top: 10px;
          font-size: 50px;
        }
      }
      .right {
        width: 670px;
        margin-top: 20px;
        div {
          color: #666;
          margin-bottom: 15px;
          border-bottom: 1px solid rgb(223, 222, 222);
          padding-bottom: 15px;
          text-indent: 2em;
          line-height: 1.6;
          &:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
