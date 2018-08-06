<template>
  <div class="site-footer">
    <slot></slot>
  </div>
</template>
<script type="text/javascript">
  export default{

  }
</script>
<style lang="less" scoped type="text/less">
  @import '~@/common/style/variable.less';
  @import '~@/common/style/mixin.less';

  .site-footer{
    .static-position(bottom);
    height:1.558rem;
    display:flex;
    align-items:center;
    // box-shadow:0 2px 7px rgba(0,0,0,0.07);
    border-top:@1px solid @color-gray;
    background-color: @color-white;
    box-sizing: border-box;
    .menu-item{
      display: flex;
      flex-direction:column;
      align-items:center;
      flex:0 0 2.5rem;
      text-align:center;
      font-size:@font-size-small;
      &.router-link-active{
        color:@color-theme;
        .iconfont{
          color:@color-theme;
        }
      }
      .iconfont{
        font-size:@font-size-large;
      }
    }
  }
</style>
