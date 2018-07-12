<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->

    </div>
    <router-view/>
  </div>
</template>

<script lang='ts'>
  import wx from 'wx-sdk-ts'
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class App extends Vue{
    private a: string = '';
    // mounted() {
    //  this.todo();
    //    }
    //  网页授权
    // private todo(){
    //   let param: string = 'appid=wx0e5639d1c069d5cd';
    //   param += '&redirect_uri=' + encodeURIComponent(location.href);
    //   param += '&response_type=code';
    //   param += '&scope=snsapi_base';
    //   param += '&state=123#wechat_redirect';
    //   window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' + param;
    // }
    // 微信分享

  }

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
