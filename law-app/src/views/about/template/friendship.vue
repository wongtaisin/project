<template>
  <section class="page-friendship">
    <common-banner-img :src="getAboutFriendship.banner"></common-banner-img>
    <div class="content">
      <div class="blok">
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
    return {}
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
  .content {
    display: flex;
    justify-content: space-between;
  }
  .blok {
    width: 100%;
    .list {
      margin-top: 30px;
      overflow: hidden;
      li {
        margin-bottom: 20px;
        width: 189px;
        height: 99px;
        border: 1px solid #f2f2f2;
        float: left;
        margin-left: 39px;
        img {
          width: 189px;
          height: 99px;
        }
      }
    }
  }
}
</style>
