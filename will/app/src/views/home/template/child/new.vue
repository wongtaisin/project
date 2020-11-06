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
    width: 750px;
    margin: 0 auto;
    padding: 30px 0;
    .left {
      width: 100%;
      padding: 0 32px;
      .title {
        font-size: 28px;
        div {
          &:first-child {
            font-size: 40px;
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
        font-size: 28px;
        li {
          width: 100%;
          line-height: 2.2;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          div {
            &:first-child {
              width: 500px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          &:hover {
            color: rgba(232, 20, 27, 1);
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
