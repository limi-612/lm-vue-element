import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router'
import VueI18n from 'vue-i18n'
import  './locale/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import myGlobalMethod from './libs/globalApproach.js'
//进度条样式
import 'nprogress/nprogress.css'

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  provide:{myGlobalMethod},  //父组件注入方法，传输给子组件（无论层次多深）
  render: h => h(App),
  mounted(){
    this.$store.commit('clearAllPages')
  }
})
