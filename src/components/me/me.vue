<template>
    <div class="me">
      <div @click="routerTo('/register')">注册</div>
      <div @click="routerTo('/invite')">邀请</div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      routerTo(url){
        this.$router.replace(url)
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">
  .me{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
  }
</style>
