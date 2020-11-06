<template>
  <section class="page-honor">
    <common-banner-img :src="getAboutHonor.banner"></common-banner-img>
    <div class="content">
      <div class="blok">
        <common-inside-title :cn="`关于嘉得信`" :en="`about jiadesen`"></common-inside-title>
        <ul class="list">
          <li :key="i" v-for="(item, i) in getAboutHonor.results">
            <div class="left">{{item.year}}</div>
            <ul class="right">
              <li :key="index" class="li" v-for="(res, index) in item.data">{{res.content}}</li>
            </ul>
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
    }
  },
  computed: {
    getAboutHonor () {
      return this.$store.getters['common/getAboutHonor'].data
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'honor') this.loadData()
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      let _params = {
        callBack: () => {

        }
      }
      this.$store.dispatch('common/getAboutHonor', _params)
    },
    select (url) {
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<style lang="scss">
.page-honor {
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
        line-height: 120px;
        border: 1px solid #bbb;
        border-radius: 50%;
        text-align: center;
        color: #666;
        font-size: 24px;
      }
      .right {
        width: 525px;
        .li {
          width: 525px;
          background: url('../../../assets/images/jdx/honor/active.png')
            no-repeat 0 0;
          background-size: 14px;
          padding-left: 33px;
          line-height: 1.3;
          margin-top: 20px;
          overflow: hidden;
          // white-space: nowrap;
          // text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
