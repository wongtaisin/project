<template>
  <section class="page-domain">
    <common-banner-img :src="getPracticeAreas.banner"></common-banner-img>
    <div class="content">
      <common-inside-title :cn="`业务领域`" :en="`Professional field`"></common-inside-title>
      <ul class="list">
        <li :key="i" @click="goDetail(item.id)" v-for="(item, i) in getPracticeAreas.list">
          <div class="icon">
            <!-- <i class="iconfont icon-sousuo"></i> -->
            <img :src="item.image" alt />
          </div>
          <div class="text">
            <div class="dis">
              <p>{{item.title}}</p>
              <span>{{item.title_en}}</span>
            </div>
            <div class="line"></div>
          </div>
        </li>
      </ul>
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
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'domain') this.loadData()
    }
  },
  computed: {
    getPracticeAreas () {
      return this.$store.getters['domain/getPracticeAreas']
    }
  },
  created () { },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('domain/getPracticeAreas')
    },
    goDetail (e) {
      this.$router.push({
        path: '/domain/detail',
        query: {
          id: e
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-domain {
  width: 100%;
  min-height: 100%;
  .content {
    width: 1080px;
    margin: 0 auto 60px;
    .list {
      width: 1100px;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      margin: 0 auto;
      li {
        width: 215px;
        height: 100px;
        background: #f8f8f8;
        padding: 20px;
        margin-top: 20px;
        margin-right: 20px;
        cursor: pointer;
        overflow: hidden;
        &:hover {
          color: white;
          background: #c12219;
          animation: pageDomainmLi 0.5s alternate;
          animation-fill-mode: forwards;
          animation-direction: alternate;
          .text {
            .dis {
              span {
                color: white;
              }
            }
            .line {
              background: white;
            }
          }
        }
        .icon {
          height: 24px;
          overflow: hidden;
          .iconfont {
            font-size: 12px;
          }
          img {
            width: 28px;
            height: 28px;
          }
        }
        .text {
          margin-top: 20px;
          .dis {
            p {
              font-size: 16px;
              margin-bottom: 5px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            span {
              font-size: 12px;
              color: #666;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .line {
            width: 25px;
            height: 2px;
            background: #c12219;
            margin-top: 5px;
            border-radius: 2px;
          }
        }
      }
    }
  }
}
@keyframes pageDomainmLi {
  0% {
    color: black;
    background: white;
  }
  100% {
    background: #c12219;
  }
}
</style>
