import Vue from 'vue'
import { routers } from './router';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import Util from '../libs/util'

Vue.use(VueRouter);
// 路由配置
const RouterConfig = {
  routes: routers
};

export const router = new VueRouter(RouterConfig);

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (Cookies.get('userInfo')) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({
        name: 'login'
      });
    }
  }
})

router.afterEach((to,from) => {
  // console.log(router.app)
  Util.openNewPage(router.app,to);
  Util.setTitle(router.app,to)
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}