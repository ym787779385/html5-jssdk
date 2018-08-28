<template>
  <div id="app">
    <router-view/>
    <img :src="imgurl" alt="">
  </div>
</template>

<script lang='ts'>
  import wx from 'wx-sdk-ts'
  import { Component, Prop, Vue,Watch } from 'vue-property-decorator';
  import '@/assets/font/font.css'
  import axios from 'axios';

  interface wxconfig{
    debug: boolean,
    appId: string,
    timestamp: string,
    nonceStr: string,
    signature: string,
    jsApiList: Array<string>,
  }

   
  @Component
  export default class App extends Vue{
    private imgurl: any = require('@/assets/shareImg.jpg')

    @Watch('$route')
    private routerChang() {
      this.reqConfig();
    }
    private img2 = '';
    // 微信config
    private reqConfig() {
      this.img2 = this.$store.state.userinfo[2];
      var userId = this.$store.state.userinfo[0];
      var shareLink = window.location.href.split('#')[0]+'?from='+userId;
      console.log("用户的Id为："+ userId);
      console.log("用户分享的地址为："  + shareLink);
      axios.get('/h5/jsconfig',{
        params:{    
          'url': window.location.href.split('#')[0],
        }
      }).then((response) => {
        console.log(response.data);
        this.wxstart(response.data,shareLink,this.imgurl);  
      }).catch( ()=> {
        console.log('err');
      })
    }

    private wxstart(data: wxconfig, shareLink: string, imgUrl: string,) {
      
      wx.config({
        debug: data.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名，见附录1
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(() => {
        // 分享到朋友圈
        wx.onMenuShareAppMessage({
          title: '测试未来',
          desc: '如果现在不移民，你的未来将会...',
          link: shareLink,
          imgUrl: imgUrl,
          success: function() {
            console.log('分享成功')
          },
          cancel: function() {
            console.log('取消分享')
          }
        });
        // 分享给朋友
        wx.onMenuShareTimeline({
          title: '如果不移民，你的未来会怎样', // 分享标题
          link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'https://static.prim.im/56e129271f8d8185b7de.jpg', // 分享图标
          success: function () {
            // 用户点击了分享后执行的回调函数
          },
          cancel: function() {
          
          }
        });
        
      })
    }


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
