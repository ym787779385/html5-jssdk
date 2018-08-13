<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang='ts'>
  import wx from 'wx-sdk-ts'
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import '@/assets/font/font.css'

  @Component
  export default class App extends Vue{
    private a: string = '';
    mounted() {
    //  this.todo();
       }
    //  网页授权
    private todo(){
      let param: string = 'appid=wx0e5639d1c069d5cd';
      param += '&redirect_uri=' + encodeURIComponent(location.href);
      param += '&response_type=code';
      param += '&scope=snsapi_base';
      param += '&state=123#wechat_redirect';
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' + param;
    }
    // 微信分享
  }

</script>

<style lang="less">
#app {
  font-family: 'happyfont';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
</style>
