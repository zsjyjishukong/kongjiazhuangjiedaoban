<template>
    <div id="all">
      <div id="hr">
        &nbsp;
      </div>
      <div id="copyright">
        <span>版权所有：张家口宏鑫网络科技有限公司</span><br>
        <span>技术支持：张家口宏鑫网络科技有限公司</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'foot.vue'
}
</script>

<style scoped>
  #all{
    margin-top: 20px;
  }
  #hr{
    margin-top:20px;
    background: #00589c;
  }
  #copyright{
    margin-top: 20px;
    height: 30px;
    text-align: center;
    line-height: 40px;
  }
  span{
    margin: 0 20px;
  }
</style>
