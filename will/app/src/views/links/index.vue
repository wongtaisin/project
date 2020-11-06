<template>
  <div class="page-links">
    <common-banner-img :src="getAboutlinks.wap_banner"></common-banner-img>
    <div class="content">
      <div class="right">
        <common-inside-title :cn="'合作机构'" :en="`Cooperative Agency`"></common-inside-title>
        <ul class="list">
          <li :key="i" v-for="(item, i) in getAboutlinks.list">
            <a :href="item.url" rel="noopener" target="_blank">
              <img v-lazy="item.logo" alt />
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
    }
  }
}
</script>

<style lang="scss">
.page-links {
  width: 100%;
  height: 100%;
  .content {
    min-height: calc(100% - 300px);
    width: 750px;
  }
  .right {
    width: 750px;
    padding-left: 32px;
    margin-bottom: 40px;
    .list {
      margin-top: 30px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      li {
        margin-top: 20px;
        width: 210px;
        height: 96px;
        border: 1px solid #f2f2f2;
        margin-right: 23px;
        img {
          width: 210px;
          height: 96px;
        }
      }
    }
  }
}
</style>
