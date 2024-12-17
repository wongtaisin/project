<template>
  <div class="page-links">
    <common-banner-img :src="getAboutlinks.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>合作机构</p>
        </div>
        <ul>
          <li class="active">合作机构</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="'合作机构'" :en="`Cooperative Agency`"></common-inside-title>
        <ul class="list">
          <li :key="i" v-for="(item, i) in getAboutlinks.list">
            <a :href="item.url" rel="noopener" target="_blank">
              <img :src="item.logo" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    getAboutlinks () {
      return this.$store.getters['common/getAboutlinks'].data
    }
  },
  mounted () {
    this.years = this.getAboutlinks.current_year
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
      this.$store.dispatch('common/getAboutlinks', _params)
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
.page-links {
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
    width: 810px;
    margin-bottom: 40px;
    .list {
      margin-top: 30px;
      overflow: hidden;
      li {
        margin-top: 20px;
        width: 160px;
        height: 80px;
        border: 1px solid #f2f2f2;
        float: left;
        margin-right: 40px;
        img {
          width: 160px;
          height: 80px;
        }
      }
    }
  }
}
</style>
