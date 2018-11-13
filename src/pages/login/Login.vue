<template>
  <div id="all">
    <div id="head">
      <Header></Header>
    </div>
    <div id="body">
      <login @login="login"></login>
    </div>
    <br/>
    <div id="foot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Login from '../../components/login'
import Foot from '../../components/foot'
import axios from 'axios'

export default {
  name: 'head',
  components: {
    Header, Login, Foot
  },
  data () {
    return {
      url: 'http://175.6.73.209:8081/back/login'
    }
  },
  methods: {
    login (username, password) {
      let parms = new URLSearchParams()
      let self = this
      parms.append('username', username)
      parms.append('password', password)
      axios.post(this.url, parms)
        .then(function (response) {
          if (response.data.status === 0) {
            self.$store.commit('changeUserName', username)
            self.$router.push('/')
          } else {
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

<style>
  #all{
    margin: 0;
    border:0;
  }
#head {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  #body{
    height: 120%;
  }
  #foot{
    margin-top:20px;
  }
</style>
