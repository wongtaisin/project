<template>
  <div class="page-legalcases">
    <common-banner-img :src="getLegalcases.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>法规案例</p>
        </div>
        <ul>
          <li class="active">法规案例</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="`法规案例`" :en="`Legislation & Cases`"></common-inside-title>
        <ul class="list">
          <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getLegalcases.list">
            <div class="title">{{item.title}}</div>
            <div class="text">{{item.description}}</div>
          </li>
        </ul>
        <common-pageContainer :totalPages="getLegalcases.pageCount" @current="current"></common-pageContainer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      page: {
        page: 1
      }
    }
  },
  computed: {
    getLegalcases () {
      return this.$store.getters['legalcases/getLegalcases'].data
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: this.page,
        callBack: () => {

        }
      }
      this.$store.dispatch('legalcases/getLegalcases', _params)
    },
    current (e) {
      this.page.page = e
      this.loadData()
    },
    goDetail (e) {
      this.$router.push({
        path: '/legalcases/detail',
        query: {
          id: e
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-legalcases {
  width: 100%;
  min-height: 100%;
  .content {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .list {
      width: 810px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto 40px;
      li {
        width: 810px;
        border-bottom: 1px solid #ebe8e8;
        margin-top: 30px;
        cursor: pointer;
        overflow: hidden;
        padding-bottom: 20px;
        &:hover {
          .title {
            color: rgba(232, 20, 27, 1);
          }
        }
        .title {
          font-size: 16px;
        }
        .text {
          margin-top: 20px;
          font-size: 12px;
          color: #666;
          line-height: 1.6;
        }
      }
    }
  }
}
</style>
