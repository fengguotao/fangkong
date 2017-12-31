<template>
  <div id="ForgetPassword">
    <div class="page">
      <div class="page__hd">
          <img src="../../assets/img/head.jpg" alt="WeUI"/>
      </div>
      <div class="page__bd">
        <!-- <div class="weui-cells__title">选择</div> -->
        <div class="weui-cells">
          <div class="weui-cell">
              <div class="weui-cell__hd">
                  <label class="weui-label">密码</label>
              </div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="password" placeholder="请输入新密码"/>
              </div>
              <!-- <div class="weui-cell__ft">
                  <button class="weui-vcode-btn">立即验证</button>
              </div> -->
          </div>
          <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="password" placeholder="再次输入新密码"/>
              </div>
          </div>
          
        </div>
        <div class="weui-cells__title">密码格式为6-16位数字，字母或符号组成，不允许有空格</div>
      </div>
      <div class="page__bd">
        <router-link class="weui-btn weui-btn_orange" :to="{ name: 'Middleman'}">
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
/* .weui-label {
    display: block;
    width: 170px;
    word-wrap: break-word;
    word-break: break-all;
} */
</style>