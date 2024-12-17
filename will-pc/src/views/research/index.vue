<template>
  <div class="page-research">
    <common-banner-img :src="getPracticeAreas.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>预约服务点</p>
        </div>
        <ul>
          <li
            :class="{active: page.cid == item.id}"
            :key="i"
            @click="select(item.id)"
            v-for="(item, i) in getPracticeAreas.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="title"></common-inside-title>
        <ul class="list">
          <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getPracticeAreas.list">
            <div class="title">{{item.title}}</div>
            <div class="text">{{item.description}}</div>
          </li>
        </ul>
        <common-pageContainer :totalPages="getPracticeAreas.pageCount" @current="current"></common-pageContainer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      page: {
        cid: 0,
        page: 1
      },
      title: ''
    }
  },
  computed: {
    getPracticeAreas () {
      return this.$store.getters['research/getPracticeAreas'].data
    }
  },
  watch: {
    $route: {
      handler: function (val, from) {
        if (val.name != 'research') return false
        this.page.cid = val.query.id
        this.page.page = 1
        this.loadData()
      },
      immediate: true
    },
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: this.page,
        callBack: () => {
          this.getPracticeAreas.sidebar.map((item, i) => {
            if (this.page.cid == item.id) {
              this.title = item.name
            }
          })
        }
      }
      this.$store.dispatch('research/getPracticeAreas', _params)
    },
    current (e) {
      this.page.page = e
      this.loadData()
    },
    goDetail (e) {
      this.$router.push({
        path: '/research/detail',
        query: {
          id: e
        }
      })
    },
    select (id) {
      this.$router.push({
        path: `/research?id=${id}`
      })
    },
  }
}
</script>

<style lang='scss' scoped>
.page-research {
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
      margin: 0 auto;
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
