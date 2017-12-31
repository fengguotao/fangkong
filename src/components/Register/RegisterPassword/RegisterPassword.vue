<template>
    <div id="RegisterPassword">
        <div class="page">
      <div class="page__hd">
          <img src="../../../assets/img/head.jpg" alt="WeUI"/>
      </div>
      <div class="page__bd">
        <!-- <div class="weui-cells__title">选择</div> -->
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access" @click="showActionsheet()">
              <div class="weui-cell__bd">
                  <p>业主身份</p>
              </div>
              <div class="weui-cell__ft">{{ accounType.name }}</div>
          </div>
          <div class="weui-cell">
            <!-- <div class="weui-cell__hd"><label class="weui-label">手机</label></div> -->
            <div class="weui-cell__bd">
                    <input class="weui-input" type="password" placeholder="请输入密码"/>
            </div>
          </div>
        </div>
        <div class="weui-cells__title">密码格式为6-16位数字，字母或符号组成，不允许有空格</div>
      </div>
      <div class="page__bd">
        <router-link class="weui-btn weui-btn_orange" :to="{ name: 'Login'}">立即注册</router-link>
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
import '@/assets/css/register.less'
export default {
  name: 'RegisterPassword',
  data () {
    return {
      accounType: { name: '请选择', _id: null },
      accounList: [],
      sheetVisible: false
    }
  },
  components: {
    Toast: Toast,
    mtActionsheet: Actionsheet
  },
  methods: {
    showActionsheet () {
      this.accounList = [
        {
          name: '个人业主',
          _id: 1,
          method: this.selectAccoun
        },
        {
          name: '招商经理',
          _id: 2,
          method: this.selectAccoun
        }
      ]
      this.sheetVisible = true
    },
    selectAccoun (item, index) {
      this.accounType = item
    }
  }
}
</script>