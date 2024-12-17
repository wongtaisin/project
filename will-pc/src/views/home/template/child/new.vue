<template>
  <div class="child-new">
    <div class="content">
      <div class="left">
        <div class="title">
          <div>新闻咨询</div>
          <div>
            News bulletin
            <span>更多</span>
          </div>
          <div></div>
        </div>
        <ul>
          <li :key="i" @click="goUrl(item.id)" v-for="(item, i) in data">
            <div>{{item.title}}</div>
            <div>{{item.time}}</div>
          </li>
        </ul>
      </div>
      <div class="right">
        <img alt src="../../../../assets/images/home/new-right.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    goUrl (id) {
      this.$router.push({
        path: `/news/detail?cid=${id}`
      })
      this.$store.dispatch('common/commonUrl', '/news')
    }
  }
}
</script>

<style lang="scss" scoped>
.child-new {
  background: #eeeeee;
  margin-top: 40px;
  .content {
    display: flex;
    justify-content: space-between;
    width: 1080px;
    margin: 0 auto;
    padding: 30px 0;
    .left {
      width: 500px;
      .title {
        font-size: 14px;
        div {
          &:first-child {
            font-size: 20px;
          }
          &:nth-child(2) {
            color: #595757;
            margin-top: 9px;
            span {
              float: right;
              &:hover {
                color: rgba(232, 20, 27, 1);
                cursor: pointer;
              }
            }
          }
          &:last-child {
            width: 24px;
            height: 2px;
            background: rgba(232, 20, 27, 1);
            margin-bottom: 15px;
          }
        }
      }
      ul {
        font-size: 14px;
        li {
          width: 500px;
          line-height: 2.2;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            &:first-child {
              width: 400px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          &:hover {
            color: rgba(232, 20, 27, 1);
            cursor: pointer;
          }
        }
      }
    }
    .right {
      width: 480px;
      height: 376px;
      img {
        width: 480px;
        height: 376px;
      }
    }
  }
}
</style>
