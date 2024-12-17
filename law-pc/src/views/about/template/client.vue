<template>
  <section class="jdx-client">
    <div class="content">
      <div class="title">
        <p></p>
        <span>嘉得信拥有广泛的客户群体，其中世界五百强这样的大型跨国公司，包括业绩良好的大型国有企业和成长型企业； 既包括传统的制造业企业，包括国内外著名的投资银行、私募基金、地产商、通讯、信息技术、旅游等服务型企业；</span>
      </div>
      <div class="blok">
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行</p>
        </div>
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行2</p>
        </div>
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行3</p>
        </div>
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行4</p>
        </div>
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行5</p>
        </div>
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行6</p>
        </div>
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行7</p>
        </div>
        <div class="lib">
          <div class="num">21</div>
          <div class="icon">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <p>银行8</p>
        </div>
      </div>
      <div class="zi">
        <div class="look">查看详情</div>
        <div class="iconfont icon-jiantou animated bounce"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
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
  background: rgba($color: black, $alpha: 0.6);
  .content {
    background: url('../../../assets/images/jdx/client/bg.png') no-repeat;
    background-size: 100% 100%;
    font-size: 18px;
    height: 100%;
    .title {
      p {
        background: url('../../../assets/images/jdx/client/title.png') no-repeat;
        background-size: 144px 49px;
        width: 144px;
        height: 49px;
        margin: 0 auto;
      }
    }
    .blok {
      display: flex;
      justify-content: space-between;
      width: 1118px;
      height: 214px;
      position: absolute;
      bottom: 50%;
      left: 50%;
      margin-left: -559px;
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
