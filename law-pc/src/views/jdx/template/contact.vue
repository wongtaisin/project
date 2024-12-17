<template>
  <section class="jdx-contact">
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
      <div class="add ani" swiper-animate-duration="2s" swiper-animate-effect="bounceInUp">
        <div class="left">
          <p>{{contact.city}}</p>
          <ul>
            <li>{{contact.address}}：{{data.address}}</li>
            <li>{{contact.code}}：{{data.youbian}}</li>
            <li>{{contact.tel}}：{{data.tel}}</li>
            <li>{{contact.fax}}：{{data.fax}}</li>
          </ul>
        </div>
        <div class="right">
          <img alt src="../../../assets/images/jdx/contact/add.png" />
        </div>
      </div>
      <div class="foot">{{commonPublic.footer}}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    header: {
      type: Object,
      default () {
        return {}
      }
    },
    contact: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  computed: {
    commonPublic () {
      return this.$store.getters['common/commonPublic']
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.jdx-contact {
  color: white;
  height: 100%;
  .content {
    font-size: 18px;
    height: 100%;
    .title {
      width: 750px;
      color: #c12219;
      p {
        // background: url('../../../assets/images/jdx/contact/title.png')
        //   no-repeat;
        // background-size: 144px 49px;
        // width: 144px;
        height: 49px;
        line-height: 1;
        margin: 0 auto;
      }
    }
    .add {
      width: 1080px;
      height: 426px;
      display: flex;
      margin: 50px auto;
      .left {
        background: url('../../../assets/images/jdx/contact/left.png') no-repeat;
        background-size: 426px;
        width: 426px;
        height: 426px;
        color: white;
        p {
          padding: 80px 0 0 50px;
          font-size: 15px;
        }
        ul {
          padding: 40px 50px;
          li {
            margin-top: 10px;
          }
        }
      }
      .right {
        width: 654px;
        height: 426px;
        img {
          width: 654px;
          height: 426px;
        }
      }
    }
    .foot {
      width: 100%;
      line-height: 32px;
      background: #3a3633;
      text-align: center;
      position: absolute;
      bottom: 0;
      font-size: 14px;
    }
  }
}
</style>
