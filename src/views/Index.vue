<template>
  <div></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Index extends Vue {
  mounted() {
      let url = window.location.href;
      let n = url.indexOf('=');
      let userId = url.slice(n);
      this.todo(userId);
  }

  private todo(userId: string){
    let url = encodeURIComponent('https://stg-pteppp.leanapp.cn/h5/auth?from'); 
    url = url + userId;                           
    console.log('回调地址为：'+url)
    window.location.href ='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6e8235ac81ee7570&redirect_uri='+url+'&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect'
  }
}
</script>

<style lang='less'>

</style>

