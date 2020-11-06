<template>
  <section class="page-friendship">
    <common-banner-img :src="getAboutFriendship.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">{{getAboutFriendship.sidebar_title}}</div>
        <ul>
          <li
            :class="{active: item.url === '/friendship'}"
            :key="i"
            @click="select(item.url)"
            v-for="(item, i) in getAboutFriendship.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="`关于嘉得信`" :en="`about jiadesen`"></common-inside-title>
        <ul class="list">
          <li :key="i" v-for="(item, i) in getAboutFriendship.results">
            <a :href="item.url" rel="noopener" target="_blank">
              <img :src="item.logo" alt />
            </a>
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
    getAboutFriendship () {
      return this.$store.getters['common/getAboutFriendship'].data
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'friendship') this.loadData()
    }
  },
  mounted () {
    this.years = this.getAboutFriendship.current_year
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
      this.$store.dispatch('common/getAboutFriendship', _params)
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
.page-friendship {
  width: 100%;
  height: 100%;
  .content {
    min-height: calc(100% - 300px);
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .right {
    width: 830px;
    padding-bottom: 80px;
    .list {
      margin-top: 10px;
      overflow: hidden;
      li {
        margin-top: 20px;
        width: 130px;
        height: 50px;
        border: 1px solid #f2f2f2;
        float: left;
        margin-right: 30px;
        img {
          width: 130px;
          height: 50px;
        }
      }
    }
  }
}
</style>
