<template>
  <div class="invite">
    <!--<mt-header title="好友邀请,接收邀请...">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
    <div class="content">
      <div class="avatar"></div>
      <div class="username">可爱而炸天</div>
      <div class="text">邀请你用拇信，接受邀请，双方都可获得拇豆当钱花</div>
      <div class="gain">
        <span class="num">20</span>
        <span class="mudou">拇豆</span>
      </div>
      <div class="box">
        <input type="number" class="number" placeholder="请输入手机号" ref="number" v-model="mobileNumber">
        <div class="line"></div>
        <input type="number" class="msg" placeholder="短信验证码" ref="code" v-model="code">

        <input type="button" class="getmsg" value="获取验证码" @click="getmsg()" ref="getmsg">
        <div class="line"></div>
        <input type="password" class="pwd" placeholder="登录密码" ref="pwd" v-model="password">
      </div>
      <a href="javascript:(0)" class="download" @click="click()">接受邀请</a>
      <img src="~@/common/image/coin-l.png" alt="" class="coin-l">
      <img src="~@/common/image/coin-r.png" alt="" class="coin-r">
      <img src="~@/common/image/cornert.png" alt="" class="cornert">
      <img src="~@/common/image/cornerb.png" alt="" class="cornerb">
      <img src="~@/common/image/wave.png" alt="" class="wave">
      <img src="~@/common/image/coin-r.png" alt="" class="coin-r2">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {registry,getSMSMsg} from 'api/getdata'
  export default{
    data(){
      return {
          mobileNumber:'',
          code:'',
          password:''
      }
    },
    methods: {
      getmsg(){
        let mobilevalid = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
        if (!mobilevalid.test(this.$refs.number.value)) {
          alert('请输入正确的手机号码！')
          return;
        }
        clearInterval(timer)
        let mobileNumber = +this.$refs.number.value

        let dat = {"mobileNumber": mobileNumber}

        getSMSMsg(dat).then((res)=>{

        })
        let getmsg = this.$refs.getmsg
        let minute = 20;
        getmsg.disabled = true
        let timer = setInterval(function () {
          getmsg.style.color = '#ccc'
          getmsg.value = "重新发送(" + minute + "s)";
          minute--;
          if (minute < 0) {
            clearInterval(timer)
            getmsg.style.color = '#F94425 '
            getmsg.value = '获取验证码';
            getmsg.disabled = false
          }
        }, 1000)
      },
      click(){
        let mobilevalid = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
        if (!mobilevalid.test(this.$refs.number.value)) {
          console.log('请输入正确的手机号码！')
          return;
        }else if(this.$refs.code.value === ''){
          alert('请填写正确的验证码！')
          return
        }else if(this.$refs.pwd.value === ''){
          alert('请输入密码！')
          return
        }

        if ((this.$refs.number.value !== '')
          && (this.$refs.code.value !== '')
          && (this.$refs.pwd.value !== '')) {
          console.log('yes');
          this.$router.push('/register')
        } else {
          console.log('no');
          return
        }

        let dat = {"mobileNumber": this.mobileNumber, "code": this.code, "password": this.password}
        registry(dat).then((res) => {
          this.result = res.result
          console.log(this.result);

        })
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">
  @import '~@/common/style/variable.less';
  @import '~@/common/style/mixin.less';

  .invite {
    height: 100%;
    background-color: #fcfcf4;
    left: 0;
    top: 0;
    overflow: scroll;
    .content {
      position: absolute;
      z-index: 10;
      top: 78/37.5rem;
      left: 18/37.5rem;
      display: flex;
      flex-direction: column;
      /*justify-content: center;*/
      padding-top: 30/37.5rem;
      align-items: center;
      width: 339/37.5rem;
      height: 506/37.5rem;
      background: #f94d2f;
      border-radius: 20px;
      .avatar {
        width: 65/37.5rem;
        height: 65/37.5rem;
        background-color: gray;
        border-radius: 50%;
        border: 2px solid #FBFBED;
      }
      .username {
        font-size: 18/37.5rem;
        color: #FAFAF0;
        margin-top: 15/37.5rem;
        line-height: 42/37.5rem;
      }
      .text {
        font-size: 14/37.5rem;
        color: #FAFAF0;
        line-height: 22/37.5rem;
      }
      .gain {
        margin-top: 30/37.5rem;
        .num {
          font-size: 48/37.5rem;
          color: #FAFAF0;
        }
        .mudou {
          font-size: 15/37.5rem;
          color: #FAFAF0;
          font-weight: 100;
        }
      }
      .box {
        width: 300/37.5rem;
        margin-top: 20/37.5rem;
        background: #FFFFFF;
        border-radius: 4px;
        position: relative;
        .line {
          height: 1px;
          background-color: #f0f0f0;
          width: 100%;
        }
        .getmsg {
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -10/37.5rem;
          font-size: 13/37.5rem;
          color: #F94425;
          border: none;
          background: #fff;
        }
        .number, .msg, .pwd {
          margin: 0;
          background: none;
          outline: none;
          border: 0px;
          display: block;
          padding-left: 20/37.5rem;
          width: 100%;
          font-size: 15/37.5rem;
          color: #3b3b3b;
          height: 40/37.5rem;
          line-height: 40/37.5rem;
        }
      }
      .download {
        margin-top: 30/37.5rem;
        width: 300/37.5rem;
        height: 42/37.5rem;
        color: #793C21;
        font-size: 18/37.5rem;
        line-height: 42/37.5rem;
        text-align: center;
        display: block;
        background: #FDD642;
        border-radius: 4px;
        text-decoration: none;
        :visited, :link {
          color: #793C21;
        }
      }
      .coin-l {
        width: 30/37.5rem;
        height: 27/37.5rem;
        position: absolute;
        left: 60/37.5rem;
        top: -34/37.5rem;
      }
      .coin-r {
        width: 36/37.5rem;
        height: 33/37.5rem;
        position: absolute;
        right: 80/37.5rem;
        top: -40/37.5rem;
      }
      .cornert {
        width: 15/37.5rem;
        height: 14/37.5rem;
        position: absolute;
        right: 45/37.5rem;
        top: -33/37.5rem;
      }
      .cornerb {
        width: 14/37.5rem;
        height: 15/37.5rem;
        position: absolute;
        left: 60/37.5rem;
        bottom: -30/37.5rem;
      }
      .wave {
        width: 25/37.5rem;
        height: 12/37.5rem;
        position: absolute;
        left: 100/37.5rem;
        bottom: -28/37.5rem;
      }
      .coin-r2 {
        width: 36/37.5rem;
        height: 33/37.5rem;
        position: absolute;
        z-index: 0;
        right: 50/37.5rem;
        bottom: -21/37.5rem;
      }
    }
  }
</style>
