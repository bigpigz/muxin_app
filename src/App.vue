<template>
  <div id="app">
    <m-footer ref="footer">
      <div @click="routerTo('/notice',0)"
           class="menu-item"
           :class="[selectIndex === 0 ? 'router-link-active':'']">
        <i class="iconfont" :class="[selectIndex === 0 ? 'icon-shouyekaobei':'icon-shouye']"></i><span>消息</span>
      </div>
      <div @click="routerTo('/contacts',1)"
           class="menu-item"
           :class="[selectIndex === 1 ? 'router-link-active':'']">
        <i class="iconfont" :class="[selectIndex === 1 ? 'icon-shangjiabianse':'icon-shangjia']"></i><span>联系人</span>
      </div>
      <div @click="routerTo('/life',2)"
           class="menu-item"
           :class="[selectIndex === 2 ? 'router-link-active':'']">
        <i class="iconfont" :class="[selectIndex === 2 ? 'icon-caifubianse':'icon-caifu']"></i><span>生活</span>
      </div>
      <div @click="routerTo('/me',3)"
           class="menu-item"
           :class="[selectIndex === 3 ? 'router-link-active':'']">
        <i class="iconfont" :class="[selectIndex === 3 ? 'icon-huiyuanbianse':'icon-huiyuan']"></i><span>我</span>
      </div>
    </m-footer>


    <keep-alive>
      <transition :name="transitionName">
        <router-view class="Router"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script type="text/javascript">
  import MFooter from 'base/m-footer/footer.vue'
  export default{
    data(){
      return {
        selectIndex: 3,
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    },
    methods: {
      routerTo(url, index){
        this.selectIndex = index
        this.$router.replace(url)
      }
    },
    components: {
      MFooter,
    },
  }
</script>

<style lang="less" scoped type="text/less">
  @import '~@/common/style/index.less';
  @import '~@/common/style/variable.less';

  #app {
    font-size: @font-size-medium;
  }

  .Router {
    position: absolute;
    width: 100%;
    transition: all .8s ease;
    //top: 40px;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
