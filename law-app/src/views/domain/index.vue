<template>
  <section class="page-domain">
    <common-banner-img :src="getPracticeAreas.banner"></common-banner-img>
    <div class="content">
      <common-inside-title :cn="`业务领域`" :en="`Professional field`"></common-inside-title>
      <ul class="list">
        <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getPracticeAreas.list">
          <div class="icon">
            <img :src="item.image" alt />
          </div>
          <div class="text">
            <div class="dis">
              <p>{{item.title}}</p>
            </div>
          </div>
        </li>
      </ul>
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
    getPracticeAreas () {
      return this.$store.getters['domain/getPracticeAreas']
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'domain') this.loadData()
    }
  },
  created () { },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('domain/getPracticeAreas')
    },
    goDetail (e) {
      this.$router.push({
        path: '/domain/detail',
        query: {
          id: e
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-domain {
  width: 100%;
  min-height: calc(100% - 318px);
  margin-bottom: 30px;
  .content {
    margin: 0 39px;
    .list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;
      li {
        width: 100%;
        padding: 0 30px;
        height: 80px;
        display: flex;
        align-items: center;
        background: #f1f0f0;
        margin-bottom: 9px;
        overflow: hidden;
        .icon {
          width: 39px;
          height: 39px;
          overflow: hidden;
          .iconfont {
            font-size: 24px;
          }
          img {
            width: 39px;
            height: 39px;
          }
        }
        .text {
          margin-left: 20px;
          .dis {
            p {
              font-size: 28px;
            }
          }
        }
      }
    }
  }
}
</style>
