<template>
  <div id="all">
    <div id="mode">
      更改户籍信息
      <img @click="close" src="../../static/img/close.png" title="关闭"/>
    </div>
    <div id="editHujiBody">
      <div id="family">
        <div class="title">家庭信息 &nbsp;  <img width="70%" src="../../static/img/home.png"></div>
        <div class="content">
          <table>
            <tr>
              <td>户籍码：</td>
              <td><input type="text" v-model="domicileCode"/></td>
              <td>汽车数量：</td>
              <td><input type="number" v-model="carCount"/></td>
              <td>汽车类型：</td>
              <td><input type="text" v-model="carCategory" /></td>
              <td>养殖情况：</td>
              <td><input type="text" v-model="animal" /></td>
            </tr>
            <tr>
              <td>互联网接入情况：</td>
              <td>
                <input type="checkbox" v-model="internet"/>
                <span v-if="internet">已接入互联网</span>
                <span v-else>未接入互联网</span>
              </td>
              <td colspan="2">困难户:<input type="checkbox" v-model="isTrouble"/></td>
              <td colspan="2">低保户:<input type="checkbox" v-model="isSecurity" /></td>
              <td v-show="isSecurity">低保类型:</td>
              <td v-show="isSecurity"><input type="text" v-model="securityCategory" /></td>
            </tr>
            <tr>
              <td>其他</td>
              <td colspan="8"><textarea rows="2" v-model="others"></textarea></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div id="button_submit_huji" @click="submitUpdate"> <button>提交</button></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditHuji',
  props: ['editHujiDetail'],
  data () {
    return {
      isTrouble: this.editHujiDetail.isTrouble, // 是否困难
      isSecurity: this.editHujiDetail.isSecurity, // 是否低保
      securityCategory: this.editHujiDetail.securityCategory, // 低保类别
      animal: this.editHujiDetail.animal, // 养殖情况
      carCount: this.editHujiDetail.carCount,
      carCategory: this.editHujiDetail.carCategory,
      others: this.editHujiDetail.others,
      internet: this.editHujiDetail.internet,
      domicileCode: this.editHujiDetail.domicileCode, // 户籍码
      oldDomicileCode: this.editHujiDetail.domicileCode,
      indexToRefersh: ''
    }
  },
  mounted: function () {
    this.indexToRefersh = this.editHujiDetail.nowPlace
  },
  methods: {
    close: function () {
      this.$emit('editHujiShowOrNot')
    },
    submitUpdate: function () {
      let self = this
      let host = 'http://175.6.73.209:8081/'
      let url = host + 'back/updateDomicile'
      let request = new URLSearchParams()
      request.append('nowPlace', this.nowPlace)
      request.append('phone', this.phone)
      request.append('isTrouble', this.isTrouble ? 1 : 0)
      request.append('isSecurity', this.isSecurity ? 1 : 0)
      request.append('securityCategory', this.securityCategory)
      request.append('animal', this.animal)
      request.append('carCount', this.carCount)
      request.append('carCategory', this.carCategory)
      request.append('others', this.others)
      request.append('internet', this.internet ? 1 : 0)
      request.append('domicileCode', this.domicileCode)
      request.append('oldDomicileCode', this.oldDomicileCode)
      axios.post(url, request)
        .then(function (response) {
          if (response.data.status === 0) {
            alert('更改成功！')
            self.$emit('editHujiShowOrNot')
            self.$emit('select')
          } else if (response.data.status === 10) {
            alert(response.data.msg)
            self.$router.push('/login')
          } else if (response.data.status === 1) {
            alert(response.data.msg)
          }
        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
}
</script>

<style scoped>
  #all{
    position: fixed;
    left: 0;
    right: 0;
    margin: 100px auto;
    height: 230px;
    width: 95%;
    border-radius: 5px;
    border:1px #336699 solid ;
    overflow: auto;
    background: white;
    z-index: 2;
    box-shadow: 2px 2px 20px black ;
  }
  #mode{
    background: #235673;
    border-radius:5px 5px 0px 0px ;
    color: #fff;
    padding: 3px 8px;
    font-size: small;
    position: fixed;
    width: 100%;
  }
  #mode img{
    width: 14px;
    float: right;
    margin-right: 100px;
    cursor: pointer;
  }
  #editHujiBody{
    margin-top: 20px;
    padding: 5px;
    border: 1px solid #ccc;
  }
  #button_submit_huji{
    text-align: center;
    margin-top: 2px;
  }
  #button_submit_huji button{
    background: #fe9850;
    border: 6px solid #fe9850;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  #family{
    padding-bottom: 10px;
    overflow:hidden;
    zoom:1;
  }
  .title{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 2%;
    float: left;
  }
  .content{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width:85%;
    float: left;
    padding: 5px;
  }
  td{
    height: 40px;
    text-align: center;
  }
  textarea{
    width: 100%;
  }
</style>
