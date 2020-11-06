<template>
  <div class="page-job">
    <common-banner-img :src="getRecruit.data.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>诚聘英才</p>
        </div>
        <ul>
          <li class="active">诚聘英才</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="'诚聘英才'" :en="`Join Us`"></common-inside-title>
        <div class="fold" v-if="getRecruit.jobs">
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
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 0,
      contact: {
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
  computed: {
    getRecruit () {
      this.$store.getters['job/getRecruit'].jobs.forEach((item, i) => {
        if (item.demand) {
          item.demand = item.demand.replace(/\n/g, '</br>')
        }
        if (item.duty) {
          item.duty = item.duty.replace(/\n/g, '</br>')
        }
        if (item.welfare) {
          item.welfare = item.welfare.replace(/\n/g, '</br>')
        }
      })
      return this.$store.getters['job/getRecruit']
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('job/getRecruit')
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
  min-height: 100%;
  .content {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .right {
      width: 810px;
      margin-bottom: 40px;
    }
    .fold {
      .list {
        margin-top: 20px;
        .title {
          font-size: 18px;
          background: #3a3633;
          color: white;
          height: 60px;
          line-height: 60px;
          padding-left: 30px;
          span {
            width: 60px;
            height: 60px;
            background: rgba(232, 20, 27, 1);
            display: block;
            float: right;
            line-height: 60px;
            text-align: center;
            cursor: pointer;
          }
        }
        ul {
          border: 1px solid #ddd;
          padding: 30px;
          line-height: 3;
          font-size: 16px;
          li {
            color: #666;
            width: 100%;
            overflow: hidden;
            div {
              float: left;
              &:first-child {
                width: 100px;
              }
              color: black;
              &:last-child {
                width: 646px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
