<template>
  <div id="all">
    <div id="title" >
      批量导入
    </div>
    <div id="body">
      选择文件：
      <input type="file" @change="getFile"/><br><br>
      <a href="static/template/人口信息.xlsx" download="人口信息.xlsx">下载人口模板文件</a>
      <a href="static/template/户籍信息.xlsx" download="户籍信息.xlsx">下载户籍模板文件</a>
    </div>
    <div id="foot">
      <button @click="submit">确定</button>
      <button @click="importUserDisplayChange">取消</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Import',
  data () {
    return {
      file: ''
    }
  },
  methods: {
    importUserDisplayChange: function () {
      this.$emit('cancle')
    },
    getFile: function (e) {
      this.file = e.target.files[0] // 获取要上传的文件
    },
    submit: function () {
      let files = new FormData()
      let self = this
      let host = 'http://175.6.73.209:8081/back/'
      let url
      files.append('multipartFile', this.file)
      if (this.file.name.split('.')[0] === '人口信息') {
        url = host + 'exPeople'
      } else if (this.file.name.split('.')[0] === '户籍信息') {
        url = host + 'exDomicile'
      } else {
        alert('文件名不符合规范，请修改文件名')
        return false
      }
      axios({
        method: 'post',
        url: url,
        data: files
      })
        .then(function (response) {
          if (response.data.status === 0) {
            alert('上传完成')
            self.$emit('cancle')
          } else if (response.data.status === 10) {
            alert(response.data.msg)
            self.$router.push('/login')
          } else {
            alert(response.data.msg)
            self.$emit('cancle')
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
  margin: auto;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 20px black;
  border-radius: 3px;
  width: 400px;
  margin-top: 50px;
  z-index: 2;
  background: #fff;
}
#title{
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background: #eee;
}
#body{
  padding: 60px 20px;
  text-align: center;
}
#body input{
  cursor: pointer;
}
#body a{
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  padding: 0 10px;
  color: #336699;
}
#foot{
  text-align: right;
  padding:0px 20px 20px 20px;
}
button{
  background: #0469b7;
  cursor: pointer;
  border: 4px solid #0469b7;
  border-radius: 2px;
  margin: 0 10px;
  color: #fff;
}
</style>
