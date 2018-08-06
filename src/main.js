// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource';
Vue.use(vueResource);

import 'amfe-flexible'

//引用elementui
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
Vue.config.productionTip = false
//引用fastclick 解决移动端延迟点击300ms
import fastclick from 'fastclick'
fastclick.attach(document.body)
//引用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
