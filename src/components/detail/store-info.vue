<template>
  <scroll class="detail-wrapper">
    <div>
      <!--<mt-header title="动态详情">

        <router-link to="/store-inside" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>-->
      <!--<div class="line"></div>-->
      <div class="box">
          <span>自新麻辣烫于11月3号至5号开业期间啤酒免费喝，吃30元送10元，选各种优惠美式！食材新鲜！味道鲜美！价格实惠！欢迎大家前来品尝！</span>
        <ul>
          <li><a href="#">
            <div></div>
          </a></li>
          <li><a href="#">
            <div></div>
          </a></li>
          <li><a href="#">
            <div></div>
          </a></li>
        </ul>
        <div class="time">2017年12月18日</div>
      </div>
    </div>
  </scroll>


</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    methods: {
      handleClose(url){
//        this.$router.replace(url)
        this.$router.go(-1)
      }
    },
    mounted(){
      this.getLenth()
    },
    methods: {
      getLenth(){
        /*let lenth = this.$refs.displaybox.children.length
        this.$refs.displaybox.style.width = lenth * 115 / 37.5 + 'rem';
        console.log(lenth);*/
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="less" scoped type="text/less">
  @import '~@/common/style/variable.less';
  @import '~@/common/style/mixin.less';

  .detail-wrapper {
    a {
      text-decoration: none;
      out-line: nonecolor
    }
    height: 100%;
    background-color: #fff;
    left: 0;
    top: 0;
    overflow: hidden;
    .title {
      padding: 10/37.5rem;
      position: relative;
      border-bottom: 1px solid #EDEEF1;
      &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 10;
        left: 38%;
        top: 38%;
        border: none;
        width: 15/37.5rem;
        height: 15/37.5rem;
        background: url('~@/common/image/search.png');
        background-size: 15/37.5rem 15/37.5rem;
      }
      .search {
        text-align: center;
        font-size: 12/37.5rem;
        color: #7a797b;
        height: 30/37.5rem;
        width: 99%;
        border: none;
        background-color: #EDEEF1;
        outline: none;
      }
    }
    .box {
      padding: 17/37.5rem;
      span{
        font-size: 16/37.5rem;
        line-height: 25/37.5rem;
        color:#333;
      }
      ul{
        margin:0;
        margin-top: 5px;
        padding:0;
        li{
          float:left;
          margin-right: 2px;
          list-style: none;
          div{
            width: 105/37.5rem;
            height: 105/37.5rem;
            background-color: #ccc;
          }
        }
      }
      .time{
        margin-top: 5px;
        color: #808080;
      }
    }
  }

  .mint-header {
    height: 45/37.5rem;
    padding-left: 16/37.5rem;
    padding-right: 16/37.5rem;
    border-bottom: 1px solid #EDEEF1;
    background: @color-white;
    color: #333;
    font-size: 18px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }


</style>
