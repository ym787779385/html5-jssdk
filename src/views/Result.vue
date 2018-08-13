<template>
  <div class="result">
    <div>

    </div>
    <div>
      <p>{{resultList[resultId].conts}}</p>
    </div>
    <p>{{msg}}</p>
    <img src="" alt="">
    <div>

    </div>
   
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator'
  
  interface resultItem{
    score: number,
    conts: string,
  }

  @Component({})

  export default class Result extends Vue{
    private resultId: number = 0;
    private msg: string = '套路是我学的，但希望你过得好是认真的，希望你未来的每一天都活成幸福的样子。'
    private resultList: Array<resultItem> =[
      {
        score: 5,
        conts: '回国发展，大好前程，创业风头，等着你呢。留澳洲干嘛'
      },
      {
        score: 6,
        conts: '一段奋不顾身的轰轰烈烈的爱情突然出现，令你猝不及防'
      },
      {
        score: 7,
        conts: '参加高考，金榜题名，清华北大，为科研奋斗终身'
      },
      {
        score: 8,
        conts: '参加101女团c位出道'
      },
      {
        score: 9,
        conts: '参加中国好声音，被导师选中，星光灿烂'
      },
      {
        score: 10,
        conts: '苦心作画，和毕加索比肩'
      },
      {
        score: 11,
        conts: '钢琴大师，勤奋的你不断在国际讲台上获奖'
      },
       {
        score: 12,
        conts: '起来去搬砖了，兄弟'
      },
      {
        score: 13,
        conts: '凭借对服装的独特审美，一跃巴黎时装周风云人物'
      },
      {
        score: 14,
        conts: '凭借风趣幽默的 主持方式以及高超的游戏技巧，成为千万级别的知名主播'
      },
      {
        score: 15,
        conts: '你忘了你家里有矿了嘛，你的未来从出生就已经知道了~~'
      },
    ]

    mounted() {
      var score = this.$store.state.score;  
      console.log(score+'aaaa')  
      this.resultList.forEach( (value,index,array) =>{
        // array[index].score === score;
      if(array[index].score === score)
        this.resultId = index;
      });
       console.log(this.resultId+'resulr') 
     
    }
  }

</script>

<style lang='less'>
.result{
  width: 100vw;
  height: 100vh;
  background-color: #ffd700;
}

</style>
