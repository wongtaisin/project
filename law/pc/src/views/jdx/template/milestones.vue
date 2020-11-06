<template>
  <section class="jdx-milestones">
    <div class="content">
      <div class="title ani" swiper-animate-duration="2s" swiper-animate-effect="bounceInDown">
        <!-- <p class="ani" swiper-animate-duration="4s" swiper-animate-effect="bounceIn"></p> -->
        <p
          class="ani"
          swiper-animate-duration="4s"
          swiper-animate-effect="bounceIn"
        >{{header.title}}</p>
        <div
          class="ani"
          swiper-animate-duration="3s"
          swiper-animate-effect="zoomIn"
        >{{header.content}}</div>
      </div>
      <ul class="year">
        <li
          @click="prevs"
          class="fa ani"
          swiper-animate-duration="2s"
          swiper-animate-effect="slideInLeft"
        >
          <span aria-hidden="true" class="iconfont icon-left"></span>
        </li>
        <li
          :class="{actived: item === currentPage}"
          :key="i"
          @click="select(item)"
          class="page ani"
          swiper-animate-duration="3s"
          swiper-animate-effect="slideInLeft"
          v-for="(item, i) in pages"
        >
          <span>{{item}}</span>
        </li>
        <li
          @click="next"
          class="fa ani"
          swiper-animate-duration="4s"
          swiper-animate-effect="slideInLeft"
        >
          <span aria-hidden="true" class="iconfont icon-right"></span>
        </li>
      </ul>
      <div class="text">{{text}}</div>
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
      },
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
      if (val) {
        let d = new Date()
        this.currentPage = d.getFullYear() - 9
        this.totalPages = d.getFullYear()
        sessionStorage.setItem(`f`, this.currentPage)
        this.current()
      }
    }
  },
  created () { },
  methods: {
    date () {
      const c = this.currentPage
      const t = this.totalPages
      const f = Number(sessionStorage.getItem(`f`))
      let a = []
      // console.log(f, t, `开始和结束`)
      // console.log(c, t - 4, t - 3, t - 2, t - 1, `算法`)
      if (c == f + 2) {
        this.pages = [t, c - 2, c - 1, c, c + 1, c + 2, c + 3]
      } else if (c == f + 1) {
        this.pages = [t - 1, t, c - 1, c, c + 1, c + 2, c + 3]
      } else if (c == f) {
        this.pages = [t - 2, t - 1, t, c, c + 1, c + 2, c + 3]
      } else if (c == t - 2) {
        this.pages = [c - 3, c - 2, c - 1, c, c + 1, c + 2, c - 7]
      } else if (c == t - 1) {
        this.pages = [c - 3, c - 2, c - 1, c, c + 1, c - 8, c - 7]
      } else if (c == t) {
        this.pages = [c - 3, c - 2, c - 1, c, c - 9, c - 8, c - 7]
      } else {
        this.pages = [c - 3, c - 2, c - 1, c, c + 1, c + 2, c + 3]
      }
    },
    select (n) {
      if (n === this.currentPage) return
      if (typeof n === 'string') return
      this.currentPage = n
      this.actived = n
      this.current()
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
      this.date()
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
    },
    year (e) {
      this.data.map((item, i) => {
        if (e == item.year) {
          this.text = item.data[0].title
        }
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
    font-size: 18px;
    height: 100%;
    .title {
      width: 750px;
      p {
        // background: url('../../../assets/images/jdx/milestones/title.png')
        //   no-repeat;
        // background-size: 144px 49px;
        line-height: 1;
        width: 144px;
        height: 49px;
        margin: 0 auto;
      }
    }
    .text {
      background: url('../../../assets/images/jdx/milestones/tbg.png') no-repeat
        top center;
      background-size: 34px;
      text-align: center;
      width: 980px;
      padding-top: 50px;
      margin: 0 auto;
      line-height: 1.4;
    }
  }
  .year {
    margin: 20px auto 26px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    li {
      height: 243px;
      line-height: 243px;
      text-align: center;
      padding: 0 25px;
      cursor: pointer;
      font-size: 16px;
    }
    .fa {
      padding: 0;
      color: #c12219;
      .iconfont {
        font-size: 62px;
      }
    }
    .page {
      // width: 33px;
    }
    .actived {
      text-align: center;
      width: 247px;
      background: url('../../../assets/images/jdx/milestones/active.png')
        no-repeat;
      background-size: 247px 243px;
      font-size: 82px;
      padding: 0;
    }
  }
  // .date {
  //   width: 1080px;
  // }
}
</style>
