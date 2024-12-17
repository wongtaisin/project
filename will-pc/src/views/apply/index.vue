<template>
  <div class="page-apply">
    <common-banner-img :src="getApplyLoad.banner"></common-banner-img>
    <div class="content">
      <div class="common-inside-classify">
        <div class="title">
          <div class="kua"></div>
          <p>在线预约</p>
        </div>
        <ul>
          <li class="active">在线预约</li>
        </ul>
      </div>
      <div class="right">
        <common-inside-title :cn="'在线预约'" :en="`Online Appointment`"></common-inside-title>
        <!-- <div class="hall">
          服务大厅:
          <ul>
            <li :key="i" v-for="(item, i) in getApplyLoad.hall_arr">{{item}}</li>
          </ul>
        </div>-->
        <!-- <div>当前大厅：{{hall}}</div> -->
        <div class="date">
          <ul class="time">
            <li>日期/时间</li>
            <li>9点-10点</li>
            <li>10点-11点</li>
            <li>11点-12点</li>
            <li>14点-15点</li>
            <li>15点-16点</li>
            <li>16点-17点</li>
            <li>17点-18点</li>
          </ul>
          <ul :key="item.key" class="time" v-for="(item) in getApplyLoad.appointment_data">
            <li>
              {{item.date}}
              <p style="margin-top: -20px">{{item.week}}</p>
            </li>
            <li
              :class="`${date == item.key && time == item2.key ? 'active' : ''}`"
              :key="item2.key"
              :style="`${item2.can_apply == 1 ? 'background: #e8141b; color: white;' : 'background: rgb(219, 218, 218); color: #999;'}`"
              @click="item2.can_apply == 1 ? clickDate(item.key, item2.key) : ''"
              v-for="(item2) in item.times"
            >{{item2.can_apply==1?'可预约':'满员'}}</li>
          </ul>
        </div>
        <div class="form">
          <div class="input">
            <div>姓名：</div>
            <div>
              <input maxlength="4" placeholder="请输入姓名" type="text" v-model="inputtext.name" />
            </div>
          </div>
          <div class="input">
            <div>身份证号码：</div>
            <div>
              <input maxlength="18" placeholder="请输入身份证号码" type="text" v-model="inputtext.idcard" />
            </div>
          </div>
          <div class="input">
            <div>手机号码：</div>
            <div>
              <input maxlength="11" placeholder="请输入手机号码" type="text" v-model="inputtext.mobile" />
            </div>
          </div>
          <div class="input">
            <div>性别：</div>
            <div>
              <select v-model="inputtext.gender_arr">
                <option value="0">请选择</option>
                <option :key="i" :value="i" v-for="(item, i) in getApplyLoad.gender_arr">{{item}}</option>
              </select>
            </div>
          </div>
          <div class="input">
            <div>文化水平：</div>
            <div>
              <select v-model="inputtext.cultural_level_arr">
                <option value="0">请选择</option>
                <option
                  :key="i"
                  :value="i"
                  v-for="(item, i) in getApplyLoad.cultural_level_arr"
                >{{item}}</option>
              </select>
            </div>
          </div>
          <div class="input">
            <div>婚姻状况：</div>
            <div>
              <select v-model="inputtext.marital_status_arr">
                <option value="0">请选择</option>
                <option
                  :key="i"
                  :value="i"
                  v-for="(item, i) in getApplyLoad.marital_status_arr"
                >{{item}}</option>
              </select>
            </div>
          </div>
          <div class="input">
            <div>健康状况：</div>
            <div>
              <select v-model="inputtext.health_arr">
                <option value="0">请选择</option>
                <option :key="i" :value="i" v-for="(item, i) in getApplyLoad.health_arr">{{item}}</option>
              </select>
            </div>
          </div>
          <div class="input">
            <div>精神状况：</div>
            <div>
              <select v-model="inputtext.mental_status_arr">
                <option value="0">请选择</option>
                <option
                  :key="i"
                  :value="i"
                  v-for="(item, i) in getApplyLoad.mental_status_arr"
                >{{item}}</option>
              </select>
            </div>
          </div>
          <div class="input">
            <div>读写能力：</div>
            <div>
              <select v-model="inputtext.literacy_arr">
                <option value="0">请选择</option>
                <option :key="i" :value="i" v-for="(item, i) in getApplyLoad.literacy_arr">{{item}}</option>
              </select>
            </div>
          </div>
          <div>
            <button @click="sub">预约</button>
          </div>
        </div>
        <div class="attention">
          <div class="title">遗嘱登记所需材料清单</div>
          <p>一、身份证明（验原件留复印件）</p>
          <p>1、立遗嘱人身份证（回乡证）、户口簿、结婚证/离婚证/离婚判决、一寸免冠彩色照片2张；</p>
          <p>2、继承人/受遗赠人/遗嘱执行人的身份证复印件；</p>
          <p>二、财产证明（验原件留复印件）</p>
          <p>1、商品房：商品房的提供房产证原件（没有房产证原件的，提供商品房买卖合同书/深圳产权登记中心的查档证明/法院的生效判决）；</p>
          <p>2、非商品房：整栋楼的提供集体土地建设用地使用证、非商品性质房地产证（绿本证）；属于历史遗留违法建筑的提供《农村城市化历史遗留违法建筑回执》、《拆迁（回迁）补偿合同》、房屋所在村委开具的《证明》及《买卖合同》；</p>
          <p>3、存款：提供开户的银行卡或存折；</p>
          <p>4、股票/基金：提供股东代码卡及证券公司关于股票及资金的证明单、通过交易系统打印的股票账户流水单、基金购买合同；</p>
          <p>5、股权：公司股东证明、公司信息工商查询单；</p>
          <p>6、村股份公司股权：股权证、股份公司出具的证明；</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hall: '总部',
      inputtext: {
        hall: 755001,
        date: '',
        time: '',
        name: '',
        idcard: '',
        mobile: '',
        gender_arr: 0,
        cultural_level_arr: 0,
        marital_status_arr: 0,
        health_arr: 0,
        mental_status_arr: 0,
        literacy_arr: 0
      },
      date: 0,
      time: 0
    }
  },
  computed: {
    getApplyLoad () {
      return this.$store.getters['apply/getApplyLoad']
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      let _params = {
        callBack: () => {

        }
      }
      this.$store.dispatch('apply/getApplyLoad', _params)
    },
    select (url) {
      this.$router.push({
        path: url
      })
    },
    clickDate (date, time) {
      this.date = date
      this.time = time
      this.inputtext.date = date
      this.inputtext.time = time
    },
    sub () {
      console.log(this.inputtext)
      // let reg = /^[\u4e00-\u9fa5]$/
      let id = /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/
      let tel = /^1[3|4|5|7|8][0-9]\d{8}$/
      if (this.inputtext.date == '' || this.inputtext.time == '') return this._utils.tipMessage('请选择预约时间')
      // if (!reg.test(this.inputtext.name)) return this._utils.tipMessage('请输入正确的中文姓名')
      if (this.inputtext.name == '') return this._utils.tipMessage('请输入正确的中文姓名')
      if (!id.test(this.inputtext.idcard)) return this._utils.tipMessage('请输入正确的身份证号码')
      if (!tel.test(this.inputtext.mobile)) return this._utils.tipMessage('请输入正确的手机号码')
      for (let i in this.inputtext) {
        if (this.inputtext[i] == 0) this.inputtext[key] = undefined
      }
      let _params = {
        paramsDate: this.inputtext,
        callBack: (res) => {
          this._utils.tipMessage('预约成功')
          this.loadData()
        }
      }
      this.$store.dispatch('apply/getAppointment', _params)
    }
  }
}
</script>

