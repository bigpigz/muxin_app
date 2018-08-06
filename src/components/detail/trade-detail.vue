<template>
  <scroll class="detail-wrapper">
    <div>
      <!--<mt-header title="大碗厨(万家丽店)">
        <router-link to="/life" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>-->
      <div class="title">
        <h1>拇信</h1>
        <span></span>
        <a href="javascript:void(0)">打开app</a>
      </div>
      <div class="line"></div>
      <div class="display">
        <ul class="display-box needsclick" ref="displaybox">
          <li v-for="item in result.shop_intro.pics">
            <a href="javascript:void(0)"><img :src="item" width="100%" height="100%"></a>
          </li>
        </ul>
      </div>
      <div class="store">
        <div class="left">{{result.shop_name}}</div>
        <div class="right">浏览<br><span>{{result.visits}}</span></div>
      </div>
      <div class="middle">
        <div class="time same"><span>7:00-22:00</span></div>
        <div class="phone same"><span>{{result.shop_tel}}</span></div>
        <div class="location same"><span>{{result.shop_addr}}</span></div>
      </div>
      <div class="detail">
        <h3>详情</h3>
        <p>{{result.shop_intro.content}}{{result.shop_id}}</p>
      </div>
    </div>
  </scroll>


</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {shopDetail,getUrl} from 'api/getdata'
  export default {
    data(){
      return {
        result: []
      }
    },
    methods: {
      handleClose(url){
//        this.$router.replace(url)
        this.$router.go(-1)
      },
      _shopDetail(){
        let url = getUrl()
        let dat = {"id": url.id}

        shopDetail(dat).then((res) => {
          this.result = res.result
        })
      },
      _getLenth(){
        let lenth = this.$refs.displaybox.children.length
        this.$refs.displaybox.style.width = lenth * 115 / 37.5 + 'rem';
      }
    },
    created(){
      this._shopDetail()
    },
    mounted(){
      this._getLenth()
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
    height: 100%;
    background-color: #fff;
    left: 0;
    top: 0;
    overflow: hidden;
    .title {
      padding-left: 16/37.5rem;
      color: #2F6DD9;
      position: relative;
      h1 {
        display: inline-block;
        font-size: 22/37.5rem;
        font-weight: normal;
      }
      span {
        position: absolute;
        left: 75/37.5rem;
        top: 10/37.5rem;
        width: 1px;
        height: 40/37.5rem;
        background-color: #ccc;
      }
      a {
        padding-left: 30/37.5rem;
        color: #2F6DD9;
        display: inline-block;
        text-decoration: none;
      }
    }
  }

  .mint-header {
    height: 45/37.5rem;
    padding-left: 16/37.5rem;
    padding-right: 16/37.5rem;
    background: @color-bgc;
    color: @color-white;
    font-size: 18px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }

  .display {
    width: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
    padding-top: 10/37.5rem;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    display: -webkit-box;

    .display-box {
      margin: 0;
      padding: 0;
      width: 25rem;
      padding-left: 16/37.5rem;
      height: 110/37.5rem;
      list-style: none;
      background-color: #eee;
      padding-top: 5/37.5rem;
      padding-bottom: 5/37.5rem;
      li {
        display: inline-block;
        width: 110/37.5rem;
        height: 110/37.5rem;
        margin-left: 4px;
        background-color: #f7ba2a;
      }
    }
  }

  .store {
    color: #333333;
    height: 45/37.5rem;
    padding-top: 26/37.5rem;
    padding-left: 16/37.5rem;
    padding-right: 16/37.5rem;
    .left {
      font-size: 18px;
      font-weight: 300;
      float: left;
    }
    .right {
      width: 100/37.5rem;
      border-left: 1px solid #E1E1E1;
      float: right;
      text-align: center;
      color: #7F7F7F;
      span {
        color: #EF503B;
      }
    }
  }

  .middle {
    padding-left: 16/37.5rem;
    padding-right: 16/37.5rem;
    border-bottom: 6px solid #f8f8f8;
    .same {
      border-top: 1px solid #E1E1E1;
      height: 50/37.5rem;
      color: #333;
      span {
        line-height: 50/37.5rem;
        padding-left: 50/37.5rem;
      }

    }
    .time {
      position: relative;
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 14/37.5rem;
        width: 22/37.5rem;
        height: 22/37.5rem;
        background: url('~@/common/image/time.png');
        background-size: 22/37.5rem 22/37.5rem;
      }
    }
    .phone {
      position: relative;
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 14/37.5rem;
        width: 22/37.5rem;
        height: 22/37.5rem;
        background: url('~@/common/image/phone.png');
        background-size: 22/37.5rem 22/37.5rem;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 14/37.5rem;
        width: 7/37.5rem;
        height: 12/37.5rem;
        background: url('~@/common/image/arrow.png');
        background-size: 7/37.5rem 12/37.5rem;
      }
    }
    .location {
      position: relative;
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 14/37.5rem;
        width: 22/37.5rem;
        height: 22/37.5rem;
        background: url('~@/common/image/location.png');
        background-size: 22/37.5rem 22/37.5rem;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 14/37.5rem;
        width: 7/37.5rem;
        height: 12/37.5rem;
        background: url('~@/common/image/arrow.png');
        background-size: 7/37.5rem 12/37.5rem;
      }
    }
  }

  .detail {
    padding-left: 16/37.5rem;
    padding-right: 16/37.5rem;
    h3 {
      font-weight: 300;
      color: #595959;
    }
  }
</style>
