<template>
  <div id="Login">
      <div class="page">
          <div class="page__hd">
              <img src="../../assets/img/head.jpg" alt="WeUI"/>
          </div>
          <div class="page__bd">
            <!-- <div class="weui-cells__title">选择</div> -->
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">账号</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="tel" placeholder="请输入手机号"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入密码"/>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="page__bd">
              <router-link class="weui-btn weui-btn_orange" :to="{ name: 'Middleman'}">
              登 陆
              </router-link>
        </div>
        <div class="page__bd">
              <!-- <div class="weui-cells__title percentage-left"> -->
                <router-link class="weui-cells__title percentage-left" :to="{ name: 'ForgetPassword'}" style="color: #999999;">忘记密码</router-link>
              <!-- </div>
              <div class="weui-cells__title weui-form-preview__bd percentage-right" @click="goRegister()"> -->
                没有放空了账号 
                <router-link class="weui-cells__title weui-form-preview__bd percentage-right"  :to="{ name: 'Register'}" style="color: #FF9900;">立即注册>></router-link>
              <!-- </div> -->
          </div>
      </div>
  </div>
</template>

<script>
import '@/assets/css/register.less'
export default {
  name: 'Login',
  data () {
    return {
      accounType: {name: '请选择', _id: null},
      accounList: [],
      sheetVisible: false,
      chartsPie: ''
    }
  },
  methods: {
    goRegister () {
      console.log('111')
    }
  }
}
</script>
<style lang="css" scoped>
.weui-label {
    width: 50px;
} 
</style>