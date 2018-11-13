<template>
<div id="all">
  <EditHuji v-if="editHujiShowOrNot" v-on:editHujiShowOrNot="editHujiShowOrNotMe" v-on:select="select"
            v-bind:editHujiDetail="editHujiDetail" :key="editHujiDetail.domicileId"></EditHuji>
  <EditPeople v-if="editPeopleShowOrNot" v-on:editPeopleShowOrNot="editPeopleShowOrNotMe" v-on:select="select"
              v-bind:editPeopleDetail="editPeopleDetail" :key="editPeopleDetail.people.peopleId"></EditPeople>
  <div id="select_manager">
    <div id="username">当前用户:&nbsp;{{username}}</div>
    <div id="userNum">当前用户下人口数：</div>
    <div id="userNumber">{{userNum}}</div>
  </div>
  <div id="select_all">
    <div id="select_title">
      <img src="../../static/img/jiansuo.png" height="20px" style='vertical-align:middle;margin-bottom: 2px;'> 高级检索
    </div>
    <div id="select_body">
      <div  id="select_huji" v-bind:style="isHujiStyle" @click="isHuJiMe">
        户籍查询
      </div>
      <div id="select_renkou" :style="isPeopleStyle" @click="notHuJiMe">
        人口查询
      </div>
      <table>
        <tr>
          <td>名称</td>
          <td>关系</td>
          <td>内容</td>
          <td></td>
        </tr>
        <SelectAddMenus v-on:plus="plus" v-on:dup="dup" v-for="item in selectNum" :key="item" v-bind:num="item"
                        ref="selectAddMenus"></SelectAddMenus>
      </table>
      <br>
      <button @click="select">检索</button>
      <button v-show="downloadShowOrNot" @click="download">下载</button>
    </div>
  </div>
  <div id="select_result_all">
    <table id="select_result_table">
      <tr v-if="isHuJiSelect && selectTableTitle">
        <th colspan="2">操作</th>
        <th style="width:130px">户籍码</th>
        <th style="width:130px">是否低保</th>
        <th style="width:130px">是否贫困</th>
        <th style="width:130px">汽车数量</th>
        <th style="width:130px">联系方式</th>
        <th style="width:130px">现居住地</th>
      </tr>
      <tr v-if="(!isHuJiSelect) && selectTableTitle">
        <th colspan="2">操作</th>
        <th style="width:130px">姓名</th>
        <th style="width:130px">性别</th>
        <th style="width:130px">身份证号</th>
        <th style="width:130px">与户主关系</th>
        <th style="width:130px">文化水平</th>
        <th style="width:130px">户籍地址</th>
      </tr>
      <tr v-if="isHuJiSelect && selectTableTitle" v-for="(index, item) of selectList" v-bind:key="item" >
        <td @click="editHujiShowOrNotMe(index)" style="width: 40px"><img src="../../static/img/edit.png" height="20px"/> </td>
        <td @click="delHuji(index.domicileId)" style="width: 40px"><img src="../../static/img/del.png" height="20px"/> </td>
        <td>{{index.domicileCode}}</td>
        <td>{{index.isSecurity ? '是' : '否'}}</td>
        <td>{{index.isTrouble ? '是' : '否'}}</td>
        <td>{{index.carCount + '辆'}}</td>
        <td>{{index.phone}}</td>
        <td>{{index.nowPlace}}</td>
      </tr>
      <tr v-if="(!isHuJiSelect) && selectTableTitle" v-for="(index, item) of selectList" v-bind:key="item">
        <td @click="editPeopleShowOrNotMe(index)" style="width: 40px"><img src="../../static/img/edit.png" height="20px"/> </td>
        <td @click="delPeople(index.people.peopleId)" style="width: 40px"><img src="../../static/img/del.png" height="20px"/> </td>
        <td>{{index.people.peopleName}}</td>
        <td>{{index.people.sex ? '男' : '女'}}</td>
        <td>{{index.people.cardId}}</td>
        <td>{{index.people.relation}}</td>
        <td>{{index.people.culture}}</td>
        <td>{{index.people.domicileLocation}}</td>
      </tr>
    </table>
    <div id="pageFather">
      <div id="page">
            <div class="pageNum" v-for="item in pageAllNum" :key="item"
                 :style="{color:(item === pageNum ? '#000': '#2e6f95'), border:(item === pageNum ? '1px solid #d5dbe7' : '1px solid #2e6f95'), cursor:(item === pageNum ? 'default' : 'pointer')}"
                 @click="changePage(item)">{{item}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SelectAddMenus from './SelectAddMenus'
import EditHuji from './EditHuji'
import EditPeople from './EditPeople'
import axios from 'axios'

export default {
  name: 'Select',
  props: {
    'selectList': {
      type: Array
    },
    'pageAllNum': {},
    'token': ''
  },
  components: {
    EditPeople,
    SelectAddMenus,
    EditHuji
  },
  methods: {
    plus: function () {
      if (this.selectNum === 5) {
        alert('添加条件达到上限')
      } else {
        this.selectNum += 1
      }
    },
    dup: function () {
      if (this.selectNum === 1) {
      } else {
        this.selectNum = this.selectNum - 1
      }
    },
    isHuJiMe: function () {
      this.isHuJi = true
    },
    notHuJiMe: function () {
      this.isHuJi = false
    },
    select: function () {
      let n = 0
      let arr
      for (n; n < this.selectNum; n++) {
        if (this.$refs.selectAddMenus[n].mingCheng === '' && this.$refs.selectAddMenus[n].relation === '' && this.$refs.selectAddMenus[n].content === '') {

        } else if (this.$refs.selectAddMenus[n].mingCheng === '' || this.$refs.selectAddMenus[n].relation === '' || this.$refs.selectAddMenus[n].content === '') {
          alert('请补全信息！')
          return false
        }
        this.isHuJiSelect = this.isHuJi
        this.selectTableTitle = true
        arr = {
          'field': this.$refs.selectAddMenus[n].mingCheng,
          'relation': this.$refs.selectAddMenus[n].relation,
          'value': this.$refs.selectAddMenus[n].content
        }
        this.queryBoList = []
        this.queryBoList.push(arr)
        if (this.$refs.selectAddMenus[n].mingCheng === '' && this.$refs.selectAddMenus[n].relation === '' && this.$refs.selectAddMenus[n].content === '') {
          this.queryBoList = []
        }
      }
      this.$emit('selectOk', JSON.stringify(this.queryBoList), this.isHuJi)
    },
    editHujiShowOrNotMe: function (datas) {
      if (this.editHujiShowOrNot === false) {
        this.editHujiDetail = datas
      }
      this.editHujiShowOrNot = !this.editHujiShowOrNot
    },
    delHuji: function (id) {
      let self = this
      let request = new URLSearchParams()
      request.append('domicileId', id)
      axios.post(
        'http://175.6.73.209:8081/back/delDomicile', request
      )
        .then(function (response) {
          if (response.data.status === 0) {
            alert('删除成功！')
            self.select()
          } else if (response.data.status === 10) {
            alert(response.data.msg)
            self.$router.push('/login')
          } else {
            alert(response.data.msg)
          }
        })
        .catch(function (error) {
          alert(error)
        })
    },
    editPeopleShowOrNotMe: function (datas) {
      if (this.editPeopleShowOrNot === false) {
        this.editPeopleDetail = datas
      }
      this.editPeopleShowOrNot = !this.editPeopleShowOrNot
    },
    delPeople: function (id) {
      let self = this
      let request = new URLSearchParams()
      request.append('peopleId', id)
      axios.post(
        'http://175.6.73.209:8081/back/delPeople',
        request
      )
        .then(function (response) {
          if (response.data.status === 0) {
            alert('删除成功')
            self.select()
          } else if (response.data.status === 10) {
            alert(response.data.msg)
            self.$router.push('/login')
          } else {
            alert(response.data.msg)
          }
        })
        .catch(function (error) {
          alert(error)
        })
    },
    changePage: function (page) {
      this.pageNum = page
      this.$emit('selectOk', JSON.stringify(this.queryBoList), this.isHuJi, page)
    },
    download: function () {
      if (this.isHuJi) {
        if (this.hujiToken) {
          window.open('http://175.6.73.209:8081/back/downDEx?token=' + this.hujiToken)
        } else {
          alert('请查询后再点击本按钮')
        }
      } else {
        if (this.peopleToken) {
          window.open('http://175.6.73.209:8081/back/downPEx?token=' + this.peopleToken)
        } else {
          alert('请查询后再点击本按钮')
        }
      }
    }
  },
  computed: {
    isHujiStyle: function () {
      if (this.isHuJi) {
        return {
          color: '#0469b7'
        }
      }
    },
    isPeopleStyle: function () {
      if (!this.isHuJi) {
        return {
          color: '#0469b7'
        }
      }
    }
  },
  watch: {
    token: function () {
      if (this.isHuJi) {
        if (!this.token) {
          this.downloadShowOrNot = false
        } else {
          this.hujiToken = this.token
          this.downloadShowOrNot = true
        }
      } else {
        if (!this.token) {
          this.downloadShowOrNot = false
        } else {
          this.peopleToken = this.token
          this.downloadShowOrNot = true
        }
      }
    },
    isHuJi: function () {
      if (this.isHuJi) {
        if (this.hujiToken) {
          this.downloadShowOrNot = true
        } else {
          this.downloadShowOrNot = false
        }
      } else {
        if (this.peopleToken) {
          this.downloadShowOrNot = true
        } else {
          this.downloadShowOrNot = false
        }
      }
    }
  },
  data () {
    return {
      username: this.$store.state.username,
      userNum: 10000,
      selectNum: 1,
      isHuJi: true,
      queryBoList: [],
      editHujiShowOrNot: false,
      editHujiDetail: [],
      isHuJiSelect: true,
      selectTableTitle: false,
      editPeopleShowOrNot: false,
      editPeopleDetail: [],
      pageNum: 1,
      hujiToken: '',
      peopleToken: '',
      downloadShowOrNot: false
    }
  },
  mounted: function () {
    let url = 'http://175.6.73.209:8081/back/getCountByUploadId'
    let self = this
    axios.get(url)
      .then(function (response) {
        if (response.data.status === 0) {
          self.userNum = response.data.data
        } else if (response.data.status === 10) {
          alert(response.data)
          self.$emit('/login')
        } else {
          alert(response.data)
        }
      })
  }
}
</script>

<style scoped>
  #select_manager{
    float: left;
    margin-left: 20px;
    border: 1px solid grey;
    height: 220px;
    width: 200px;
    border-radius: 5px;
    text-align: center;
    letter-spacing: 3px;
    padding: 5px;
    margin-top: 25px;
  }
  #username{
    padding-bottom: 2px;
    border-bottom: 1px solid grey;
  }
  #userNum{
    margin: 5px 0;
  }
  #userNumber{
    margin-top: 20%;
    font-size: 50px;
    color: #2e6f95;
  }
  #select_all{
  margin: 2px auto;
  border: #2e6f95 solid 1px;
  width: 750px;
  height: 280px;
  border-radius: 5px;
}
  #select_title{
    padding: 2px 10px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px #2e6f95 solid;
    color: #fff;
    background: #33618b;
    letter-spacing: 3px;
  }
  #select_body{
    padding:  10px 20px;
    text-align: center;
  }
  #select_body table{
    width: 600px;
    height: 170px;
    margin: auto;
  }
  #select_body table td{
    height: 30px;
  }
  #select_huji{
    position: relative;
    float: left;
    margin-left: -20px;
    margin-top: -10px;
    width: 30px;
    height: 46%;
    border-right: 1px solid #2e6f95;
    border-bottom: 1px solid #2e6f95;
    writing-mode: vertical-lr;
    text-align: center;
    line-height: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    color: #0c4d73;
  }
  #select_huji:hover{
    background: #2e6f95;
    color: white;
  }
  #select_renkou{
    position: relative;
    float: left;
    margin-left: -31px;
    margin-top: 15.1%;
    width: 30px;
    height: 49.5%;
    border-radius: 0 0 0 5px;
    border-right: 1px solid grey;
    writing-mode: vertical-lr;
    text-align: center;
    line-height: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    color: #0c4d73;
  }
  #select_renkou:hover{
    background: #2e6f95;
    color: white;
  }
  #select_body table{
    margin: auto;
  }
  #select_body table td{
    width: 100px;
    text-align: center;
  }
  #select_body img{
    cursor: pointer;
  }
  #select_body button{
    background: #fe9850;
    border: 6px solid #fe9850;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  #select_result_all{
    width: 100%;
    text-align: center;
    border-top: 1px solid #2e6f95;
    background: #d5dbe7;
    margin: 30px 0;
    padding: 10px 0;
  }
  #select_result_table{
    background: #fff;
    box-shadow:0px 0px 5px 1px #b3a9c4;
    margin: 10px auto;
    border-radius: 3px;
  }
  #select_result_table tr th{
    border: 1px solid #ccc;
  }
  #select_result_table tr td{
    font-size: 15px;
  }
  #select_result_table tr td img{
    cursor: pointer;
  }
  #pageFather{
    text-align: center;
  }
  #page{
    overflow:hidden;
    display: inline-block;
  }
  .pageNum{
    border: 1px solid #ccc;
    width: 22px;
    height:20px;
    cursor: pointer;
    margin: 0 5px;
    color: #2e6f95;
    float: left;
    left: 0;
    right: 0;
    user-select: none;
  }
  #page .pageNum:hover{
    border: 1px solid #2e6f95;
    background: #4f8fb7;
    color: #fff;
  }
</style>
