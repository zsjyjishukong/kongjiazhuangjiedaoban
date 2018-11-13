<template>
    <div id="all">
      <div id="mode">
        添加新户
      <img @click="close" src="../../static/img/close.png" title="关闭"/>
      </div>
      <div id="body">
        <div id="family">
          <div class="title">家庭信息 &nbsp;<img width="70%" src="../../static/img/home.png"></div>
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
                <td>
                <td>互联网接入情况：</td>
                <td>
                  <input type="checkbox" v-model="internet"/>
                  <span v-if="internet">已接入互联网</span>
                  <span v-else>未接入互联网</span>
                </td>
              </tr>
              <tr>
                <td colspan="3">困难户:<input type="checkbox" v-model="isTrouble"/></td>
                <td colspan="3">低保户:<input type="checkbox" v-model="isSecurity" /></td>
                <td v-show="isSecurity">低保类型:</td>
                <td v-show="isSecurity"><input type="number" v-model="securityCategory" placeholder="请填写数字"/></td>
              </tr>
              <tr>
                <td>其他</td>
                <td colspan="10"><textarea rows="2" v-model="others"></textarea></td>
              </tr>
            </table>
          </div>
        </div>
        <div id="people" >
          <div class="title">人员信息 <img  width="70%" src="../../static/img/user.png"> </div>
          <div class="content" id="people-content"><people v-for = "n in peopleNum" :key = "n" ref = "people" :nth = "n"></people></div>
        </div>
        <div id="button">
          <button id="addSameUser" @click="addSameUser">添加同户</button>
          <button id="reduceSameUser" @click="reduceSameUser" v-show="this.peopleNum>1">减少同户</button>
          <button id="submit" @click="submit">确认添加</button>
        </div>
      </div>
    </div>
</template>

