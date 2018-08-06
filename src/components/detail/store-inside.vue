<template>
  <scroll class="detail-wrapper full">
    <div>
      <!--<mt-header title="大碗厨(万家丽店)">
        <router-link to="/store-detail" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right" @click="toggle()"></mt-button>
      </mt-header>-->
      <div class="box">
        <ul>
          <li content>
            <div class="time">昨天 下午4:13</div>
            <div class="text">自新麻辣烫于11月3号至5号开业期间啤酒免费喝，吃30元送10元，选各种优惠美式！食材新鲜！味道鲜美！价格实惠！欢迎大家前来品尝！</div>
          </li>
          <li content>
            <div class="time">下午4:13</div>
            <div class="text">自新麻辣烫于11月3号至5号开业期间啤酒免费喝，吃30元送10元，选各种优惠美式！食材新鲜！味道鲜美！价格实惠！欢迎大家前来品尝！{{msg}}<br>
              <router-link to="/store-info">点击查看更多</router-link>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div v-show="isShow" class="mask">
      <div class="bottom-mask">
        <div>不再关注</div>
        <div @click="toggle()" class="cancel">取消</div>
      </div>
    </div>
  </scroll>


</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    data(){
      return {
        isShow: false,
        msg: ''
      }

    },
    methods: {
      handleClose(url){
//        this.$router.replace(url)
        this.$router.go(-1)
      },
      toggle(){
        this.isShow = !this.isShow
      },
      getParams(){
        let routerParams = this.$route.params.dataobj
        this.msg = routerParams
      }
    },
    mounted(){
      this.getParams()
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
    .box {
      ul {
        margin: 0;
        padding: 0;
        width: 100%;
        li {
          list-style: none;
          margin: 0;
          padding: 0 15/37.5rem;
          text-align: center;
          .time {
            margin: 20/37.5rem 0;
            text-align: center;
            padding: 0 5px;
            line-height: 25/37.5rem;
            display: inline-block;
            border-radius: 3px;
            font-size: 11px;
            color: #fff;
            background-color: #b3b3b3;
          }
          .text {
            padding: 15/37.5rem;
            font-size: 17/37.5rem;
            background-color: #fff;
            text-align: left;
            a {
              font-size: 12px;
              line-height: 35px;
              margin-left: 35px;
              position: relative;
              &::before {
                content: '';
                display: block;
                position: absolute;
                left: -35px;
                top: -5px;
                width: 30px;
                height: 30px;
                background: red;
              }
            }
          }
        }
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

  .full {
    width: 100%;
    height: 100%;
    background-color: #ececec;
    .mask {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      .bottom-mask {
        background-color: #fff;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        .cancel {
          border-top: 1px solid #e0e0e0;
        }
        div {
          font-size: 18/37.5rem;
          color: #595959;
          text-align: center;
          width: 100%;
          line-height: 50/37.5rem;
          display: block;
        }
      }
    }
  }


</style>
