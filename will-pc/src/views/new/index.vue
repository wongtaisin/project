<template>
  <div class="page-new">
    <common-banner-img :src="getNews.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>新闻资讯</p>
        </div>
        <ul>
          <li
            :class="{active: getNews.cid == item.id}"
            :key="i"
            @click="select(item.id)"
            v-for="(item, i) in getNews.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="title" :icon="false"></common-inside-title>
        <ul class="list">
          <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getNews.news">
            <!-- <div class="img">
              <img :src="item.image  || nothing" alt />
            </div>-->
            <div class="text">
              <div class="dis">
                <p>{{item.title}}</p>
                <span>{{item.description}}</span>
              </div>
            </div>
          </li>
        </ul>
        <common-pageContainer :totalPages="getNews.pageCount" @current="current"></common-pageContainer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      page: {
        page: 1,
        cid: 1,
      },
      nothing: require('../../assets/images/common/nothing.png'),
      title: ''
    }
  },
  computed: {
    getNews () {
      return this.$store.getters['news/getNews'].data
    }
  },
  watch: {
    $route: {
      handler: function (val, from) {
        if (val.name != 'news') return false
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
          this.getNews.sidebar.map((item, i) => {
            if (this.getNews.cid == item.id) {
              this.title = item.name
            }
          })
        }
      }
      this.$store.dispatch('news/getNews', _params)
    },
    goDetail (id) {
      this.$router.push({
        path: '/news/detail',
        query: {
          cid: id
        }
      })
    },
    current (e) {
      this.page.page = e
      this.loadData()
    },
    select (id) {
      this.$router.push({
        path: `/news?id=${id}`
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-new {
  width: 100%;
  height: calc(100% - 90px);
  .content {
    width: 1080px;
    min-height: calc(100% - 300px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .right {
      width: 810px;
      margin-bottom: 30px;
      .list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        li {
          display: flex;
          justify-content: space-between;
          width: 810px;
          padding: 30px 0;
          border-bottom: 1px solid #ebe8e8;
          cursor: pointer;
          .img {
            width: 320px;
            height: 240px;
            overflow: hidden;
            img {
              width: 320px;
              height: 240px;
            }
          }
          .text {
            width: 810px;
            .dis {
              p {
                font-size: 16px;
                margin-bottom: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              span {
                color: #666;
                font-size: 12px;
                line-height: 1.6;
              }
            }
          }
        }
      }
    }
  }
}
@keyframes pagenewmLi {
  0% {
    color: black;
    background: white;
  }
  100% {
    background: rgba(232, 20, 27, 1);
  }
}
</style>
