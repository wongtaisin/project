<template>
  <section class="page-new">
    <common-banner-img :src="getNews.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">{{getNews.sidebar_title}}</div>
        <ul>
          <li
            :class="{active: getNews.cid === item.id}"
            :key="i"
            @click="select(item.id)"
            v-for="(item, i) in getNews.sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="getNews.title" :en="getNews.title_en"></common-inside-title>
        <common-date-list
          :swiperOption="swiperOption"
          :year="getNews.years"
          @year="year"
          v-if="getNews.years"
        ></common-date-list>
        <ul class="list">
          <li :key="i" @click="changeMenu(item, i)" v-for="(item, i) in getNews.news">
            <div class="year">
              <p>{{item.day}}</p>
              {{item.Ym}}
            </div>
            <!-- <div class="img">
              <img :src="item.image || nothing" alt />
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
  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      page: {
        page: 1,
        cid: 1,
        year: 2019
      },
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      nothing: require('../../assets/images/common/nothing.jpg'),
    }
  },
  computed: {
    getNews () {
      return this.$store.getters['news/getNews'].data
    }
  },
  watch: {
    '$route.query.id' (val) {
      if (this.$route.name != 'news') return false
      this.page.page = 1
      this.page.cid = val
      this.loadData()
    },
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'news') this.loadData()
    }
  },
  created () {
    let date = new Date
    this.page.cid = this.$route.query.id || 1
    this.page.year = date.getFullYear()
  },
  mounted () {
    this.year(this.page.year)
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: this.page,
        callBack: () => {

        }
      }
      this.$store.dispatch('news/getNews', _params)
    },
    changeMenu (item) {
      this.$router.push({
        path: '/new/detail',
        query: {
          cid: item.id
        }
      })
    },
    year (e) {
      this.page.page = 1
      this.page.year = e
      this.loadData()
    },
    current (e) {
      this.page.page = e
      this.loadData()
    },
    select (id) {
      this.page.page = 1
      this.page.cid = id
      this.loadData()
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
    .right {
      width: 830px;
      margin-left: 50px;
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
          width: 830px;
          padding: 30px 0;
          border-bottom: 1px solid #f8f7f7;
          cursor: pointer;
          &:hover {
            // background: #eee;
            // animation: pagenewmLi 0.5s alternate;
            // animation-fill-mode: forwards;
            // animation-direction: alternate;
            // .text {
            //   width: 500px;
            //   .dis {
            //     span {
            //       color: white;
            //     }
            //   }
            //   .line {
            //     background: white;
            //   }
            // }
          }
          .year {
            width: 63px;
            // margin-top: 38px;
            text-align: center;
            p {
              font-size: 48px;
            }
          }
          // .img {
          //   width: 200px;
          //   height: 160px;
          //   overflow: hidden;
          //   img {
          //     width: 200px;
          //     height: 160px;
          //   }
          // }
          .text {
            width: 740px;
            margin-top: 10px;
            .dis {
              p {
                font-size: 18px;
                margin-bottom: 5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              span {
                font-size: 16px;
                color: #666;
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
    background: #c12219;
  }
}
</style>
