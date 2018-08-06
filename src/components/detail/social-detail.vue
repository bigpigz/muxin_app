<template>
  <scroll class="detail-wrapper">
    <div>
     <!-- <mt-header title="交友">
        <router-link to="/life" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="people">
        <div class="left">
          <div class="avatar"></div>
          <span class="name">何艳</span>
          <span class="dec">车找人</span>
        </div>
        <div class="right">
          <span class="des">15分钟前</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="content">
        <p>长沙-常德，走高速，现在还剩2个座位，可在汽车西站上车，本人住银盆岭，走什么什么路到骑车西站，费用150元/人
          <br/>车上我带了一只宠物狗，如果介意的人就算啦
        </p>

        <div class="tip">
          <span class="reading">阅读&nbsp;&nbsp;321</span>
          &nbsp;&nbsp;
          <span class="reply">回复&nbsp;&nbsp;1</span>
          &nbsp;&nbsp;
          <span class="tips">走高速</span>
        </div>
        <div class="image">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
          <div class="five"></div>
          <div class="six"></div>
          <div class="seven"></div>
          <div class="eight"></div>
          <div class="nine"></div>
        </div>
      </div>
      <div class="line"></div>
      <div class="comment">
        <div class="user">
          <div class="left">
            <div class="avatar"></div>
            <span class="id">爱思静的小喇叭</span>
            <span class="text">联系人啦以后都没人接听，不知道是真是假</span>
          </div>
          <div class="right">刚刚</div>
        </div>
        <div class="line"></div>
        <div class="user">
          <div class="left">
            <div class="avatar"></div>
            <span class="id">爱思静的小喇叭</span>
            <span class="text">联系人啦以后都没人接听，不知道是真是假</span>
          </div>
          <div class="right">刚刚</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="commnet-box">
        <i class="el-icon-share"></i>
        <input type="text" placeholder="评论">
      </div>-->
      <div class="title">
        <h1>拇信</h1>
        <span></span>
        <a href="javascript:void(0)">打开app</a>
      </div>
      <div class="line"></div>
      <div class="content">
        <div class="people">
          <div class="left">
            <div class="avatar">
              <img :src="result.user.profile == undefined ? '' : result.user.profile.url" width="100%" height="100%">
            </div>
            <span class="name">{{result.user.nickname}}</span>
            <!--<span class="dec">{{result.cat_id == 1 ? '车找人' : '人找车'}}</span>-->
          </div>
          <div class="right">
            <span class="des">楼主</span>
          </div>
        </div>
        <div class="journey">
          <!--<div class="road">{{result.pub_body.from}}-{{result.pub_body.to}}</div>-->
          <div class="redpack">红包领取</div>
          <div class="tips">

            <span v-for="item in comments"><img :src="item.user.profile.url" width="100%" height="100%"></span>
          </div>
          <div class="line line1"></div>
        </div>
        <div class="descript">
          <span>{{result.pub_body.body}}</span>
        </div>
        <!--<div class="tip">-->
        <!--<span class="reading">阅读&nbsp;&nbsp;321</span>-->
        <!--&nbsp;&nbsp;-->
        <!--<span class="reply">回复&nbsp;&nbsp;1</span>-->
        <!--&nbsp;&nbsp;-->
        <!--<span class="tips">走高速</span>-->
        <!--</div>-->
        <div class="image">
          <div class="one" v-for="item in result.pub_body.pics">
            <img :src="item" width="100%" height="100%">
          </div>
        </div>
      </div>
      <!--<div class="line"></div>-->
      <div class="comment">
        <div class="comment-top">
          <div class="left">评论&nbsp;&nbsp;{{result.comments}}</div>
          <div class="right">
            <span class="share">分享&nbsp;&nbsp;{{result.shares}}</span>
            <span class="agree">赞&nbsp;&nbsp;{{result.likes}}</span>
          </div>
        </div>
        <div class="user" v-for="item in comments">
          <div class="left">
            <div class="avatar">
              <img :src="item.user.profile.url == undefined ? '' : item.user.profile.url" width="100%" height="100%">
            </div>
            <span class="id">{{item.name}}</span>
            <span class="text">{{item.post_body}}</span>
          </div>
          <div class="right">{{getTime(item.dateline)}}</div>
        </div>
        <!--<div class="line"></div>-->
      </div>
    </div>
  </scroll>