<script>
import people from './people'
import axios from 'axios'
export default {
  name: 'add',
  components: {
    people
  },
  data () {
    return {
      url: 'http://175.6.73.209:8081/back/people/addPeople',
      peopleNum: 1,
      // 户籍表
      isTrouble: 0, // 是否困难
      isSecurity: 0, // 是否低保
      securityCategory: '', // 低保类别
      animal: '', // 养殖情况
      carCount: 0,
      carCategory: '',
      others: '',
      internet: 1,
      domicileCode: '' // 户籍码
    }
  },
  methods: {
    addSameUser: function () {
      this.peopleNum = this.peopleNum + 1
    },
    reduceSameUser: function () {
      if (this.peopleNum > 1) {
        this.peopleNum = this.peopleNum - 1
      } else {
        alert('至少添加一位人员的信息')
      }
    },
    close: function () {
      this.$emit('close')
    },
    submit: function () {
      let self = this
      let peopleAllInfoList = []
      let list = this.$refs['people']
      for (let i in list) {
        let request = {
          people: {
            cardId: list[i]['cardId'],
            peopleName: list[i]['peopleName'],
            nowSpace: list[i]['nowSpace'], // 现居住地
            phone: list[i]['phone'], //
            sex: list[i]['sex'],
            relation: list[i]['relation'], // 户主关系
            birthday: list[i]['birthday'],
            peopleNational: list[i]['peopleNational'], // 民族
            culture: list[i]['culture'], // 文化成都
            political: list[i]['political'], // 政治面貌
            organization: list[i]['organization'], // 组织所在地
            peopleWork: list[i]['peopleWork'], // 工作单位
            domicileLocation: list[i]['domicileLocation'], // 户籍所在地
            earning: list[i]['earning'], // 年收入
            isWidows: list[i]['isWidows'], // 孤寡
            religion: list[i]['religion'], // 宗教
            residence: list[i]['residence'] // 户口性质
          },
          army: {
            armyCategory: list[i]['armyCategory'], // 涉军情况
            inTime: list[i]['inTime'], // 入伍时间
            outTime: list[i]['outTime'], //
            forces: list[i]['forces'], // 兵役部队T
            place: list[i]['place'] // 安置单位
          },
          domicile: {
            isTrouble: (self.isTrouble ? 1 : 0),
            isSecurity: self.isSecurity ? 1 : 0,
            securityCategory: self.securityCategory,
            animal: self.animal,
            carCount: self.carCount,
            carCategory: self.carCategory,
            others: self.others,
            internet: self.internet ? 1 : 0,
            domicileCode: self.domicileCode
          },
          health: {
            isFlowPeople: list[i]['isFlowPeople'], // 是否流动人口
            marriage: list[i]['marriage'], // 婚姻状况
            marryTime: list[i]['marryTime'],
            birthCard: list[i]['birthCard'], // 生育证号
            oneChildTime: list[i]['oneChildTime'], // 独生子女证书领取时间
            oneChildCard: list[i]['oneChildCard'], // 独生子女证号
            address: list[i]['address'], // 流出入地址
            healthTime: list[i]['healthTime'], // 流出入时间
            blood: list[i]['blood'], // 血型
            healthHistory: list[i]['healthHistory'], // 病史
            homeHistory: list[i]['homeHistory'], // 家族史
            oldHistory: list[i]['oldHistory'], // 既往史
            medicine: list[i]['medicine'], // 过敏史
            isFuShe: list[i]['isFuShe'] // 有无接触辐射
          },
          history: {
            isCommunityRemedy: list[i]['isCommunityRemedy'], // 社区矫正
            remedyTime: list[i]['remedyTime'], // 矫正时间
            isRelease: list[i]['isRelease'], // 刑释解教
            helpTime: list[i]['helpTime'], // 帮教时间
            isFaLun: list[i]['isFaLun'],
            isTurn: list[i]['isTurn'], // 是否转化
            turnTime: list[i]['turnTime'],
            cultCategory: list[i]['cultCategory'], // 其他邪教
            isDrug: list[i]['isDrug'] // 是否吸毒
          },
          house: {
            houseProper: list[i]['houseProper'], // 房屋性质
            houseCount: list[i]['houseCount'],
            houseSize: list[i]['houseSize'],
            houseOwner: list[i]['houseOwner'], // int
            useProper: list[i]['useProper'], // 使用性质
            houseTime: list[i]['houseTime'], // 租房时间
            isHouseProtect: list[i]['isHouseProtect'], // 是否保障性住房
            houseCategory: list[i]['houseCategory'], // 保障性住房类别
            good: list[i]['good'] // 是否享有减免，0-否 1-是
          },
          job: {
            isJob: list[i]['isJob'],
            jobName: list[i]['jobName'],
            reason: list[i]['reason'], // 下岗或失业
            reJob: list[i]['reJob'], // 再就业
            jobIntention: list[i]['jobIntention'] // 求职意向
          },
          security: {
            joinSecurityCategory: list[i]['joinSecurityCategory'], // 医保类型
            pensionCategory: list[i]['pensionCategory']// 养老保险类型
          }
        }
        peopleAllInfoList.push(request)
      }
      let peopleInfo = new URLSearchParams()
      peopleInfo.append('peopleAllInfoList', JSON.stringify(peopleAllInfoList))
      axios.post(this.url, peopleInfo)
        .then(function (response) {
          if (response.data.status === 0) {
            alert('新增成功！')
            location.reload()
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
    margin: 10px auto;
    height: 81%;
    width: 95%;
    border-radius: 5px;
    border:1px #336699 solid ;
    overflow: auto;
    background: white;
    z-index: 2;
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
  #body{
    margin-top: 20px;
    padding: 8px;
  }
  #family{
    padding-bottom: 10px;
    border-bottom: 2px #ccc solid;
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
    width:89%;
    float: left;
    padding: 5px;
  }
  #people-content{
    width: 98%;
  }
  td{
    height: 40px;
    text-align: center;
  }
  textarea{
    width: 100%;
  }
  #button{
    text-align: center;
  }
  button{
    text-align: center;
    margin: 5px 10px;
    width: 100px;
    height: 30px;
    border: 3px solid #fe9850;
    border-radius: 2px;
    background: #ff9300;
    color: #fff;
    cursor: pointer;
  }
  select{
    width: 100%;
  }
</style>
