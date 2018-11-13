<template>
<div id="login">
  <div id="img">
    <img src="../../static/img/photo.png">
  </div>
  <div id="uandp">
    <div id="head">
      用户登陆 LOGIN
    </div>
    <div id="body">
      <table>
        <tr>
          <td>用户名：</td>
          <td><input type="text" name="username" v-model="username"></td>
        </tr>
        <tr>
          <td>密&nbsp;码&nbsp;：&nbsp;</td>
          <td><input type="password" name="password" v-model="password" /></td>
        </tr>
        <tr>
          <td colspan="2"><button id="submit" v-on:click="submits">登陆</button></td>
        </tr>
      </table>
    </div>
    <div id="foot">
      &nbsp;
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      host: 'http://175.6.73.209:8081',
      username: '',
      password: ''
    }
  },
  methods: {
    submits: function () {
      this.$emit('login', this.username, this.password)
    }
  }
}
</script>

<style scoped>
  #login{
    margin-top: 4%;
    margin-left: 18%;
    width: 80%;
  }
  img{
    width: 100%;
  }
  #img{
    width:37%;
  }
  #uandp{
    width: 25% ;
    float: right;
    height: 280px;
    margin-right: 20%;
    margin-top: -25%;
    border: 1px solid #d4d4d4;
    border-top: none;
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 20px 20px;
  }
  #head{
    height: 12%;
    margin-top: 0;
    background: #0469b7;
    font-size: large;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    letter-spacing: 2px;
  }
  #body{
    margin : 12% 0 auto 30px;
  }
  table tr td{
    text-align: center;
    height: 50px;
  }
  input{
    width: 80%;
  }
  #submit{
    width:60px;
    height: 30px;
    cursor: pointer;
    background: #ff9300;
    border-radius: 2px;
    border:1px solid #ff6800;
    color:white;
    z-index: 1;
  }
  #foot{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 30px;
    background: #f0f0f0;
    z-index: 1;
  }
</style>
