<template>
  <section class="jdx-honor">
    <div class="content">
      <div class="title ani" swiper-animate-duration="1.5s" swiper-animate-effect="bounceInDown">
        <!-- <p></p> -->
        <span
          class="ani"
          swiper-animate-duration="3s"
          swiper-animate-effect="bounceIn"
        >{{header.title}}</span>
      </div>
      <div class="blo">
        <div
          :style="pages.length>3?``:styleObj"
          class="date ani"
          swiper-animate-duration="2s"
          swiper-animate-effect="jackInTheBox"
        >
          <div
            :class="active==i?`active`:``"
            :key="i"
            @click="clickA(i)"
            v-for="(item, i) in pages"
          >{{item}}</div>
        </div>
        <div class="list">
          <div class="left ani" swiper-animate-duration="2s" swiper-animate-effect="zoomIn">
            <ul>
              <li>
                <p>{{date}}</p>
                <span :key="i" v-for="(item, i) in text">{{item.content}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="zi">
        <div @click="goUrl" class="look">{{more}}</div>
        <div class="iconfont icon-jiantou"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
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
      active: 0,
      date: 0,
      text: '',
      pages: [],
      styleObj: {
        justifyContent: `center`
      }
    }
  },
  watch: {
    'data' (val) {
      if (val) {
        const c = val[0].year
        const t = val[val.length - 1].year
        let arr = []
        for (let index = t; index < c + 1; index++) {
          arr.push(index)
          arr.sort(function (a, b) { return b - a })
        }
        this.pages = arr
        this.clickA(0)
      }
    }
  },
  mounted () { },
  methods: {
    clickA (i) {
      this.active = i
      this.date = this.data[i].year
      this.text = this.data[i].data
    },
    goUrl () {
      this.$router.push({
        path: '/honor'
      })
    }
  }
}
</script>

<style lang="scss">
.jdx-honor {
  color: white;
  height: 100%;
  .content {
    background: url('../../../assets/images/jdx/honor/bg.png') no-repeat;
    background-size: 100% 100%;
    font-size: 36px;
    height: 100%;
    .title {
      p {
        background: url('../../../assets/images/jdx/honor/title.png') no-repeat;
        background-size: 144px 48px;
      }
    }
    .blo {
      .date {
        overflow-y: hidden;
        display: flex;
        font-size: 40px;
        margin-top: 50px;
        height: 99px;
        width: 100%;
        div {
          margin: 0 39px 0 0;
        }
        .active {
          background: url('../../../assets/images/jdx/honor/active.png')
            no-repeat center 60px;
          background-size: 27px;
          color: #c12219;
        }
      }
      .list {
        width: 90%;
        margin: 24px auto;
        display: flex;
        justify-content: space-between;
        .left {
          width: 100%;
          li {
            p {
              font-size: 30px;
              margin-bottom: 20px;
            }
            span {
              margin-bottom: 20px;
              display: block;
              padding-left: 30px;
              background: url('../../../assets/images/jdx/honor/active.png')
                no-repeat 0 12px;
              background-size: 14px;
              font-size: 24px;
              line-height: 1.6;
            }
          }
        }
      }
    }
  }
}
</style>
