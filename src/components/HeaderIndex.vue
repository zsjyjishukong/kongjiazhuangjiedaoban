<template>
  <div>
    <div id="header">
      <div id="img"><img src = "../../static/img/logoIndex.png"></div>
      <div id="title">欢迎 <span id="username">{{this.$store.state.username}}</span><span id="date">今天是&nbsp;{{date}} &nbsp; {{weekday}}</span>   </div>
      <div id="ico"><span id="gotoindex" @click="gotoindex" title="主页"><img class="ico" src="../../static/img/index.png"> </span><span id="exit" title="退出登陆" @click="exit"><img class="ico" src="../../static/img/exit.png"/> </span> </div>
    </div>
    <div id="below">
      <div @click="selectHuji" class="headerIndex_1">户口查询</div>
      <div @click="addUserDisplayChange" class="headerIndex_1">添加新户</div>
      <div @click="importUserDisplayChange" class="headerIndex_1">批量导入</div>
      <div id="fatherExportType" class="headerIndex_1">
        批量导出
        <div id="exportType">
          <a href="http://175.6.73.209:8081/back/downDEx" target="_blank"><div>导出全部户籍</div></a>
          <a href="http://175.6.73.209:8081/back/downPEx" target="_blank"> <div>导出全部人口</div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HeaderIndex',
  data () {
    return {
      exitURL: 'http://175.6.73.209:8081/back/logout',
      exportRenkouUrl: 'http://175.6.73.209:8081/back/downPEx',
      exportHujiUrl: 'http://175.6.73.209:8081/back/downDEx'
    }
  },
  methods: {
    gotoindex: function () {
      this.$emit('goToIndex')
    },
    addUserDisplayChange: function () {
      this.$emit('addUserDisplayChange')
    },
    importUserDisplayChange: function () {
      this.$emit('importUserDisplayChange')
    },
    selectHuji: function () {
      this.$emit('selectHujiOrNotMe')
    },
    exit: function () {
      let self = this
      axios.post(this.exitURL)
        .then(function () {
          self.$router.push('/login')
        })
        .catch(function () {
          alert('网络错误')
        })
    }
  },
  computed: {
    date: function () {
      let now = new Date()
      let year = now.getFullYear().toString()
      let month = (now.getMonth() + 1).toString()
      let day = now.getDate().toString()
      let date = year + '年' + month + '月' + day + '日'
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
  #header{
    background: #2e6f95;
    height: 55px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  #below{
    background: #0469b7;
    height: 40px;
    border-top: white solid 1px;
    color: white;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .headerIndex_1{
    float: left;
    text-align: left;
    height: 38px;
    line-height: 40px;
    margin: 0 5px;
    padding: 0px 10px;
  }
  #below div:hover{
    background: white;
    color: #2e6f95;
    cursor: pointer;
  }
  #img{
    float: left;
  }
  img{
    margin: 10px 40px;
    height: 40px;
  }
  #title{
    float: left;
    color: #f2f3f7;
    line-height: 60px;
    margin-left: 200px;
  }
  #username{
    margin: 0 20px 0 3px;
    vertical-align:middle
  }
  .ico{
    height: 35px;
    cursor: pointer;
  }
  #ico{
    float: right;
    height: 35px;
  }
  #fatherExportType {
    position: relative;
  }
  #fatherExportType:hover  #exportType{
    display: block;
  }
  #exportType {
    display: none;
    width: 100%;
    height: 80px;
    left: 0;
    z-index: 3;
    position: absolute;
    background: white;
    border: 1px solid #ccc;
  }
  #exportType a{
     text-decoration:none;
     color: #2e6f95;
  }
  #exportType a:hover{
    background: #2e6f95;
    color: #ffffff;
  }
  #exportType div {
    text-align: center;
    width: 100%;
    height: 38px;
    line-height: 38px;
    padding: 0;
    font-size: 10px;
  }

  #exportType  div:hover{
    background: #2e6f95;
    color: #fff;
  }
</style>
