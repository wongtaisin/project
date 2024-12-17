<template>
  <section class="common-footer">
    <div class="copy">
      {{data.sitename}} {{copyright}}
      <a
        href="http://www.beian.miit.gov.cn"
        target="_blank"
      >{{data.code}}</a>
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
    }
  },
  data () {
    return {
      copyright: '版权所有'
    }
  },
  computed: {
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    }
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code !== 0) return false
      this.lang()
    }
  },
  methods: {
    lang () {
      if (this.commonLanguage === 'zh-HK') {
        this.copyright = '版權所有'
      } else if (this.commonLanguage === 'en-US') {
        this.copyright = 'All rights reserved'
      } else {
        this.copyright = '版权所有'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.common-footer {
  width: 100%;
  background: #3a3633;
  .copy {
    line-height: 62px;
    height: 62px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    color: white;
    font-size: 24px;
    a {
      clear: both;
      color: white;
    }
  }
}
</style>
