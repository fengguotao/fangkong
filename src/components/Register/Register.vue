<template>
  <div id="Register">
    <div class="page">
      <div class="page__hd">
          <img src="../../assets/img/head.jpg" alt="WeUI"/>
      </div>
      <div class="page__bd">
        <!-- <div class="weui-cells__title">选择</div> -->
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access" @click="showActionsheet()">
              <div class="weui-cell__bd">
                  <p>账户类型</p>
              </div>
              <div class="weui-cell__ft">{{ accounType.name }}</div>
          </div>
          <div class="weui-cell">
            <!-- <div class="weui-cell__hd"><label class="weui-label">手机</label></div> -->
            <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" placeholder="请输入手机号"/>
            </div>
          </div>
          <div class="weui-cell weui-cell_vcode">
              <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入手机验证码"/>
              </div>
              <div class="weui-cell__ft">
                <button class="weui-vcode-btn">立即验证</button>
              </div>
          </div>
        </div>
        
      </div>
      <div class="page__bd">
        <router-link class="weui-btn weui-btn_orange" :to="{ name: 'RegisterPassword'}">
        下一步
        </router-link>
        <div class="weui-cells__title weui-form-preview__bd percentage">已有放空了账号 <router-link  :to="{ name: 'Login'}" style="color: #FF9900;">立即登陆>></router-link></div>
      </div>
    </div>
    <mt-actionsheet
      :actions="accounList"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import { Toast, Actionsheet } from 'mint-ui'
import echarts from 'echarts'
import '@/assets/css/register.less'
export default {
  name: 'Register',
  data () {
    return {
      // btn_text: '下一步',
      accounType: {name: '请选择', _id: null},
      accounList: [],
      sheetVisible: false,
      chartsPie: ''
    }
  },
  components: {
    'Toast': Toast,
    'mtActionsheet': Actionsheet
  },
  methods: {
    showActionsheet () {
      this.accounList = [
        {
          name: '业主',
          _id: 1,
          method: this.selectAccoun
        },
        {
          name: '经纪人',
          _id: 2,
          method: this.selectAccoun
        }
      ]
      this.sheetVisible = true
    },
    selectAccoun (item, index) {
      this.accounType = item
    },
    next_step () {

    },
    drawRadar (id) {
      let self = this
      self.chartsRadar = echarts.init(document.getElementById(id))
      self.chartsRadar.setOption({
        title: {
          text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          data: ['预算', '实际']
        },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5],
              show: false
            }
          },
          indicator: [
            {name: '销售', max: 6500},
            {name: '管理', max: 16000},
            {name: '信息', max: 30000},
            {name: '客服', max: 38000},
            {name: '研发', max: 52000}
          ]
        },
        series: [{
          type: 'radar',
          name: '预算 vs 实际',
          data: [
            {
              name: '预算分',
              value: [4300, 10000, 28000, 35000, 50000, 19000]
            },
            {
              name: '实际开销',
              value: [5000, 14000, 28000, 31000, 42000, 21000]
            }
          ]
        }]
      })
    }
  },
  mounted () {
    // let self = this
    // this.$nextTick(function () {
    //   self.drawRadar('radar')
    // })
  }
}
</script>
