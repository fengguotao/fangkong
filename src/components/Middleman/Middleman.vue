<template>
  <div id="Middleman">
    <div class="page">
      <div class="page__hd">
          <div class="image-head">
            <img src="../../assets/img/head.jpg" alt="WeUI"/>
          </div>
          <div class="phone-head">
            18610788376
          </div>
          <div class="message-head">
            真实、清晰的头像将提升您的信誉度,让业主牢牢记住您
          </div>
      </div>
      <div class="page__bd">
          <div class="body-top-bd">
            <div class="image-bd">
                <img src="../../assets/img/u1801.png" alt="WeUI"/>
            </div>
            <div class="message-bd">
              北京市已有12681名经纪人在这里匹配房源帮客户找到房子
            </div>
            <div class="message-btn">
                <router-link class="weui-btn weui-btn_orange" :to="{ name: 'RegisterPassword'}">
                + 订阅房源
                </router-link>
            </div>
          </div>
          <div class="body-bottom-bd page__bd_spacing">
            <div class="weui-flex">
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            </div>   
          </div>
      </div>
      <!-- <div class="page__bd">

      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Middleman'
}
</script>
<style lang="css" scoped>
.page__hd{
  padding: 10px;
  text-align: center;
  background-image: url(../..//assets/img/userinfo.png); 
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.image-head{
  height: 100px;
  width: 100px;
  margin: 0 auto;
}
.message-head{
  color: #999999;
  font-size: 12px;
}
.phone-head{
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  color: #FFFFFF;
}
.image-head img{
  height: 100%;
  width: 100%;
  border-radius: 50px;
}
.body-top-bd{
  text-align: center;
  background: rgba(242, 242, 242, 1);
  padding: 20px 0;
  width: 100%;
}
.image-bd{
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.image-bd img{
  height: 100%;
  width: 100%;
}
.message-bd{
  color: #999999;
  font-size: 12px;
  height: 50px;
  line-height: 50px
}
.message-btn{
  width: 80%;
  margin: 0 10%;
}
.weui-btn_orange{
    border-radius: 0;
    background-color: rgba(255, 102, 0, 1);
}
.weui-btn_orange:active {
    background-color: rgba(255, 102, 0, 0.8);
}
</style>