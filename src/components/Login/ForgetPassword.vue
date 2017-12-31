<template>
  <div id="ForgetPassword">
    <div class="page">
      <div class="page__hd">
          <img src="../../assets/img/head.jpg" alt="WeUI"/>
      </div>
      <div class="page__bd">
        <!-- <div class="weui-cells__title">选择</div> -->
        <div class="weui-cells">
          <div class="weui-cell weui-cell_vcode">
              <div class="weui-cell__hd">
                  <label class="weui-label">手机号</label>
              </div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="tel" placeholder="请输入手机号"/>
              </div>
              <div class="weui-cell__ft">
                  <button class="weui-vcode-btn">立即验证</button>
              </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="text" placeholder="请输入手机短信中的验证码"/>
              </div>
          </div>
        </div>
        
      </div>
      <div class="page__bd">
        <router-link class="weui-btn weui-btn_orange" :to="{ name: 'ResetPassword'}">
        下 一 步
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/register.less'
export default {
  name: 'ForgetPassword'
}
</script>
<style lang="css" scoped>
.weui-label {
    width: 70px;
} 
</style>