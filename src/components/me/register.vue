<template>
    <div class="register">
      <!--<mt-header title="好友邀请,接收邀请...">
        <router-link to="/me" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>-->
      <div class="content">
        <i class="el-icon-circle-check"></i>
        <div class="success">恭喜你已注册成功</div>
        <div class="gain">已获得20拇豆</div>
        <a href="javascript:(0)" class="download">下载拇信查看</a>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" scoped type="text/less">
  @import '~@/common/style/variable.less';
  @import '~@/common/style/mixin.less';
  .register {
    height: 100%;
    background-color: #fff;
    left: 0;
    top: 0;
    overflow:hidden;
  }
  .content{
    padding-top: 80/37.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-icon-circle-check{
      font-size: 81/37.5rem;
      color:#ff7155;
    }
    .success{
      font-size: 18/37.5rem;
      line-height: 30/37.5rem;
      margin-top: 15/37.5rem;
      color: #793C21;
    }
    .gain{
      font-size: 14/37.5rem;
      line-height: 30/37.5rem;
      color: #793C21;
    }
    .download{
      margin-top: 40/37.5rem;
      width: 300/37.5rem;
      height: 42/37.5rem;
      color: #793C21;
      font-size: 18/37.5rem;
      line-height:42/37.5rem;
      text-align: center;
      display: block;
      background: #FDD642;
      border-radius: 4px;
      text-decoration: none;
      :visited,:link{
        color: #793C21;
      }
    }
  }
</style>
