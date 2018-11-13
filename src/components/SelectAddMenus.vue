<template>
    <tr>
      <td>
        <select v-model="mingCheng">
          <option selected="selected" value="domicile_code">户籍码</option>
          <option value="now_place">现居住地</option>
          <option value="phone">联系方式</option>
          <option value="card_id">身份证号</option>
          <option value="people_name">姓名</option>
          <option value="sex">性别</option>
          <option value="relation">与户主关系</option>
          <option value="birthday">出生日期</option>
          <option value="people_national">民族</option>
          <option value="culture">文化程度</option>
          <option value="political">政治面貌</option>
          <option value="organization">组织关系所在地</option>
          <option value="people_work">工作单位</option>
          <option value="domicile_location">户籍地址</option>
          <option value="earning">年收入</option>
          <option value="religion">宗教信仰</option>
          <option value="birth_card">生育证号</option>
          <option value="blood">血型</option>
          <option value="health_history">病史</option>
          <option value="home_history">家族史</option>
          <option value="old_history">既往史</option>
          <option value="medicine">过敏史</option>
          <option value="cult_category">邪教种类</option>
        </select>
      </td>
      <td>
        <select v-model="relation">
          <option value="=">是</option>
          <option value="!=">不是</option>
          <option value="LIKE">含有</option>
          <option value="NOT LIKE">不含有</option>
          <option value=">">大于</option>
          <option value="<">小于</option>
          <option value=">=">大于等于</option>
          <option value="<=">小于等于</option>
        </select>
      </td>
      <td>
        <input type="text" placeholder="请输入内容" v-model="content"/>
      </td>
      <td>
        <img @click="plus" src="../../static/img/plus.png" height="20px">
        <img @click="dup" src="../../static/img/dup.png" height="20px">
      </td>
    </tr>
</template>

<script>
export default {
  name: 'SelectAddMenus',
  props: ['num'],
  methods: {
    plus: function () {
      this.$emit('plus')
    },
    dup: function () {
      this.$emit('dup')
    }
  },
  data () {
    return {
      mingCheng: '',
      relation: '',
      content: '',
      datas: {
        mingCheng: this.mingCheng,
        number: this.number,
        relation: this.relation,
        content: this.mingCheng === 'sex' ? (this.content === '男' ? 1 : 0) : this.content
      }
    }
  }
}
</script>

<style scoped>
tr td{
  text-align: center;
}
  tr img{
    cursor: pointer;
  }
</style>
