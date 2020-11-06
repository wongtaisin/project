<template>
  <div class="common-date-list">
    <div class="pagesInner">
      <div @click="prevs" class="fa">
        <span aria-hidden="true">
          <i class="iconfont icon-left"></i>
        </span>
      </div>
      <ul class="ul">
        <li
          :class="{actived: item === currentPage}"
          :key="i"
          @click="select(item)"
          class="page"
          v-for="(item, i) in pages"
        >
          <span>{{item}}</span>
        </li>
      </ul>
      <div @click="next" class="fa">
        <span aria-hidden="true">
          <i class="iconfont icon-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-date-list',
  props: {
    year: {
      type: Array,
      default () {
        let date = new Date
        return []
      }
    }
  },
  data () {
    return {
      currentPage: this.year[0],
      totalPages: this.year[this.year.length - 1]
    }
  },
  computed: {
    pages () {
      const c = this.currentPage
      return [c - 1, c, c + 1]
    }
  },
  created () {
    this.current()
    sessionStorage.setItem(`fm`, this.currentPage)
  },
  methods: {
    select (n) {
      if (n < this.totalPages) n = Number(sessionStorage.getItem(`fm`))
      if (n > Number(sessionStorage.getItem(`fm`))) n = this.totalPages
      if (n === this.currentPage) return
      if (typeof n === 'string') return
      this.currentPage = n
      this.actived = n
      this.current()
    },
    prevs () {
      if (this.currentPage == this.totalPages) this.currentPage = Number(sessionStorage.getItem(`fm`)) + 1
      this.currentPage--
      this.current()
    },
    next () {

      if (this.currentPage == Number(sessionStorage.getItem(`fm`))) this.currentPage = this.totalPages - 1
      this.currentPage++
      this.current()
    },
    current () {
      this.$emit('year', this.currentPage)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-date-list {
  margin: 30px 0 20px;
  .pagesInner {
    font-size: 28px;
    color: #666666;
    height: 60px;
  }
  .ul {
    width: 519px;
    float: left;
    overflow-x: auto;
    white-space: nowrap;
  }
  .page {
    display: inline-block;
    margin: 0 60px;
    line-height: 60px;
    &:last-child {
      border: none;
    }
  }
  .fa {
    float: left;
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    width: 60px;
    height: 60px;
    background: #c12219;
    color: white;
    i {
      font-size: 28px;
    }
  }
  .fa:last-child {
    float: right;
  }
  .actived {
    color: #c12219;
    border-bottom: 2px solid #c12219;
  }
}
</style>
