<template>
  <div id="head">
    <br>
    <header>
      <span class="time">{{date}}</span> <span class="time">{{weekday}} </span>
    </header>
    <img src="../../static/img/logo.png"/>
    <div id="hr">
      &nbsp;
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header.vue',
  data () {
    return {

    }
  },
  computed: {
    date: function () {
      var now = new Date()
      var year = now.getFullYear().toString()
      var month = (now.getMonth() + 1).toString()
      var day = now.getDate().toString()
      var date = year + '年' + month + '月' + day + '日'
      return date
    },
    weekday: function () {
      let now = new Date()
      let weekday = now.getDay()
      switch (weekday) {
        case 0:
          weekday = '星期日'
          break
        case 1:
          weekday = '星期一'
          break
        case 2:
          weekday = '星期二'
          break
        case 3:
          weekday = '星期三'
          break
        case 4:
          weekday = '星期四'
          break
        case 5:
          weekday = '星期五'
          break
        case 6:
          weekday = '星期六'
          break
      }
      return weekday
    }
  }
}
</script>

<style scoped>
  header{
    text-align: left;
    margin-left: 14%;
    margin-top: 0px;
  }
  .time{
    margin: 50px 20px 0 50px ;
    font-size: small;
  }
  img{
    margin-top:20px;
    margin-left: 15%;
    height: 50px;
  }
  #head{
    background: linear-gradient(#abeeff, #ffffff);
  }
  #hr{
    margin-top:20px;
    background: #00589c;
  }
</style>
