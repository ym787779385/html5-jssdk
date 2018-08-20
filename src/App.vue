<template>
  <div id="app">
    <router-view/>
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

    @Watch('$route')
    private routerChang() {
      this.reqConfig();
      console.log('    aaaa')
    }

    private a: string = '';
     mounted() {
    //  this.todo();
      console.log(wx+'aaa')
      console.log( window.location.href.split('#')[0]);
      this.reqConfig();
  
    }
    //  网页授权
    // private todo(data: wxconfig){
    //   let param: string = data.appId;
    //   param += '&redirect_uri=https%3A%2F%2Fstg-pteppp.leanapp.cn%2Fh5%2Fauth';
    //   param += '&response_type=code';
    //   param += '&scope=snsapi_userinfo';
    //   param += '&state=STATE#wechat_redirect';
    //   window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ param
    // }
    // 微信分享
    private reqConfig() {
      axios.get('https://stg-pteppp.leanapp.cn/h5/getJsConfig',{
        params:{    
          'url': window.location.href,
        }
      }).then((response) => {
        console.log(response.data);
        // this.todo(response.data);
        this.wxstart(response.data, 'http://www.baidu.com')  
      }).catch( ()=> {
        console.log('err')
      })
    }

    private wxstart(data: wxconfig, url: string) {
      wx.config({
        debug: data.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名，见附录1
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(() => {
        var link = 'http:www.baidu.com';
        var imgurl = '/assets/shareImg.jpg';
        // 分享到朋友圈
        wx.onMenuShareAppMessage({
          title: '测试未来',
          desc: '如果现在不移民，你的未来将会...',
          link: link,
          imgUrl: imgurl,
          success: function() {

          },
          cancel: function() {

          }
        });
        // 分享给朋友
        wx.onMenuShareTimeline({
          title: '如果不移民，你的未来会怎样', // 分享标题
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: imgurl, // 分享图标
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
