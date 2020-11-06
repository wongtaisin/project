<template>
  <section class="page-honor">
    <common-banner-img :src="getAboutHonor.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">{{getAboutHonor.sidebar_title}}</div>
        <ul>
          <li
            :class="{active: item.url === '/honor'}"
            :key="i"
            @click="select(item.url)"
            v-for="(item, i) in getAboutHonor.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="blok">
        <common-inside-title :cn="`关于嘉得信`" :en="`about jiadesen`"></common-inside-title>
        <ul class="list">
          <li :key="i" v-for="(item, i) in getAboutHonor.results">
            <div class="left">{{item.year}}</div>
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
        line-height: 120px;
        border: 1px solid #bbb;
        border-radius: 50%;
        text-align: center;
        color: #666;
        font-size: 42px;
      }
      .right {
        width: 670px;
        div {
          color: #666;
          margin-bottom: 15px;
          border-bottom: 1px solid rgb(223, 222, 222);
          padding-bottom: 15px;
          // text-indent: 2em;
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
