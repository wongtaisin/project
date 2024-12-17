<template>
  <section class="index-banner">
    <swiper :options="swiperOption">
      <swiper-slide :key="i" v-for="(item, i) in homeData.banner">
        <div class="content">
          <img :src="item.image" alt />
        </div>
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- <div class="new">
      <div class="left">
        <div class="title">{{homeData.news_title}}</div>
        <ul>
          <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in homeData.news">{{item.title}}</li>
        </ul>
        <div @click="goNew(homeData.default_id)" class="more">MORE +</div>
      </div>
      <div class="right">
        <div class="img">
          <img alt src="../../../assets/images/home/new02.png" />
          <div class="text">
            {{about}}
            <p @click="goUrl('/about')">
              MORE
              <span>
                <i class="iconfont icon-right"></i>
              </span>
            </p>
          </div>
        </div>
        <div class="img">
          <img alt src="../../../assets/images/home/new01.png" />
          <div class="text">
            {{areas}}
            <p @click="goUrl('/domain')">
              MORE
              <span>
                <i class="iconfont icon-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        // loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      about: 'About JDS',
      areas: 'Practice Areas'
    }
  },
  computed: {
    homeData () {
      return this.$store.getters['home/homeData'].data
    },
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    },
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'home') this.loadData()
    },
    '$store.state.common.commonLanguage' (val) {
      this.lang()
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.lang()
      this.$store.dispatch('home/homeData')
    },
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.about = '關於嘉得信'
        this.areas = '專業領域'
      } else if (this.commonLanguage == 'en-US') {
        this.about = 'About JDS'
        this.areas = 'Practice Areas'
      } else {
        this.about = '关于嘉得信'
        this.areas = '业务领域'
      }
    },
    goDetail (e) {
      this.$router.push({
        path: `/new/detail`,
        query: {
          cid: e
        }
      })
    },
    goUrl (url) {
      this.$router.push({
        path: url
      })
    },
    goNew (e) {
      this.$router.push({
        path: `/new?id=${e}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.index-banner {
  background: white;
  height: calc(100% - 32px);
  .swiper-container {
    height: 100%;
    .content {
      width: 100%;
      height: 100%;
      color: #fff;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-next {
        height: 72px;
        right: 10%;
      }
      .swiper-button-prev {
        height: 72px;
        left: 10%;
      }
    }
  }
  .new {
    position: absolute;
    bottom: 32px;
    left: 100px;
    // margin-left: -353px;
    z-index: 9;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    padding: 20px;
    -moz-box-shadow: 2px 2px 15px #333333;
    -webkit-box-shadow: 2px 2px 15px #333333;
    box-shadow: 2px 2px 15px #333333;
    .left {
      width: 226px;
      .title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      li {
        line-height: 28px;
        color: #666666;
        height: 28px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        &:hover {
          color: #c12219;
          cursor: pointer;
        }
      }
      .more {
        margin-top: 10px;
        &:hover {
          color: #c12219;
          cursor: pointer;
        }
      }
    }
    .right {
      height: 140px;
      display: flex;
      overflow: hidden;
      .img {
        width: 200px;
        height: 140px;
        margin-left: 20px;
        position: relative;
        .text {
          width: 200px;
          height: 140px;
          text-align: center;
          position: absolute;
          top: 0;
          padding-top: 50px;
          color: white;
          &:hover {
            background-color: rgba(0, 0, 0, 0.6);
            p {
              background: white;
              color: black;
              cursor: pointer;
            }
          }
          p {
            border: 1px solid white;
            border-radius: 10px;
            width: 75px;
            margin-left: 60px;
            margin-top: 10px;
          }
        }
        img {
          width: 200px;
          height: 140px;
        }
      }
    }
  }
}
</style>
