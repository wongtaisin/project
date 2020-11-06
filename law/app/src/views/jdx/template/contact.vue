<template>
  <section class="jdx-contact">
    <div class="content">
      <div class="title ani" swiper-animate-duration="1.5s" swiper-animate-effect="bounceInDown">
        <!-- <p></p> -->
        <span
          class="ani"
          swiper-animate-duration="3s"
          swiper-animate-effect="bounceIn"
        >{{header.title}}</span>
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
    return {}
  }
}
</script>

<style lang="scss">
.jdx-contact {
  color: white;
  height: 100%;
  .content {
    font-size: 28px;
    height: 100%;
    .title {
      color: #c12219;
      p {
        background: url('../../../assets/images/jdx/contact/title.png')
          no-repeat;
        background-size: 144px 48px;
      }
    }
    .add {
      width: 100%;
      margin: 50px auto;
      .left {
        background: url('../../../assets/images/jdx/contact/left.png') no-repeat;
        background-size: 100%;
        width: 100%;
        height: 360px;
        color: white;
        p {
          padding: 44px 0 0 39px;
          font-size: 36px;
        }
        ul {
          padding: 0 39px;
          li {
            margin-top: 9px;
          }
        }
      }
      .right {
        width: 100%;
        height: 360px;
        img {
          width: 100%;
          height: 360px;
        }
      }
    }
    .foot {
      width: 100%;
      line-height: 72px;
      height: 72px;
      overflow: hidden;
      background: #3a3633;
      text-align: center;
      position: absolute;
      bottom: 0;
      font-size: 28px;
    }
  }
}
</style>
