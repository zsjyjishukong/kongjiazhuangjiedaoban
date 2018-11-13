<template>
    <div :class = "theBorderColor">
      <table width="100%" id="base" class="borderBottom">
        <tr>
          <td>姓名：</td>
          <td><input type="text" v-model="peopleName"/></td>
          <td>性别:</td>
          <td><input type="radio" name="sex" v-model="sex" value="1">男&nbsp;&nbsp;<input type="radio" v-model="sex" name="sex" value="0">女 </td>
          <td>户口性质</td>
          <td>
            <select v-model="residence" >
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
            <select v-model="relation" id="relation">
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
          <td><input type="date" v-model="birthday"/></td>
        </tr>
        <tr>
          <td>民族:</td>
          <td><input type="text" v-model="peopleNational"/></td>
          <td>文化程度:</td>
          <td>
            <select v-model="culture">
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
            <select v-model="political">
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
          <td><input v-model="organization" type="text"/></td>
          <td>现居住地：</td>
          <td><input type="text" v-model="nowSpace"/></td>
        </tr>
        <tr>
          <td>联系电话：</td>
          <td><input type="tel" v-model="phone"/></td>
          <td>身份证号</td>
          <td><input type="text" v-model="cardId"/></td>
          <td>工作单位</td>
          <td><input type="text" v-model="peopleWork"/></td>
          <td>户籍所在地</td>
          <td><input type="text" v-model="domicileLocation"/></td>
          <td>宗教信仰</td>
          <td><input type="text" v-model="religion"/></td>
        </tr>
      </table>
      <table id="economics" class="borderBottom">
        <tr>
          <td>年收入</td>
          <td><input type="number" placeholder="单位：万元" v-model="earning"/></td>
          <td>医保类型</td>
          <td><input type="text" v-model="joinSecurityCategory"/></td>
          <td>养老保险类型</td>
          <td><input type="text" v-model="pensionCategory"/></td>
          <td>是否就业</td>
          <td>
            <input type="checkbox" v-model="isJob"/>
            <span v-if="isJob">已就业</span>
            <span v-else>未就业</span>
          </td>
        </tr>
        <tr>
          <td> 职业</td>
          <td><input type="text" v-model="jobName"/></td>
          <td>下岗或失业</td>
          <td><input type="text" v-model="reason"/></td>
          <td>再就业情况</td>
          <td><input type="text" v-model="reJob"/></td>
          <td>求职意向</td>
          <td><input type="text" v-model="jobIntention"/></td>
        </tr>
      </table>
      <table id="house" class="borderBottom">
        <tr>
          <td>房屋性质</td>
          <td><input type="text" v-model="houseProper"/></td>
          <td>房屋间数</td>
          <td><input type="number" v-model="houseCount" placeholder="单位：间 请输入数字"/></td>
          <td>建筑面积</td>
          <td><input type="number" placeholder="单位:平方米 请输入数字" v-model="houseSize"/></td>
          <td>产权所有人</td>
          <td><input type="text" v-model="houseOwner"/></td>

        </tr>
        <tr>
          <td>使用性质</td>
          <td><input type="text" v-model="useProper"/></td>
          <td>租房时间</td>
          <td><input type="number" v-model="houseTime" placeholder="单位：月 请输入数字"/></td>
          <td>享有保障性住房</td>
          <td >
            <input type="checkbox" v-model="isHouseProtect"/>
            <span v-if="isHouseProtect">享有保障性住房</span>
            <span v-else>不享保障性住房</span>
          </td>
          <td ><span v-show="isHouseProtect">保障性住房类别</span></td>
          <td ><input type="text" v-show="isHouseProtect" v-model="houseCategory"/></td>
        </tr>
        <tr>
          <td>享有减免或房屋补贴</td>
          <td>
          <input type="checkbox" v-model="good"/>
          <span v-if="good">享有减免或补贴</span>
          <span v-else>不享减免或补贴</span>
        </td>
        </tr>
      </table>
      <table id="hygiene" class="borderBottom">
        <tr>
          <td>是否流动人口</td>
          <td>
            <input type="checkbox" v-model="isFlowPeople"/>
            <span v-if="isFlowPeople">是流动人口</span>
            <span v-else>非流动人口</span>
          </td>
          <td>婚姻状况</td>
          <td><input type="text" v-model="marriage"/></td>
          <td>结婚时间</td>
          <td><input type="date" v-model="marryTime"/></td>
          <td>生育证号</td>
          <td><input type="text" v-model="birthCard" /></td>
        </tr>
        <tr>
          <td>独生子女证领取时间</td>
          <td><input type="date" v-model="oneChildTime"/></td>
          <td>独生子女证号</td>
          <td><input type="text" v-model="oneChildCard"/></td>
          <td>流出入地址</td>
          <td><input type="text" v-model="address"/></td>
          <td>流出入时间</td>
          <td><input type="date" v-model="healthTime"/></td>
        </tr>
        <tr>
          <td>血型</td>
          <td>
            <select v-model="blood">
              <option value="A型">A型</option>
              <option value="B型">B型</option>
              <option value="O型">O型</option>
              <option value="AB型">AB型</option>
              <option value="AO型">AO型</option>
              <option value="其他">其他</option>
            </select>
          </td>
          <td>病史</td>
          <td><input type="text" v-model="healthHistory"/></td>
          <td>家族史</td>
          <td><input type="text" v-model="homeHistory"/></td>
          <td>既往史</td>
          <td><input type="text" v-model="oldHistory"/></td>
        </tr>
        <tr>
          <td>药物过敏史</td>
          <td><input type="text" v-model="medicine"/></td>
          <td>有无接触辐射</td>
          <td>
            <input type="checkbox" v-model="isFuShe"/>
            <span v-if="isFuShe">接触辐射</span>
            <span v-else>未接触辐射</span>
          </td>
        </tr>
      </table>
      <table id="crime" class="borderBottom">
        <tr>
          <td>社区矫正</td>
          <td>
            <input type="checkbox" v-model="isCommunityRemedy"/>
            <span v-if="isCommunityRemedy">参加社区矫正</span>
            <span v-else>未参加社区矫正</span>
          </td>
          <td><span v-if="isCommunityRemedy">矫正时间</span></td>
          <td><input type="date" v-model="remedyTime" v-if="isCommunityRemedy"/></td>
          <td>刑释解教</td>
          <td>
            <input type="checkbox" v-model="isRelease"/>
            <span v-if="isRelease">已刑释解教</span>
            <span v-else>未刑释解教</span>
          </td>
          <td><span>帮教时间</span></td>
          <td><input type="date" v-model="helpTime"/></td>
        </tr>
        <tr>
          <td>是否转化</td>
          <td>
            <input type="checkbox" v-model="isTurn"/>
            <span v-if="isTurn">已转化</span>
            <span v-else>未转化</span>
          </td>
          <td><span v-if="isTurn">转化时间</span></td>
          <td><input v-if="isTurn" type="date" v-model="turnTime"/></td>
          <td>是否练习法轮功</td>
          <td>
            <input type="checkbox" v-model="isFaLun"/>
            <span v-if="isFaLun">练习法轮功者</span>
            <span v-else>未练习法轮功</span>
          </td>
          <td>其他邪教种类</td>
          <td><input type="text" v-model="cultCategory"/></td>
        </tr>
        <tr>
          <td>是否吸毒</td>
          <td>
            <input type="checkbox" v-model="isDrug"/>
            <span v-if="isDrug">吸毒者</span>
            <span v-else>不吸毒</span>
          </td>
          <td>是否孤寡</td>
          <td>
            <input type="checkbox"  v-model="isWidows"/>
            <span v-if="isWidows">是孤寡</span>
            <span v-else>非孤寡</span>
          </td>
        </tr>
      </table>
      <table id="army">
        <tr>
          <td>涉军类型</td>
          <td><input type="text" v-model="armyCategory"/></td>
          <td>入伍时间</td>
          <td><input type="date" v-model="inTime"/></td>
          <td>服役部队</td>
          <td><input type="text" v-model="forces"/></td>
          <td>退伍时间</td>
          <td><input type="date" v-model="outTime"/></td>
          <td>安置单位</td>
          <td><input type="text" v-model="place"/></td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'people',
  props: [ 'nth' ],
  computed: {
    theBorderColor: function () {
      if (this.nth % 2 === 0) {
        return 'people'
      } else {
        return 'double'
      }
    }
  },
  data () {
    return {
      // 基本表
      nowSpace: '', // 现居住地
      phone: '', //
      peopleName: '',
      sex: -1,
      relation: '', // 户主关系
      birthday: '',
      peopleNational: '', // 民族
      culture: '', // 文化成都
      political: '', // 政治面貌
      organization: '', // 组织所在地
      cardId: '', // 身份证号
      peopleWork: '', // 工作单位
      domicileLocation: '', // 户籍所在地
      earning: 0, // 年收入
      isWidows: 0, // 孤寡
      religion: '', // 宗教
      residence: '', // 户口性质
      // 参保表
      joinSecurityCategory: '', // 医保类型
      pensionCategory: '', // 养老保险类型
      // 就业
      isJob: 1,
      jobName: '',
      reason: '', // 下岗或失业
      reJob: '', // 再就业
      jobIntention: '', // 求职意向
      // 住房表
      houseProper: '', // 房屋性质
      houseCount: '',
      houseSize: '',
      houseOwner: '', // int
      useProper: '', // 使用性质
      houseTime: '', // 租房时间
      isHouseProtect: 0, // 是否保障性住房
      houseCategory: '', // 保障性住房类别
      good: 0, // 是否享有减免，0-否 1-是
      // 卫生计生
      isFlowPeople: 0, // 是否流动人口
      marriage: '', // 婚姻状况
      marryTime: null,
      birthCard: '', // 生育证号
      oneChildTime: null, // 独生子女证书领取时间
      oneChildCard: '', // 独生子女证号
      address: '', // 流出入地址
      healthTime: null, // 流出入时间
      blood: '', // 血型
      healthHistory: '', // 病史
      homeHistory: '', // 家族史
      oldHistory: '', // 既往史
      medicine: '', // 过敏史
      isFuShe: 0, // 有无接触辐射
      // 犯罪
      isCommunityRemedy: 0, // 社区矫正
      remedyTime: null, // 矫正时间
      isRelease: 0, // 刑释解教
      helpTime: null, // 帮教时间
      isFaLun: 0,
      isTurn: 0, // 是否转化
      turnTime: null,
      cultCategory: '', // 其他邪教
      isDrug: 0, // 是否吸毒
      // 涉军
      armyCategory: '', // 涉军情况
      inTime: null, // 入伍时间
      outTime: null, //
      forces: '', // 兵役部队T
      place: '' // 安置单位
    }
  }
}
</script>

<style scoped>
.people{
  padding: 2px;
  border: 3px #0099CC solid;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin: 40px 0;
}
.double{
  padding: 2px;
  border: 3px #336699 solid;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin: 40px 0;
}
table{
  margin: 10px 0;
  padding: 20px 0;
  width: 100%;
}
.double .borderBottom{
  border-bottom: 2px #336699 solid;
}
.people .borderBottom{
  border-bottom: 2px #0099CC solid;
}
#base{
  margin-top: -20px;
  width: 100%;
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
</style>
