<template>
  <div class="child-img" v-if="data.length">
    <swiper :options="swiperOption">
      <swiper-slide :key="i" v-for="(item, i) in data">
        <div class="content">
          <img :src="item.image" alt />
        </div>
      </swiper-slide>
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
      default () {
        return []
      }
    },
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
      },
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.child-img {
  width: 1080px;
  margin: 40px auto 0;
  height: 230px;
  overflow: hidden;
  .swiper-container {
    height: 230px;
    .content {
      width: 320px;
      height: 230px;
      img {
        width: 320px;
        height: 230px;
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
