<template>
  <section class="index-banner">
    <swiper :options="swiperOption">
      <swiper-slide :key="i" v-for="(item, i) in homeData.banner">
        <div class="content">
          <img :src="item.wap_image" alt />
        </div>
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <div class="new">
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
              <span>></span>
            </p>
          </div>
        </div>
        <div class="img">
          <img alt src="../../../assets/images/home/new01.png" />
          <div class="text">
            {{areas}}
            <p @click="goUrl('/domain')">
              MORE
              <span>></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
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
      about: '关于嘉得信',
      areas: '业务领域'
    }
  },
  computed: {
    homeData() {
      return this.$store.getters['home/homeData'].data
    },
    commonLanguage() {
      return this.$store.getters['common/commonLanguage']
    }
  },
  watch: {
    '$store.state.home.getLanguage'(data) {
      if (data.code != 0) return false
      if (this.$route.name == 'home') this.loadData()
    },
    '$store.state.common.commonLanguage'(val) {
      this.lang()
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.lang()
      this.$store.dispatch('home/homeData')
    },
    lang() {
      if (this.commonLanguage === 'zh-HK') {
        this.about = '關於嘉得信'
        this.areas = '專業領域'
      } else if (this.commonLanguage === 'en-US') {
        this.about = 'About JDS'
        this.areas = 'Practice Areas'
      } else {
        this.about = '关于嘉得信'
        this.areas = '业务领域'
      }
    },
    goDetail(e) {
      this.$router.push({
        path: `/new/detail`,
        query: {
          cid: e
        }
      })
    },
    goUrl(url) {
      this.$router.push({
        path: url
      })
    },
    goNew(e) {
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
  .content {
    width: 100%;
    height: 100%;
    color: #fff;
    img {
      width: 100%;
      height: 410px;
    }
  }
  .swiper-button-next {
    height: 51px;
    right: 5%;
  }
  .swiper-button-prev {
    height: 51px;
    left: 5%;
  }
  .new {
    padding: 50px 39px 0;
    .left {
      .title {
        font-size: 28px;
        margin-bottom: 10px;
      }
      li {
        line-height: 1.8;
        color: #666666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        &:hover {
          color: #c12219;
          cursor: pointer;
        }
      }
      .more {
        margin: 9px 0 50px;
      }
    }
    .right {
      height: 200px;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      .img {
        width: 324px;
        height: 200px;
        position: relative;
        .text {
          width: 324px;
          height: 150px;
          text-align: center;
          position: absolute;
          top: 0;
          padding-top: 50px;
          color: white;
          background: rgba($color: #000000, $alpha: 0.3);
          &:active {
            background-color: rgba($color: white, $alpha: 0.3);
            p {
              background: white;
              color: black;
              cursor: pointer;
            }
          }
          p {
            border: 1px solid white;
            border-radius: 20px;
            width: 150px;
            margin-left: 90px;
            margin-top: 20px;
          }
        }
        img {
          width: 324px;
          height: 200px;
        }
      }
    }
  }
}
</style>
