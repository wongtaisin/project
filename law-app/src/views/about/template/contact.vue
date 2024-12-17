<template>
  <section class="jdx-contact">
    <div class="content">
      <div class="title">
        <p></p>
        <span>各业务团队分别专精于特定的业务领域，通过合理的专业分工和紧密的团队合作， 嘉得信有能力在各个领域为客户提供高质量的中国法律服务。</span>
      </div>
      <div class="add">
        <div class="left">
          <p>深圳</p>
          <ul>
            <li>地址：深圳罗湖区红岭北路中民时代广场 a座2楼201室</li>
            <li>邮编：100022</li>
            <li>电话：(0755)33033220</li>
            <li>传真：86-10-6568 1022/1838</li>
          </ul>
        </div>
        <div class="right">
          <img alt src />
        </div>
      </div>
      <div class="foot">{{commonPublic.footer}}</div>
      <!-- <law-footer :data="commonPublic.footer"></law-footer> -->
    </div>
  </section>
</template>

<script>
import lawFooter from '../../home/template/footer'
export default {
  components: {
    lawFooter
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
    font-size: 36px;
    height: 100%;
    .title {
      color: #c12219;
      p {
        background: url('../../../assets/images/jdx/contact/title.png')
          no-repeat;
        background-size: 144px 49px;
        width: 144px;
        height: 49px;
        margin: 0 auto;
      }
    }
    .add {
      width: 1080px;
      height: 426px;
      display: flex;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -213px 0 0 -540px;
      .left {
        background: url('../../../assets/images/jdx/contact/left.png') no-repeat;
        background-size: 426px;
        width: 426px;
        height: 426px;
        color: white;
        p {
          padding: 80px 0 0 50px;
          font-size: 30px;
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
        background: black;
      }
    }
    .foot {
      width: 100%;
      line-height: 32px;
      background: #3a3633;
      text-align: center;
      position: absolute;
      bottom: 0;
      font-size: 28px;
    }
  }
}
</style>
