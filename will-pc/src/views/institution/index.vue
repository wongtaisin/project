<template>
  <div class="page-about">
    <common-banner-img :src="getAboutDesc.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>机构设置</p>
        </div>
        <ul>
          <li
            :class="{active: getAboutDesc.id === item.id}"
            :key="i"
            @click="select(item.id)"
            v-for="(item, i) in getAboutDesc.institution_sidebar"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="getAboutDesc.title" :icon="false"></common-inside-title>
        <div class="texts" v-html="getAboutDesc.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  computed: {
    getAboutDesc () {
      return this.$store.getters['common/getAboutDesc'].data
    }
  },
  data () {
    return {
      id: ''
    }
  },
  watch: {
    '$route' (val) {
      if (val.name != 'institution') return false
      this.id = val.query.id
      this.loadData()
    }
  },
  activated () {
    this.id = this.$route.query.id
    this.loadData()
  },
  methods: {
    loadData () {
      let _params = {
        paramsDate: {
          id: this.id
        },
        callBack: () => {

        }
      }
      this.$store.dispatch('common/getAboutDesc', _params)
    },
    select (id) {
      this.id = id
      this.$router.push({
        path: `/institution?id=${id}`
      })
    }
  }
}
</script>

<style lang="scss">
.page-about {
  width: 100%;
  height: 100%;
  .content {
    min-height: calc(100% - 300px);
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .right {
    width: 810px;
    padding-bottom: 40px;
    .texts {
      margin-top: 30px;
    }
  }
}
</style>
