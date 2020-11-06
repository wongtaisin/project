<template>
  <div class="common-date-list">
    <swiper :options="swiperOption">
      <swiper-slide :key="i" v-for="(item, i) in pages">
        <span :class="{actived: item === currentPage}" @click="select(item)">{{item}}</span>
      </swiper-slide>
      <div class="swiper-button-next" slot="button-prev"></div>
      <div class="swiper-button-prev" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'common-date-list',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    year: {
      type: Array,
      default () {
        let date = new Date
        return []
      }
    },
    swiperOption: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  data () {
    return {
      currentPage: this.year[0],
      actived: this.year[0]
    }
  },
  computed: {
    pages () {
      return this.year
    }
  },
  methods: {
    select (n) {
      if (n === this.currentPage) return
      if (typeof n === 'string') return
      this.currentPage = n
      this.actived = n
      this.current()
    },
    current () {
      this.$emit('year', this.currentPage)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-date-list {
  margin: 30px 0 20px;
  .swiper-slide {
    &:first-child {
      margin-left: 30px !important;
    }
    span {
      cursor: pointer;
      font-size: 18px;
    }
  }
  .iconfont {
    color: #c12219;
  }
  .actived {
    color: #c12219;
    border-bottom: 2px solid #c12219;
  }
}
</style>
