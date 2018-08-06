<template>
  <div class="m-top">
    <div class="left">
      <el-col :span="12">
        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
       长沙<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>怀化</el-dropdown-item>
            <el-dropdown-item>衡阳</el-dropdown-item>
            <el-dropdown-item>岳阳</el-dropdown-item>
            <el-dropdown-item>株洲</el-dropdown-item>
            <el-dropdown-item>湘潭</el-dropdown-item>
            <el-dropdown-item>张家界</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </div>
    <div class="middle">
      <el-input
        placeholder="搜索关键词"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>
    <div class="right">
      <i class="el-icon-edit"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        input2: ''
      }
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">
  @import '~@/common/style/variable.less';
  @import '~@/common/style/mixin.less';

  .el-icon-arrow-down {
    font-size: @font-size-small;
  }

  .m-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: @color-bgc;
    height: 45/37.5rem;
    padding-left: 16/37.5rem;
    padding-right: 16/37.5rem;
    color: @color-white;
    .middle {
      flex: 1;
      margin-left: 10/37.5rem;
      margin-right: 10/37.5rem;
      .el-input__inner {
        height: 26/37.5rem;
      }
    }
  }

  .el-col-12 {
    width: 100%;
    .el-dropdown {
      color: @color-white;
    }
  }


</style>
