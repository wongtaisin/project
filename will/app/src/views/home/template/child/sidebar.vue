<template>
  <div class="child-banner">
    <swiper :options="swiperOption">
      <swiper-slide :key="i" v-for="(item, i) in data">
        <div class="content">
          <img alt v-lazy="item.wap_image" />
        </div>
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.child-banner {
  height: 380px;
  overflow: hidden;
  .swiper-container {
    height: 380px;
    .content {
      width: 100%;
      height: 380px;
      color: #fff;
      img {
        width: 100%;
        height: 380px;
      }
      .swiper-button-next {
        height: 42px;
        right: 10%;
      }
      .swiper-button-prev {
        height: 42px;
        left: 10%;
      }
      .swiper-pagination-bullet {
        background: white;
      }
      .swiper-pagination-bullet-active {
        background: #e41315;
      }
    }
  }
}
</style>
