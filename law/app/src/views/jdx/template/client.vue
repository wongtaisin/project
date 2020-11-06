<template>
  <section class="jdx-client">
    <div class="content">
      <div class="title ani" swiper-animate-duration="1.5s" swiper-animate-effect="bounceInDown">
        <!-- <p></p> -->
        <span
          class="ani"
          swiper-animate-duration="3s"
          swiper-animate-effect="bounceIn"
        >{{header.title}}</span>
      </div>
      <div class="blok">
        <div class="lib ani" swiper-animate-duration="0.5s" swiper-animate-effect="bounceInUp">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-yinhang"></i>
          </div>
          <p>银行</p>
        </div>
        <div class="lib ani" swiper-animate-duration="1s" swiper-animate-effect="bounceInUp">
          <div class="num">28</div>
          <div class="icon">
            <i class="iconfont icon-shiwu-chuizi"></i>
          </div>
          <p>私募股权/投资 基金</p>
        </div>
        <div class="lib ani" swiper-animate-duration="1s" swiper-animate-effect="bounceInUp">
          <div class="num">11</div>
          <div class="icon">
            <i class="iconfont icon-fangdichanjianzhu"></i>
          </div>
          <p>房地产</p>
        </div>
        <div class="lib ani" swiper-animate-duration="1.5s" swiper-animate-effect="bounceInUp">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-xiangmugaishu"></i>
          </div>
          <p>能源与自然 资源</p>
        </div>
      </div>
      <div class="blok">
        <div class="lib ani" swiper-animate-duration="2s" swiper-animate-effect="bounceInUp">
          <div class="num">19</div>
          <div class="icon">
            <i class="iconfont icon-hulianwangyingxiao-"></i>
          </div>
          <p>信息技术、电 信、传媒与娱乐</p>
        </div>
        <div class="lib ani" swiper-animate-duration="2.5s" swiper-animate-effect="bounceInUp">
          <div class="num">20</div>
          <div class="icon">
            <i class="iconfont icon-qixieshebei"></i>
          </div>
          <p>制造业</p>
        </div>
        <div class="lib ani" swiper-animate-duration="3s" swiper-animate-effect="bounceInUp">
          <div class="num">17</div>
          <div class="icon">
            <i class="iconfont icon-zhengfulei"></i>
          </div>
          <p>协会/政府部门</p>
        </div>
      </div>
      <!-- <div class="zi">
        <div class="look">查看详情</div>
        <div class="iconfont icon-jiantou animated bounce"></div>
      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.jdx-client {
  color: white;
  height: 100%;
  .content {
    background: url('../../../assets/images/jdx/client/bg.png') no-repeat;
    background-size: 100% 100%;
    font-size: 28px;
    height: 100%;
    .title {
      p {
        background: url('../../../assets/images/jdx/client/title.png') no-repeat;
        background-size: 144px 48px;
      }
    }
    .blok {
      display: flex;
      justify-content: space-between;
      width: 90%;
      // height: 213px;
      // position: absolute;
      // bottom: 50%;
      // left: 50%;
      // margin-left: -45%;
      // margin-bottom: -107px;
      margin: 0 auto;
      margin-top: 90px;
      &:last-child {
        width: 65%;
        margin-top: 50px;
      }
      .lib {
        width: 120px;
        // height: 215px;
        text-align: center;
        div {
          width: 120px;
          height: 90px;
          line-height: 90px;
        }
        .num {
          background: white;
          color: #c12219;
          font-size: 30px;
        }
        .icon {
          background: #c12219;
          i {
            font-size: 48px;
          }
        }
        p {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
