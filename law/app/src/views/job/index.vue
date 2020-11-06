<template>
  <section class="page-job">
    <common-banner-img :src="getRecruit.banner"></common-banner-img>
    <div class="content">
      <common-inside-title :cn="getRecruit.title" :en="`Recruitment of talents`"></common-inside-title>
      <div class="fold">
        <div :key="i" class="list" v-for="(item, i) in getRecruit.jobs">
          <div class="title">
            {{item.job}}
            <span @click="foldMenu(i)">+</span>
          </div>
          <ul v-show="active == i">
            <li>
              <div>{{contact.number}}：</div>
              <div>{{item.num}}</div>
            </li>
            <li>
              <div>{{contact.address}}：</div>
              <div>{{item.address}}</div>
            </li>
            <li>
              <div>{{contact.date}}：</div>
              <div>{{item.date}}</div>
            </li>
            <li>
              <div>{{contact.demand}}：</div>
              <div v-html="item.demand"></div>
            </li>
            <li>
              <div>{{contact.duty}}：</div>
              <div v-html="item.duty"></div>
            </li>
            <li>
              <div>{{contact.welfare}}：</div>
              <div v-html="item.welfare"></div>
            </li>
            <li>
              <div>{{contact.email}}：</div>
              <div>{{item.contact_email}}</div>
            </li>
            <li>
              <div>{{contact.tel}}：</div>
              <div>{{item.contact_tel}}</div>
            </li>
            <li>
              <div>{{contact.contactName}}：</div>
              <div>{{item.contact_name}}</div>
            </li>
          </ul>
        </div>
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
      active: 0,
      contact: {}
    }
  },
  computed: {
    getRecruit () {
      // this.$store.getters['job/getRecruit'].jobs.forEach((item, i) => {
      //   if (item.demand) {
      //     item.demand = item.demand.replace(/\n/g, '</br>')
      //   }
      //   if (item.duty) {
      //     item.duty = item.duty.replace(/\n/g, '</br>')
      //   }
      //   if (item.welfare) {
      //     item.welfare = item.welfare.replace(/\n/g, '</br>')
      //   }
      // })
      return this.$store.getters['job/getRecruit']
    },
    commonLanguage () {
      return this.$store.getters['common/commonLanguage']
    },
  },
  watch: {
    '$store.state.home.getLanguage' (data) {
      if (data.code != 0) return false
      if (this.$route.name == 'job') this.loadData()
    },
    '$store.state.common.commonLanguage' (val) {
      this.lang()
    }
  },
  created () { },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.lang()
      this.$store.dispatch('job/getRecruit')
    },
    lang () {
      if (this.commonLanguage == 'zh-HK') {
        this.contact = {
          number: '招聘人數',
          address: '地址',
          date: '發布時間',
          demand: '崗位職責',
          duty: '招聘要求',
          welfare: '妳將擁有',
          email: '郵箱',
          tel: '電話',
          contactName: '聯系人'
        }
      } else if (this.commonLanguage == 'en-US') {
        this.contact = {
          number: 'NUMBER',
          address: 'ADDRESS',
          date: 'TIME',
          demand: 'DEMAND',
          duty: 'DUTY',
          welfare: 'WELFARE',
          email: 'EMAIL',
          tel: 'TEL',
          contactName: 'CONTACT'
        }
      } else {
        this.contact = {
          number: '招聘人数',
          address: '地址',
          date: '发布时间',
          demand: '招聘要求',
          duty: '岗位职责',
          welfare: '你将拥有',
          email: '邮箱',
          tel: '电话',
          contactName: '联系人'
        }
      }
    },
    foldMenu (i) {
      this.active = i
    }
  }
}
</script>

<style lang='scss' scoped>
.page-job {
  width: 100%;
  min-height: calc(100% - 318px);
  padding-bottom: 39px;
  .content {
    .fold {
      padding: 0 39px;
      .list {
        margin-top: 20px;
        .title {
          font-size: 28px;
          background: #3a3633;
          color: white;
          height: 80px;
          line-height: 80px;
          padding-left: 30px;
          span {
            width: 80px;
            height: 80px;
            background: #c12219;
            display: block;
            float: right;
            line-height: 80px;
            text-align: center;
          }
        }
        ul {
          border: 1px solid #ddd;
          padding: 20px;
          line-height: 2;
          font-size: 28px;
          li {
            color: #666;
            width: 100%;
            overflow: hidden;
            div {
              float: left;
              &:first-child {
                width: 140px;
              }
              color: black;
              &:last-child {
                width: 440px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
