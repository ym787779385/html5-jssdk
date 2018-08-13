<template>
  <div class="firstPage">
    <img src="../assets/firstpage/bc.jpg" alt="" class="firstPage_background">
    <div class='firstPage_top'>
      <img src="../assets/firstpage/TV.png" alt="" class="firstPage_tv">
      <img src="../assets/firstpage/btnlTV.png" alt="" class="firstPage_btntv " v-if="istvanimate">
      <img src="../assets/firstpage/btnTV.png" alt="" class="firstPage_btntv btntvanimate" @click="tvClick" v-if="!istvanimate">
      <img src="../assets/firstpage/xhua.jpg" alt="" class="firstPage_backgtv" :class="{'tvanimate': istvanimate  }" v-show='xuhuaImg'>
      <img src="../assets/firstpage/Q1.jpg" alt="" class="firstPage_backgtv" :class="{'tvanimate2': istvanimate  }" v-show='!xuhuaImg'>
    </div>
    <div class='firstPage_font' v-if="!flag">
      <img src="../assets/firstpage/title.png" alt="" class="firstPage_title shake  shake-constant" >
    </div>
    <ul class='optionList' v-if="flag" >
      <li v-for="(item,index) in oplist" :key="index" class="itemstyle">
        <span>{{item.icon}}</span>
        {{item.optitle}}
        </li>
    </ul>
    
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

interface option{
  icon: string;
  optitle: string;
  score: number;
}

@Component({
  components: {},
})
export default class Home extends Vue {
  private flag: boolean = false;
  private istvanimate: boolean = false;
  private xuhuaImg: boolean = true;
  private oplist: Array<option> =[
    {
      icon: 'A',
      optitle: '从来不带',
      score: 5,
    },
    {
      icon: 'B',
      optitle: '偶尔带',
      score: 5,
    },
    {
      icon: 'C',
      optitle: '家里内裤',
      score: 5,
    },
  ]

  private tvClick() {
    this.istvanimate = true
    
    setTimeout(() => {
      this.xuhuaImg = false;
      this.flag = true;
      console.log(this.flag)
    },1800);
    console.log(this.flag)
   
  }

}
  
</script>

<style lang='less' scoped>
  .firstPage{
   
    .firstPage_background{
      width: 100vw;
      height: 100vh;
      position: relative;
      z-index: 10;
    }
    .firstPage_top{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 20;
      .firstPage_tv{
        width: 80vw;
        margin: 0 10vw;
        margin-top: 12vw;
      }
      .firstPage_btntv{
        position: relative;
        top: -41.1vw;
        left: 47.5vw;
        width: 5vw;
      }
      .btntvanimate{
         animation: btnAnimate 0.5s linear   infinite alternate;
      }
      .firstPage_backgtv{
        width: 59.6vw;
        position: relative;
        top: -48vw;
        left: 11.5vw;
      }
      .tvanimate{
        animation: tvAnimate 2s ease-out 1s 1;
      }
      .tvanimate2{
        animation: tvAnimate2 3s linear 1;
      }
    
    
    }
    .firstPage_font{
     position: absolute;
      top: 50vh;
      left: 10vw;
      z-index: 20;
      .firstPage_title{
        width: 80vw;
        margin-top: 20px;
      }
    }
    .optionList{
      width: 70vw;
      position: absolute;
      top: 50vh;
      left: 15vw;
      z-index: 20;
      font-size: 24px;
      .itemstyle{
        height: 10vh;
        line-height: 10vh;
      }
      .itemstyle>span{
        display: inline-block;
        width: 40px;

      }
    }

  }
@keyframes btnAnimate {
  0% { opacity: 0; }
  100% { opacity: 1;}
}

@keyframes tvAnimate {
  0% { opacity: 1; }
  100% { opacity: 0;}
}

@keyframes tvAnimate2 {
  0% { opacity: 0; }
  100% { opacity: 1;}
}
</style>

