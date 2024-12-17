<template>
  <section class="jdx-client">
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
      <div class="blok">
        <div class="lib ani" swiper-animate-duration=".5s" swiper-animate-effect="bounceInUp">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-yinhang"></i>
          </div>
          <p>{{client.bank}}</p>
        </div>
        <div class="lib ani" swiper-animate-duration="1s" swiper-animate-effect="bounceInUp">
          <div class="num">28</div>
          <div class="icon">
            <i class="iconfont icon-shiwu-chuizi"></i>
          </div>
          <p>{{client.equity}}</p>
        </div>
        <div class="lib ani" swiper-animate-duration="1.5s" swiper-animate-effect="bounceInUp">
          <div class="num">11</div>
          <div class="icon">
            <i class="iconfont icon-fangdichanjianzhu"></i>
          </div>
          <p>{{client.estate}}</p>
        </div>
        <div class="lib ani" swiper-animate-duration="1.75s" swiper-animate-effect="bounceInUp">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-xiangmugaishu"></i>
          </div>
          <p>{{client.energy}}</p>
        </div>
        <div class="lib ani" swiper-animate-duration="2s" swiper-animate-effect="bounceInUp">
          <div class="num">19</div>
          <div class="icon">
            <i class="iconfont icon-hulianwangyingxiao-"></i>
          </div>
          <p>{{client.technology}}</p>
        </div>
        <div class="lib ani" swiper-animate-duration="2.5s" swiper-animate-effect="bounceInUp">
          <div class="num">20</div>
          <div class="icon">
            <i class="iconfont icon-qixieshebei"></i>
          </div>
          <p>{{client.manufacturing}}</p>
        </div>
        <div class="lib ani" swiper-animate-duration="3s" swiper-animate-effect="bounceInUp">
          <div class="num">17</div>
          <div class="icon">
            <i class="iconfont icon-zhengfulei"></i>
          </div>
          <p>{{client.government}}</p>
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
    },
    client: {
      type: Object,
      default () {
        return {}
      }
    },
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
    font-size: 18px;
    height: 100%;
    .title {
      p {
        // background: url('../../../assets/images/jdx/client/title.png') no-repeat;
        // background-size: 144px 49px;
        // width: 144px;
        height: 49px;
        line-height: 1;
        margin: 0 auto;
      }
    }
    .blok {
      display: flex;
      justify-content: space-between;
      width: 1080px;
      height: 214px;
      position: absolute;
      bottom: 50%;
      left: 50%;
      margin-left: -540px;
      margin-bottom: -107px;
      .lib {
        width: 120px;
        height: 215px;
        text-align: center;
        div {
          width: 120px;
          height: 90px;
          line-height: 90px;
        }
        .num {
          background: white;
          color: #c12219;
          font-size: 60px;
        }
        .icon {
          background: #c12219;
          i {
            font-size: 19px;
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