<style lang="scss">
.page-apply {
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
    margin-bottom: 40px;
    .date {
      width: 700px;
      margin: 40px auto 0;
      border-top: 1px solid #eeeeee;
      border-left: 1px solid #eeeeee;
      li {
        width: 100%;
        text-align: center;
        cursor: pointer;
        line-height: 42px;
        border-right: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
      }
      .time {
        width: 700px;
        display: flex;
        justify-content: space-between;
      }
      .active {
        background: #850e07 !important;
        color: white;
      }
    }
    .form {
      width: 490px;
      margin: 50px auto 40px;
      .input {
        margin-top: 20px;
        display: flex;
        div {
          &:first-child {
            width: 90px;
            text-align: right;
            line-height: 34px;
          }
          &:last-child {
            width: 340px;
          }
        }
      }
      input {
        width: 335px;
        line-height: 32px;
        text-indent: 10px;
        border: 1px solid #ddd;
      }
      select {
        width: 340px;
        height: 32px;
        border: 1px solid #ddd;
        background: white;
      }
      button {
        margin-top: 20px;
        font-size: 16px;
        text-align: center;
        line-height: 38px;
        width: 340px;
        height: 38px;
        color: white;
        border: none;
        cursor: pointer;
        margin-left: 90px;
        margin-right: 20px;
        background: rgba(232, 20, 27, 1);
        &:active {
          background: #850e07;
        }
      }
    }
    .attention {
      width: 700px;
      margin: 0 auto;
      padding-top: 20px;
      border-top: 1px solid #eee;
      .title {
        font-size: 20px;
        text-align: center;
      }
      p {
        margin-top: 5px;
      }
    }
  }
}
</style>
