<template>
  <section class="jdx-milestones">
    <div class="content">
      <div class="title ani" swiper-animate-duration="1.5s" swiper-animate-effect="bounceInDown">
        <!-- <p></p> -->
        <span
          class="ani"
          swiper-animate-duration="3s"
          swiper-animate-effect="bounceIn"
        >{{header.title}}</span>
      </div>
      <ul class="year" v-if="data.length">
        <li
          @click="prevs"
          class="fa ani"
          swiper-animate-duration=".5s"
          swiper-animate-effect="slideInLeft"
        >
          <span aria-hidden="true" class="iconfont icon-left"></span>
        </li>
        <li
          :class="{actived: item === currentPage}"
          :key="i"
          @click="select(item)"
          class="page ani"
          swiper-animate-duration="1s"
          swiper-animate-effect="slideInLeft"
          v-for="(item, i) in pages"
        >
          <span>{{item}}</span>
        </li>
        <li
          @click="next"
          class="fa ani"
          swiper-animate-duration="2s"
          swiper-animate-effect="slideInLeft"
        >
          <span aria-hidden="true" class="iconfont icon-right"></span>
        </li>
      </ul>
      <div class="text ani" swiper-animate-duration="1s" swiper-animate-effect="zoomIn">{{text}}</div>
      <div class="zi">
        <div @click="goUrl" class="look">{{more}}</div>
        <div class="iconfont icon-jiantou"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    header: {
      type: Object,
      default () {
        return {}
      }
    },
    more: {
      type: String,
      default () {
        return ''
      }
    },
  },
  data () {
    return {
      currentPage: 0,
      totalPages: 0,
      text: '',
      pages: []
    }
  },
  watch: {
    'data' (val) {
      if (val.length) {
        this.currentPage = this.data[this.data.length - 1].year
        this.totalPages = this.data[0].year
        sessionStorage.setItem(`f`, this.currentPage)
        this.current()
      }
    }
  },
  mounted () {
    console.log(this.data)
  },
  methods: {
    select (n) {
      // if (n === this.currentPage) return
      // if (typeof n === 'string') return
      // this.currentPage = n
      // this.actived = n
      // this.current()
    },
    prevs () {
      if (this.currentPage == Number(sessionStorage.getItem(`f`))) this.currentPage = this.totalPages + 1
      this.currentPage--
      this.current()
    },
    next () {
      if (this.currentPage == this.totalPages) this.currentPage = Number(sessionStorage.getItem(`f`)) - 1
      this.currentPage++
      this.current()
    },
    current () {
      const c = this.currentPage
      this.pages = [c - 1, c, c + 1]
      this.data.map((item, i) => {
        if (this.currentPage == item.year) {
          this.text = item.data[0].title
        }
      })
    },
    goUrl () {
      this.$router.push({
        path: '/milestones'
      })
    }
  }
}
</script>

<style lang="scss">
.jdx-milestones {
  color: white;
  height: 100%;
  .content {
    background: url('../../../assets/images/jdx/milestones/bg.png') no-repeat;
    background-size: 100% 100%;
    font-size: 28px;
    height: 100%;
    .title {
      p {
        background: url('../../../assets/images/jdx/milestones/title.png')
          no-repeat;
        background-size: 144px 48px;
      }
    }
  }
  .text {
    margin-top: 60px;
    font-size: 32px;
    padding: 0 39px;
  }
  .year {
    width: 100%;
    margin: 39px auto 26px;
    overflow: hidden;
    display: flex;
    justify-content: center;

    li {
      height: 243px;
      line-height: 243px;
      text-align: center;
      padding: 0 24px;
      cursor: pointer;
      font-size: 24px;
    }
    .fa {
      padding: 0;
      color: #c12219;
      .iconfont {
        font-size: 32px;
      }
    }
    .actived {
      text-align: center;
      width: 246px;
      background: url('../../../assets/images/jdx/milestones/active.png')
        no-repeat;
      background-size: 246px 243px;
      font-size: 42px;
      padding: 0;
    }
  }
}
</style>
