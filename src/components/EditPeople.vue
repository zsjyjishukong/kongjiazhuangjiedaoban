<template>
  <div id="all">
    <div id="title">
      更改人口信息
      <img @click="close" src="../../static/img/close.png" title="关闭"/>
    </div>
    <div id="editPeopleBody">
      <table width="100%" id="base" class="borderBottom">
        <tr>
          <td>姓名：</td>
          <td><input type="text" v-model="datalist.peopleName"/></td>
          <td>性别:</td>
          <td><input type="radio" name="sex" v-model="datalist.sex" value="1"/>男&nbsp;&nbsp;<input type="radio" name="sex" value="0"/>女 </td>
          <td>户口性质</td>
          <td>
            <select v-model="datalist.residence" >
              <option value="未落常住户口">未落常住户口</option>
              <option value="非农业家庭户">非农业家庭户</option>
              <option value="农业家庭户">农业家庭户</option>
              <option value="非农业集体户">非农业集体户</option>
              <option value="农业集体户">农业集体户</option>
              <option value="自理口粮户">自理口粮户</option>
              <option value="寄住户口">寄住户口</option>
              <option value="暂住户口">暂住户口</option>
              <option value="蓝印户口">蓝印户口</option>
              <option value="其他户口">其他户口</option>
              <option value="混合户">混合户</option>
            </select>
          </td>
          <td>与户主关系:</td>
          <td>
            <select v-model="datalist.relation" id="relation">
              <option value="户主">户主</option>
              <option value="配偶">配偶</option>
              <option value="子女">子女</option>
              <option value="父母">父母</option>
              <option value="岳父母或公婆">岳父母或公婆</option>
              <option value="祖父母">祖父母</option>
              <option value="媳婿">媳婿</option>
              <option value="孙子女">孙子女</option>
              <option value="兄弟姐妹">兄弟姐妹</option>
              <option value="其他">其他</option>
            </select>
          </td>
          <td>出生年月:</td>
          <td><input type="date" v-model="datalist.birthday"/></td>
        </tr>
        <tr>
          <td>民族:</td>
          <td><input type="text" v-model="datalist.peopleNational"/></td>
          <td>文化程度:</td>
          <td>
            <select v-model="datalist.culture">
              <option value="博士">博士</option>
              <option value="硕士">硕士</option>
              <option value="本科">本科</option>
              <option value="大专">大专</option>
              <option value="中专">中专</option>
              <option value="高中">高中</option>
              <option value="初中">初中</option>
              <option value="小学">小学</option>
              <option value="其他">其他</option>
            </select>
          </td>
          <td>政治面貌</td>
          <td>
            <select v-model="datalist.political">
              <option value="中国共产党党员">中国共产党党员</option>
              <option value="中国共产党预备党员">中国共产党预备党员</option>
              <option value="中国共产主义青年团团员">中国共产主义青年团团员</option>
              <option value="中国国民党革命委员会会员">中国国民党革命委员会会员</option>
              <option value="中国民主同盟盟员">中国民主同盟盟员</option>
              <option value="中国民主建国会会员">中国民主建国会会员</option>
              <option value="中国民主促进会会员">中国民主促进会会员</option>
              <option value="中国农工民主党党员">中国农工民主党党员</option>
              <option value="中国致公党党员">中国致公党党员</option>
              <option value="九三学社会员">九三学社会员</option>
              <option value="台湾民主自治同盟盟员">台湾民主自治同盟盟员</option>
              <option value="无党派民主人士">无党派民主人士</option>
              <option value="群众">群众</option>
            </select>
          </td>
          <td>组织关系所在地</td>
          <td><input v-model="datalist.organization" type="text"/></td>
          <td>现居住地：</td>
          <td><input type="text" v-model="datalist.nowSpace"/></td>
        </tr>
        <tr>
          <td>联系电话：</td>
          <td><input type="tel" v-model="datalist.phone"/></td>
          <td>身份证号</td>
          <td><input type="number" v-model="datalist.cardId"/></td>
          <td>工作单位</td>
          <td><input type="text" v-model="datalist.peopleWork"/></td>
          <td>户籍所在地</td>
          <td><input type="text" v-model="datalist.domicileLocation"/></td>
          <td>宗教信仰</td>
          <td><input type="text" v-model="datalist.religion"/></td>
        </tr>
      </table>
      <table id="economics" class="borderBottom">
        <tr>
          <td>年收入</td>
          <td><input type="number" placeholder="单位：万元" v-model="datalist.earning"/></td>
          <td>医保类型</td>
          <td><input type="text" v-model="datalist.joinSecurityCategory"/></td>
          <td>养老保险类型</td>
          <td><input type="text" v-model="datalist.pensionCategory"/></td>
          <td>是否就业</td>
          <td>
            <input type="checkbox" v-model="datalist.isJob"/>
            <span v-if="datalist.isJob">已就业</span>
            <span v-else>未就业</span>
          </td>
        </tr>
        <tr>
          <td> 职业</td>
          <td><input type="text" v-model="datalist.jobName"/></td>
          <td>下岗或失业</td>
          <td><input type="text" v-model="datalist.reason"/></td>
          <td>再就业情况</td>
          <td><input type="text" v-model="datalist.reJob"/></td>
          <td>求职意向</td>
          <td><input type="text" v-model="datalist.jobIntention"/></td>
        </tr>
      </table>
      <table id="house" class="borderBottom">
        <tr>
          <td>房屋性质</td>
          <td><input type="text" v-model="datalist.houseProper"/></td>
          <td>房屋间数</td>
          <td><input type="number" v-model="datalist.houseCount"/></td>
          <td>建筑面积</td>
          <td><input type="number" placeholder="单位:平方米" v-model="datalist.houseSize"/></td>
          <td>产权所有人</td>
          <td><input type="text" v-model="datalist.houseOwner"/></td>

        </tr>
        <tr>
          <td>使用性质</td>
          <td><input type="text" v-model="datalist.useProper"/></td>
          <td>租房时间</td>
          <td><input type="number" v-model="datalist.houseTime"/></td>
          <td>享有保障性住房</td>
          <td >
            <input type="checkbox" v-model="datalist.isHouseProtect"/>
            <span v-if="datalist.isHouseProtect">享有保障性住房</span>
            <span v-else>不享保障性住房</span>
          </td>
          <td ><span v-show="datalist.isHouseProtect">保障性住房类别</span></td>
          <td ><input type="text" v-show="datalist.isHouseProtect" v-model="datalist.houseCategory"/></td>
        </tr>
        <tr>
          <td>享有减免或房屋补贴</td>
          <td>
            <input type="checkbox" v-model="datalist.good"/>
            <span v-if="datalist.good">享有减免或补贴</span>
            <span v-else>不享减免或补贴</span>
          </td>
        </tr>
      </table>
      <table id="hygiene" class="borderBottom">
        <tr>
          <td>是否流动人口</td>
          <td>
            <input type="checkbox" v-model="datalist.isFlowPeople"/>
            <span v-if="datalist.isFlowPeople">是流动人口</span>
            <span v-else>非流动人口</span>
          </td>
          <td>婚姻状况</td>
          <td><input type="text" v-model="datalist.marriage"/></td>
          <td>结婚时间</td>
          <td><input type="date" v-model="datalist.marryTime"/></td>
          <td>生育证号</td>
          <td><input type="text" v-model="datalist.birthCard" /></td>
        </tr>
        <tr>
          <td>独生子女证领取时间</td>
          <td><input type="date" v-model="datalist.oneChildTime"/></td>
          <td>独生子女证号</td>
          <td><input type="text" v-model="datalist.oneChildCard"/></td>
          <td>流出入地址</td>
          <td><input type="text" v-model="datalist.address"/></td>
          <td>流出入时间</td>
          <td><input type="date" v-model="datalist.healthTime"/></td>
        </tr>
        <tr>
          <td>血型</td>
          <td>
            <select v-model="datalist.blood">
              <option value="A型">A型</option>
              <option value="B型">B型</option>
              <option value="O型">O型</option>
              <option value="AB型">AB型</option>
              <option value="AO型">AO型</option>
              <option value="其他">其他</option>
            </select>
          </td>
          <td>病史</td>
          <td><input type="text" v-model="datalist.healthHistory"/></td>
          <td>家族史</td>
          <td><input type="text" v-model="datalist.homeHistory"/></td>
          <td>既往史</td>
          <td><input type="text" v-model="datalist.oldHistory"/></td>
        </tr>
        <tr>
          <td>药物过敏史</td>
          <td><input type="text" v-model="datalist.medicine"/></td>
          <td>有无接触辐射</td>
          <td>
            <input type="checkbox" v-model="datalist.isFuShe"/>
            <span v-if="datalist.isFuShe">接触辐射</span>
            <span v-else>未接触辐射</span>
          </td>
        </tr>
      </table>
      <table id="crime" class="borderBottom">
        <tr>
          <td>社区矫正</td>
          <td>
            <input type="checkbox" v-model="datalist.isCommunityRemedy"/>
            <span v-if="datalist.isCommunityRemedy">参加社区矫正</span>
            <span v-else>未参加社区矫正</span>
          </td>
          <td><span v-if="datalist.isCommunityRemedy">矫正时间</span></td>
          <td><input type="date" v-model="datalist.remedyTime" v-if="datalist.isCommunityRemedy"/></td>
          <td>刑释解教</td>
          <td>
            <input type="checkbox" v-model="datalist.isRelease"/>
            <span v-if="datalist.isRelease">已刑释解教</span>
            <span v-else>未刑释解教</span>
          </td>
          <td><span>帮教时间</span></td>
          <td><input type="date" v-model="datalist.helpTime"/></td>
        </tr>
        <tr>
          <td>是否转化</td>
          <td>
            <input type="checkbox" v-model="datalist.isTurn"/>
            <span v-if="datalist.isTurn">已转化</span>
            <span v-else>未转化</span>
          </td>
          <td><span v-if="datalist.isTurn">转化时间</span></td>
          <td><input v-if="datalist.isTurn" type="date" v-model="datalist.turnTime"/></td>
          <td>是否练习法轮功</td>
          <td>
            <input type="checkbox" v-model="datalist.isFaLun"/>
            <span v-if="datalist.isFaLun">练习法轮功者</span>
            <span v-else>未练习法轮功</span>
          </td>
          <td>其他邪教种类</td>
          <td><input type="text" v-model="datalist.cultCategory"/></td>
        </tr>
        <tr>
          <td>是否吸毒</td>
          <td>
            <input type="checkbox" v-model="datalist.isDrug"/>
            <span v-if="datalist.isDrug">吸毒者</span>
            <span v-else>不吸毒</span>
          </td>
          <td>是否孤寡</td>
          <td>
            <input type="checkbox"  v-model="datalist.isWidows"/>
            <span v-if="datalist.isWidows">是孤寡</span>
            <span v-else>非孤寡</span>
          </td>
        </tr>
      </table>
      <table id="army">
        <tr>
          <td>涉军类型</td>
          <td><input type="text" v-model="datalist.armyCategory"/></td>
          <td>入伍时间</td>
          <td><input type="date" v-model="datalist.inTime"/></td>
          <td>服役部队</td>
          <td><input type="text" v-model="datalist.forces"/></td>
          <td>退伍时间</td>
          <td><input type="date" v-model="datalist.outTime"/></td>
          <td>安置单位</td>
          <td><input type="text" v-model="datalist.place"/></td>
        </tr>
      </table>
    </div>
    <div id="button_submit">
      <button @click="buttonSubmit">提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditPeople',
  props: [ 'editPeopleDetail' ],
  data () {
    return {
      datalist: {
        // 基本表
        peopleName: this.editPeopleDetail.people.peopleName,
        sex: this.editPeopleDetail.people.sex,
        relation: this.editPeopleDetail.people.relation, // 户主关系
        birthday: (this.editPeopleDetail.people.birthday === null ? null : this.editPeopleDetail.people.birthday.split(' ')[0]),
        peopleNational: this.editPeopleDetail.people.peopleNational, // 民族
        culture: this.editPeopleDetail.people.culture, // 文化成都
        political: this.editPeopleDetail.people.political, // 政治面貌
        organization: this.editPeopleDetail.people.organization, // 组织所在地
        cardId: this.editPeopleDetail.people.cardId, // 身份证号
        nowSpace: this.editPeopleDetail.people.nowSpace,
        phone: this.editPeopleDetail.people.phone,
        peopleWork: this.editPeopleDetail.people.peopleWork, // 工作单位
        domicileLocation: this.editPeopleDetail.people.domicileLocation, // 户籍所在地
        earning: this.editPeopleDetail.people.earning, // 年收入
        isWidows: this.editPeopleDetail.people.isWidows, // 孤寡
        religion: this.editPeopleDetail.people.religion, // 宗教
        residence: this.editPeopleDetail.people.residence, // 户口性质
        // 参保表
        joinSecurityCategory: this.editPeopleDetail.security.joinSecurityCategory, // 医保类型
        pensionCategory: this.editPeopleDetail.security.pensionCategory, // 养老保险类型
        // 就业
        isJob: this.editPeopleDetail.job.isJob,
        jobName: this.editPeopleDetail.job.jobName,
        reason: this.editPeopleDetail.job.reason, // 下岗或失业
        reJob: this.editPeopleDetail.job.reJob, // 再就业
        jobIntention: this.editPeopleDetail.job.jobIntention, // 求职意向
        // 住房表
        houseProper: this.editPeopleDetail.house.houseProper, // 房屋性质
        houseCount: this.editPeopleDetail.house.houseCount,
        houseSize: this.editPeopleDetail.house.houseSize,
        houseOwner: this.editPeopleDetail.house.houseOwner, // int
        useProper: this.editPeopleDetail.house.useProper, // 使用性质
        houseTime: this.editPeopleDetail.house.houseTime, // 租房时间
        isHouseProtect: this.editPeopleDetail.house.isHouseProtect, // 是否保障性住房
        houseCategory: this.editPeopleDetail.house.houseCategory, // 保障性住房类别
        good: this.editPeopleDetail.house.good, // 是否享有减免，0-否 1-是
        // 卫生计生
        isFlowPeople: this.editPeopleDetail.health.isFlowPeople, // 是否流动人口
        marriage: this.editPeopleDetail.health.marriage, // 婚姻状况
        marryTime: (this.editPeopleDetail.health.marryTime === null ? null : this.editPeopleDetail.health.marryTime.split(' ')[0]),
        birthCard: this.editPeopleDetail.health.birthCard, // 生育证号
        oneChildTime: (this.editPeopleDetail.health.oneChildTime === null ? null : this.editPeopleDetail.health.oneChildTime.split(' ')[0]), // 独生子女证书领取时间
        oneChildCard: this.editPeopleDetail.health.oneChildCard, // 独生子女证号
        address: this.editPeopleDetail.health.address, // 流出入地址
        healthTime: this.editPeopleDetail.health.healthTime === null ? null : this.editPeopleDetail.health.healthTime.split(' ')[0], // 流出入时间
        blood: this.editPeopleDetail.health.blood, // 血型
        healthHistory: this.editPeopleDetail.health.healthHistory, // 病史
        homeHistory: this.editPeopleDetail.health.homeHistory, // 家族史
        oldHistory: this.editPeopleDetail.health.oldHistory, // 既往史
        medicine: this.editPeopleDetail.health.medicine, // 过敏史
        isFuShe: this.editPeopleDetail.health.isFuShe, // 有无接触辐射
        // 犯罪
        isCommunityRemedy: this.editPeopleDetail.history.isCommunityRemedy, // 社区矫正
        remedyTime: this.editPeopleDetail.history.remedyTime === null ? null : this.editPeopleDetail.history.remedyTime.split(' ')[0], // 矫正时间
        isRelease: this.editPeopleDetail.history.isRelease, // 刑释解教
        helpTime: this.editPeopleDetail.history.helpTime === null ? null : this.editPeopleDetail.history.helpTime.split(' ')[0], // 帮教时间
        isFaLun: this.editPeopleDetail.history.isFaLun,
        isTurn: this.editPeopleDetail.history.isTurn, // 是否转化
        turnTime: this.editPeopleDetail.history.turnTime === null ? null : this.editPeopleDetail.history.turnTime.split(' ')[0],
        cultCategory: this.editPeopleDetail.history.cultCategory, // 其他邪教
        isDrug: this.editPeopleDetail.history.isDrug, // 是否吸毒
        // 涉军
        armyCategory: this.editPeopleDetail.army.armyCategory, // 涉军情况
        inTime: this.editPeopleDetail.army.inTime === null ? null : this.editPeopleDetail.army.inTime.split(' ')[0], // 入伍时间
        outTime: this.editPeopleDetail.army.outTime === null ? null : this.editPeopleDetail.army.outTime.split(' ')[0], //
        forces: this.editPeopleDetail.army.forces, // 兵役部队T
        place: this.editPeopleDetail.army.place, // 安置单位
        peopleId: this.editPeopleDetail.people.peopleId
      },
      indexToRefersh: '1'
    }
  },
  methods: {
    close: function () {
      this.$emit('editPeopleShowOrNot')
    },
    buttonSubmit: function () {
      let self = this
      let host = 'http://175.6.73.209:8081/'
      let url = host + 'back/updatePeople'
      let sendList = new URLSearchParams()
      for (let index in this.datalist) {
        sendList.append(index, this.datalist[index])
      }
      axios.post(url, sendList)
        .then(function (response) {
          if (response.data.status === 0) {
            alert('更改成功！')
            self.$emit('editPeopleShowOrNot')
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
  },
  mounted: function () {
    this.indexToRefersh = this.editPeopleDetail.people.peopleName
  }
}
</script>

<style scoped>
  #all{
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    height: 500px;
    width: 95%;
    border-radius: 10px;
    border:1px #336699 solid ;
    overflow: auto;
    background: white;
    z-index: 2;
    box-shadow: 2px 2px 20px black ;
    padding: 5px;
  }
  #title{
    background: #235673;
    border-radius:5px 5px 0px 0px ;
    color: #fff;
    margin: -5px;
    font-size: small;
    position: fixed;
    width: 100%;
    height: 20px;
    padding-left: 10px;
    padding-top: 3px;
  }
  #title img{
    width: 14px;
    float: right;
    margin-right: 100px;
    cursor: pointer;
  }
  #editPeopleBody{
    margin-top: 19px;
  }
  table{
    margin: 10px 0;
    padding: 20px 0;
    width: 100%;
  }
  #base{
    margin-top: -20px;
    width: 100%;
  }
  .borderBottom{
    border-bottom: 2px solid #ccc;
  }
  td{
    height: 40px;
    text-align: center;
  }
  input{
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  select{
    width: 100%;
  }
  #button_submit{
    text-align: center;
  }
  #button_submit button{
    background: #fe9850;
    border: 6px solid #fe9850;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
