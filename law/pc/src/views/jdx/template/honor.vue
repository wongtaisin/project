<template>
  <section class="jdx-honor">
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
      <div class="blo">
        <div class="date ani" swiper-animate-duration="2s" swiper-animate-effect="zoomIn">
          <div
            :class="active ==i?`active`: ``"
            :key="i"
            @click="clickA(i)"
            v-for="(item, i) in pages"
          >{{item}}</div>
        </div>
        <div class="list">
          <div class="left ani" swiper-animate-duration="3s" swiper-animate-effect="bounceInLeft">
            <ul>
              <li>
                <p>{{prevs}}</p>
                <span>{{prevsC}}</span>
              </li>
            </ul>
            <div @click="goUrl" class="ic">
              <div class="loo">
                {{more}}
                <i class="iconfont icon-right"></i>
              </div>
            </div>
          </div>
          <div class="middle ani" swiper-animate-duration="3s" swiper-animate-effect="zoomIn">
            <div class="top">
              <i class="iconfont icon-shangjiantou"></i>
            </div>
            <div class="line">
              <div></div>
              <div></div>
            </div>
            <div class="bottom">
              <i class="iconfont icon-jiantou"></i>
            </div>
          </div>
          <div class="right ani" swiper-animate-duration="3s" swiper-animate-effect="bounceInRight">
            <ul>
              <li>
                <p>{{next}}</p>
                <span>{{nextC}}</span>
              </li>
            </ul>
            <div @click="goUrl" class="ic">
              <div class="loo">
                {{more}}
                <i class="iconfont icon-right"></i>
              </div>
            </div>
          </div>
        </div>
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
      prevs: 0,
      next: 0,
      nextC: '',
      prevsC: '',
      pages: []
    }
  },
  watch: {
    'data' (val) {
      if (val) {
        const c = this.data[0].year
        const t = this.data[this.data.length - 2].year // 取倒数第二，这样才能获取最后一个数的值
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
      this.next = this.data[i].year
      this.nextC = this.data[i].data[0].content
      this.prevs = this.data[i + 1].year
      this.prevsC = this.data[i + 1].data[0].content
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
    font-size: 18px;
    height: 100%;
    .title {
      width: 1100px;
      p {
        // background: url('../../../assets/images/jdx/honor/title.png') no-repeat;
        // background-size: 144px 49px;
        // width: 144px;
        height: 49px;
        line-height: 1;
        margin: 0 auto;
      }
    }
    .blo {
      .date {
        display: flex;
        justify-content: center;
        font-size: 14px;
        margin: 50px auto 0;
        height: 90px;
        cursor: pointer;
        div {
          margin: 0 20px;
        }
        .active {
          background: url('../../../assets/images/jdx/honor/active.png')
            no-repeat center 50px;
          background-size: 34px 34px;
          color: #c12219;
        }
      }
      .list {
        width: 980px;
        margin: 25px auto;
        display: flex;
        justify-content: space-between;
        .left {
          width: 450px;
          margin-top: 110px;
          li {
            p {
              font-size: 50px;
              text-align: right;
              margin-bottom: 20px;
            }
            span {
              display: inline-block;
              width: 425px;
              padding-right: 25px;
              background: url('../../../assets/images/jdx/honor/active.png')
                no-repeat 435px center;
              background-size: 14px;
              font-size: 16px;
              text-align: right;
            }
          }
          .ic {
            margin-top: 30px;
            margin-left: 345px;
            cursor: pointer;
            .loo {
              font-size: 14px;
              width: 110px;
              height: 40px;
              background: rgba(255, 255, 255, 1);
              border-radius: 20px;
              color: black;
              text-align: center;
              line-height: 40px;
            }
          }
        }
        .right {
          width: 450px;
          margin-top: 16px;
          li {
            p {
              font-size: 50px;
              text-align: left;
              margin-bottom: 20px;
            }
            span {
              display: inline-block;
              width: 425px;
              padding-left: 25px;
              background: url('../../../assets/images/jdx/honor/active.png')
                no-repeat 0 center;
              background-size: 14px;
              font-size: 16px;
              text-align: left;
            }
          }
          .ic {
            margin-top: 30px;
            cursor: pointer;
            .loo {
              font-size: 14px;
              width: 110px;
              height: 40px;
              background: rgba(255, 255, 255, 1);
              border-radius: 20px;
              color: black;
              text-align: center;
              line-height: 40px;
            }
          }
        }
        .middle {
          width: 30px;
          position: relative;
          .top,
          .bottom {
            width: 30px;
            height: 30px;
            color: white;
            background: #c12219;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            line-height: 30px;
          }
          .line {
            width: 2px;
            background: #c12219;
            height: 315px;
            margin-left: 13px;
            div {
              width: 12px;
              height: 12px;
              background: white;
              border-radius: 50%;
              &:first-child {
                position: absolute;
                top: 46px;
                left: 8px;
              }
              &:last-child {
                position: absolute;
                top: 138px;
                left: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
