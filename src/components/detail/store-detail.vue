<template>
  <scroll class="detail-wrapper">
    <div>
      <mt-header title="店铺号">
        <router-link to="/life" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="title">
        <input type="text" class="search" placeholder="搜索店铺">
      </div>
      <!--<div class="line"></div>-->
      <div class="box">
        <ul>
          <li class="content" @click="sendParams()">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
          <li class="content">
            <router-link to="/">
              <div class="left"></div>
              <div class="right">
                <div class="up">大碗厨(万家丽店)</div>
                <div class="down">自新麻辣烫于12月25号至31号开业期间啤酒免费</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </scroll>


</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
      data(){
        return{
            msg:'test message通过路由传参'
        }
      },
    methods: {
      sendParams(){
          this.$router.push({
            path:'store-inside',
            name:'store-inside',
            params:{
                dataobj:this.msg
            }
          })
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
      ul {
        padding: 0 0 0 20/37.5rem;
        margin: 0;
      }
      .content {
        list-style: none;
        border-bottom: 2px solid #e0e0e0;
        .left {
          float: left;
          padding: 0;
          margin-right: 10px;
          width: 60/37.5rem;
          height: 60/37.5rem;
          background-color: #333;
          border-radius: 50%;
        }
        .right {
          .up {
            margin-top: 5px;
            font-size: 16/37.5rem;
            color: #333;
            line-height: 35/37.5rem;
            position: relative;
            &::before {
              content: '';
              display: block;
              position: absolute;
              right: 10/37.5rem;
              top: 10/37.5rem;
              border-radius: 50%;
              width: 10/37.5rem;
              height: 10/37.5rem;
              background-color: #F31010;
            }
          }
          .down {
            color: #808080;
            margin-bottom: 11/37.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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


</style>
