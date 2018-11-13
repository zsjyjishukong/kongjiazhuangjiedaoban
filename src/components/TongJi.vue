<template>
<div id="all">
  <div id="data">
    <div class="kuang" id="firstDiv">
    <div class="firstRow">管理员数量</div>
    <div class="secondRow">{{this.adminNum === ''? 'N/A' : this.adminNum}}</div>
    </div>
    <div class="kuang" id="secondDiv">
      <div class="firstRow">用户总数量</div>
      <div class="secondRow">{{this.userNum === '' ? 'N/A' : this.userNum}}</div>
    </div>
  </div>
  <div id="img">
    <div style="position: relative;float: left;left: 50%;">
      <div id="userTime">
      </div>
      <div id="userSpace">
      </div></div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TongJi',
  data () {
    return {
      userTimeX: [],
      userTimeY: [],
      userSpaceX: [],
      userSpaceY: [],
      userNum: '',
      adminNum: ''
    }
  },
  mounted: function () {
    let url = 'http://175.6.73.209:8081/back/init'
    let self = this
    axios.get(url)
      .then(function (response) {
        if (response.data.status === 0) {
          self.userNum = response.data.data.peopleCount
          self.adminNum = response.data.data.adminCount
          for (let i in response.data.data.monthMapCount) {
            self.userTimeX.push(i)
            self.userTimeY.push(response.data.data.monthMapCount[i])
          }
          for (let i in response.data.data.adminMapCount) {
            self.userSpaceX.push(i)
            self.userSpaceY.push(response.data.data.adminMapCount[i])
          }
          self.drawLine()
        } else if (response.data.status === 10) {
          alert(response.data.msg)
          self.$router.push('/login')
        } else {
          alert(response.data.msg)
        }
      })
      .catch(function (error) {
        alert(error)
        // self.$router.push('login')
      })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let userTime = this.$echarts.init(document.getElementById('userTime'))
      // 绘制图表
      userTime.setOption({
        title: {
          text: '最近六个月内新增数量',
          left: 'center'
        },
        tooltip: {},
        legend: {
          data: ['数量'],
          align: 'left',
          x: 0,
          y: 20
        },
        xAxis: {
          data: this.userTimeX
        },
        yAxis: {},
        series: [{
          name: '数量',
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#3379b7'
            }
          },
          data: this.userTimeY
        }]
      })
      // 基于准备好的dom，初始化echarts实例
      let userSpace = this.$echarts.init(document.getElementById('userSpace'))
      // 绘制图表
      userSpace.setOption({
        title: {
          text: '用户地区分布',
          left: 'center'
        },
        tooltip: {},
        legend: {
          data: ['数量'],
          align: 'right',
          x: 700,
          y: 20
        },
        xAxis: {
          data: this.userSpaceX,
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        yAxis: {},
        series: [{
          name: '数量',
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#3379b7'
            }
          },
          data: this.userSpaceY
        }]
      })
    }
  }
}
</script>

<style scoped>
#all{
  text-align: center;
  margin: 40px auto ;
  height: 500px;
  overflow-x: hidden;
  overflow-y: hidden;
}
#data{
  height: 150px;
  position: relative;
  float: left;
  left: 50%;
}
.kuang{
  position: relative;
  float: left;
  left: -50%;
  width: 350px;
  height: 100px;
  margin: 0 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 30px;
  color: #fff;
}
.firstRow{
  border-bottom: 1px solid #fff;
  text-align: left;
  font-size: 25px;
  padding: 5px 15px;
}
.secondRow{
  padding: 5px;
  line-height: 50px;
}
  #firstDiv{
    background: #3379b7;
  }
  #secondDiv{
    background: #2f4056;
  }
  #img{
    text-align: center;
  }
  #userTime{
    position: relative;
    float: left;
    left: -50%;
    height: 350px;
    width: 500px;
    margin: 0 30px;
  }
  #userSpace{
    position: relative;
    float: left;
    left: -50%;
    width: 700px;
    height: 350px;
  }
</style>
