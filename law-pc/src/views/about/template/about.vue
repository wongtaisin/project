<template>
  <section class="page-about">
    <common-banner-img :src="getAboutDesc.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">{{getAboutDesc.sidebar_title}}</div>
        <ul>
          <li
            :class="{active: item.url === '/about'}"
            :key="i"
            @click="select(item.url)"
            v-for="(item, i) in getAboutDesc.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="`关于嘉得信`" :en="`about jiadesen`"></common-inside-title>
        <div class="texts" v-html="getAboutDesc.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {

  },
  computed: {
    getAboutDesc () {
      return this.$store.getters['common/getAboutDesc'].data
    }
  },
  data () {
    return {

    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'about') this.loadData()
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: {
          lang: 'zh-CN'
        },
        callBack: () => {

        }
      }
      this.$store.dispatch('common/getAboutDesc', _params)
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
.page-about {
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
    .texts {
      margin-top: 46px;
    }
  }
}
</style>
