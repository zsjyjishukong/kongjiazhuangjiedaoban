<template>
<div>
  <Header v-on:addUserDisplayChange="addUserDisplayChange" v-on:importUserDisplayChange="importUserDisplayChange"
          v-on:selectHujiOrNotMe="selectShowOrNotMe" v-on:goToIndex="goToIndex"></Header>
  <Add v-if="addUserDisplay" v-on:close="addUserDisplayChange"></Add>
  <Import v-if="importUserDisplay" v-on:cancle="importUserDisplayChange"></Import>
  <TongJi v-if="!selectShowOrNot"></TongJi>
  <Select v-if="selectShowOrNot" @selectOk="goToSelect" :selectList="selectList" :pageAllNum="pageAllNum" :token="token"></Select>
  <Foot></Foot>
</div>
</template>

<script>
import Header from '../../components/HeaderIndex'
import Add from '../../components/add'
import TongJi from '../../components/TongJi'
import Import from '../../components/Import'
import Select from '../../components/Select'
import Foot from '../../components/foot'
import axios from 'axios'

export default {
  name: 'index',
  components: {
    Select,
    TongJi,
    Header,
    Add,
    Import,
    Foot
  },
  data () {
    return {
      addUserDisplay: false,
      importUserDisplay: false,
      selectList: [],
      selectShowOrNot: false,
      pageAllNum: 0,
      token: ''
    }
  },
  methods: {
    addUserDisplayChange: function () {
      this.importUserDisplay = false
      this.addUserDisplay = !this.addUserDisplay
    },
    importUserDisplayChange: function () {
      this.addUserDisplay = false
      this.importUserDisplay = !this.importUserDisplay
    },
    goToIndex: function () {
      this.addUserDisplay = false
      this.importUserDisplay = false
      this.selectShowOrNot = false
    },
    goToSelect: function (datas, huji, pageNo = 1) {
      let self = this
      let host = 'http://175.6.73.209:8081/'
      let url = host + (huji ? ('back/domicileAdvance?pageSize=20&pageNo=' + pageNo) : ('back/peopleAdvance?pageSize=20&pageNo=' + pageNo))
      axios({
        method: 'post',
        url: url,
        data: datas,
        headers: {'Content-Type': 'application/json'}
      })
        .then(function (response) {
          if (response.data.status === 0) {
            // console.log(typeof (response.data.data) )
            if (typeof (response.data.data) === 'undefined') {
              self.selectList = []
              self.pageAllNum = 0
              self.token = ''
            } else {
              self.selectList = response.data.data.list
              self.pageAllNum = response.data.data.lastPage
              self.token = response.data.msg
            }
          } else if (response.data.status === 10) {
            alert(response.data.msg)
            self.$router.push('/login')
          } else {
            alert(response.data.msg)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    selectShowOrNotMe: function () {
      this.addUserDisplay = false
      this.importUserDisplay = false
      this.selectShowOrNot = !this.selectShowOrNot
    }
  },
  created: function () {
    localStorage.getItem('username') && this.$store.replaceState(JSON.parse(localStorage.getItem('username')))
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('username', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style scoped>
</style>