</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {carPoolDetial, getUrl, carPoolCommentList} from 'api/getdata'
  export default {
    data(){
      return {
        result: [],
        comments: []
      }
    },
    methods: {
      handleClose(url){
//        this.$router.replace(url)
        this.$router.go(-1)
      },
      getTime(time){
        let unixTime = new Date(time * 1000).toLocaleString()
        unixTime = unixTime.substr(5).replace('/', '月').replace('上午', '').replace('下午', '')
        return unixTime
      },
      _carPoolDetial(){
        let url = getUrl()
        let dat = {"mobileNumber": '18816745751', "id": url.id}
        carPoolDetial(dat).then((res) => {
          this.result = res.result
        })
        carPoolCommentList(dat).then((res) => {
          this.comments = res.result
        })
      },

    },
    created(){
      this._carPoolDetial()
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="less" scoped type="text/less">
  @import '~@/common/style/variable.less';
  @import '~@/common/style/mixin.less';

  /*.detail-wrapper {
    height: 100%;
    background-color: #fff;
    left: 0;
    top: 0;
    overflow:hidden;
  }

  .mint-header {
    height: 45/37.5rem;
    padding-left: 16/37.5rem;
    padding-right: 16/37.5rem;
    background: @color-bgc;
    color: @color-white;
    font-size: 18px;
  }

  .people {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80/37.5rem;
    margin-left: 16/37.5rem;
    margin-right: 16/37.5rem;
    position: relative;
    .left {
      .avatar {
        line-height: 40/37.5rem;
        display: inline-block;
        width: 40/37.5rem;
        height: 40/37.5rem;
        border-radius: 50%;
        background: @color-bgc;
      }
      span {
        margin-left: 10px;
        position: relative;
        top: -13/37.5rem;
      }
      .name {
        font-size: 18px;
      }
      .dec {
        display: inline-block;
        width: 53/37.5rem;
        height: 20/37.5rem;
        text-align: center;
        color: white;
        font-weight: normal;
        vertical-align: center;
        background-color: #437BDC;
      }
    }
    .right {
      color: #7F7F7F;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }

  .content {
    margin-left: 16/37.5rem;
    margin-right: 16/37.5rem;
    padding-bottom: 8/37.5rem;
    p {
      font-size: 16px;
      line-height: 24px;
    }
    .tip {
      color: #B3B3B3;
      .tips {
        padding: 2px 4px;
        display: inline-block;
        border: 1px solid #ccc;
        color: #1954BA
      }
    }
    .image {
      margin-top: 10px;
      div {
        display: inline-block;
        height: 100/37.5rem;
        width: 32%;
        background: #ccc;
      }
    }
  }

  .comment {
    .user {
      height: 60/37.5rem;
      margin-left: 16/37.5rem;
      margin-right: 16/37.5rem;
      margin-top: 15/37.5rem;
      .left {
        float: left;
        position: relative;
        .avatar {
          margin-right: 10/37.5rem;
          float: left;
          display: inline-block;
          width: 40/37.5rem;
          height: 40/37.5rem;
          border-radius: 50%;
          background: @color-bgc;
        }
        .id {
          font-size: 14px;
          color: #8993AB;
          margin-top: 5/37.5rem;
        }
        .text {
          position: absolute;
          width: 240/37.5rem;
          font-size: 13px;
          color: #595959;
        }
      }
      .right {
        float: right;
        margin-top: 5/37.5rem;
      }

    }
  }

  .commnet-box{
    width: 100%;
    background-color: #d8d8d8;
    height: 50/37.5rem;
    position: relative;
    .el-icon-share{
      position: absolute;
      top: 20px;
      right: 30px;
      color:#ccc;
    }
    input{
      color: #787878;
      background-color: #fff;
      margin-left: 16/37.5rem;
      margin-right: 16/37.5rem;
      height: 40/37.5rem;
      width: 83%;
      padding-left: 15/37.5rem;
      padding-right: 15/37.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-top: 3px;
    }
  }*/
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

  .people {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //height: 80/37.5rem;
    padding-top: 15/37.5rem;
    //margin-left: 16/37.5rem;
    //margin-right: 16/37.5rem;
    position: relative;
    .left {
      .avatar {
        line-height: 30/37.5rem;
        display: inline-block;
        width: 30/37.5rem;
        height: 30/37.5rem;
        border-radius: 50%;
        background: @color-bgc;
        img {
          border-radius: 50%;
        }
        //position: absolute;
      }
      span {
        margin-left: 10px;
        position: relative;
        top: -9/37.5rem;
      }
      .name {
        font-size: 14px;
      }
      .dec {
        display: inline-block;
        width: 53/37.5rem;
        height: 20/37.5rem;
        padding-left: 5/37.5rem;
        padding-right: 5/37.5rem;
        text-align: center;
        color: white;
        font-size: 12px;
        color: #333;
        font-weight: normal;
        vertical-align: center;
        border: 1px solid #979797;
        border-radius: 5px;
        //background-color: #437BDC;
      }
    }
    .right {
      width: 38/37.5rem;
      height: 24/37.5rem;
      text-align: center;
      background-color: #F6F6F6;
      border-radius: 5px;
      border: 1px solid #979797;
      .des {
        color: #2F6DD9;
        font-size: 12px;
      }
    }
  }

  .journey {
    .road {
      margin-top: 10/37.5rem;
      color: #DF5932;
      font-size: 15px;
    }
    .redpack{
      color: #b3b3b3;
      padding-top: 5px;
      padding-bottom: 2px;
      letter-spacing: -0.31px;
    }
    .tips {
      padding-top: 5/37.5rem;
      padding-bottom: 5/37.5rem;
      /*border-bottom: 2px solid #e0e0e0;*/
      span {
        display: inline-block;
        //padding: 2/37.5rem 5/37.5rem;
        width: 30/37.5rem;
        height: 30/37.5rem;
        background-color: #eee;
        vertical-align: middle;
        margin-right: 15px;
        text-align: center;
        color: #7f7f7f;
        border: 1px solid #ccc;
        border-radius: 50%;
        img {
          border-radius: 50%;
        }
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  .line1{
    width: 100%;
    height: 2px;
    background-color: #e0e0e0;
    margin-top: 5px;
    margin-left: -25px;
    padding-left: 50px;
  }

  .content {
    margin-left: 16/37.5rem;
    margin-right: 16/37.5rem;
    padding-bottom: 8/37.5rem;
    .descript {
      padding-top: 10/37.5rem;
      padding-bottom: 10/37.5rem;
      span {
        font-size: 16px;
        line-height: 24px;
      }
    }
    .tip {
      color: #B3B3B3;
      .tips {
        padding: 2px 4px;
        display: inline-block;
        border: 1px solid #ccc;
        color: #1954BA
      }
    }
    .image {
      margin-top: 10px;
      div {
        display: inline-block;
        height: 100/37.5rem;
        width: 32%;
        margin-right: 2px;
        background: #ccc;
      }
    }
  }

  .comment {
    .comment-top {
      line-height: 30/37.5rem;
      font-size: 13px;
      border-top: 8px solid #F0F0F0;
      border-bottom: 2px solid #E1E1E1;
      padding-left: 16/37.5rem;
      padding-right: 16/37.5rem;
      height: 30/37.5rem;
      .left {
        float: left;
      }
      .right {
        float: right;
        color: #B3B3B3;
        .share {
          padding-right: 20/37.5rem;
        }
      }
    }
    .user {
      height: 60/37.5rem;
      padding-left: 16/37.5rem;
      padding-right: 16/37.5rem;
      padding-top: 15/37.5rem;

      border-bottom: 2px solid #E1E1E1;
      .left {
        float: left;
        position: relative;
        .avatar {
          margin-right: 10/37.5rem;
          float: left;
          display: inline-block;
          height: 30/37.5rem;
          width: 30/37.5rem;
          border-radius: 50%;
          background: @color-bgc;
          img {
            border-radius: 50%;
          }
        }
        .id {
          font-size: 14px;
          color: #8993AB;
          margin-top: 5/37.5rem;
        }
        .text {
          position: absolute;
          width: 260/37.5rem;
          font-size: 13px;
          color: #595959;
        }
      }
      .right {
        float: right;
        color: #B3B3B3;
        //margin-top: 5/37.5rem;
      }

    }
  }

  .commnet-box {
    width: 100%;
    background-color: #d8d8d8;
    height: 50/37.5rem;
    position: relative;
    .el-icon-share {
      position: absolute;
      top: 20px;
      right: 30px;
      color: #ccc;
    }
    input {
      color: #787878;
      background-color: #fff;
      margin-left: 16/37.5rem;
      margin-right: 16/37.5rem;
      height: 40/37.5rem;
      width: 83%;
      padding-left: 15/37.5rem;
      padding-right: 15/37.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-top: 3px;
    }
  }
</style>
