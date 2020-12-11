import Main from "@/views/Main.vue"

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: "Login"  //this.$t('login')
  },
  component: () => import('@/views/login.vue')
};

export const otherRouter = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: 'home',
    meta: { title: 'test-1', icon: 'el-icon-menu' },
    children: [
      { path: 'home', name: 'home',meta: { title: 'test-1-1', icon: 'el-icon-menu' }, component: () => import('@/views/Home.vue') }
    ]
  },
];

export const appRouter = [
 
  {
    path: '/a-a',
    name: 'aa',
    component: Main,
    redirect: 'about',
    meta: { title: 'test-2', icon: 'el-icon-menu' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      { path: 'about/:id', name: 'id',meta: { title: 'test-2-1', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'a', name: 'a',meta: { title: 'menus.throttleFunction', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/throttle-function/throttleFunction.vue')},
      { path: 'b', name: 'b',meta: { title: 'menus.exportExcel', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/excel/exportExcel.vue')},
      { path: 'c', name: 'c',meta: { title: 'menus.switchTheme', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/switch-theme/switchTheme.vue')},
      { path: 'd', name: 'd',meta: { title: 'test-2-5', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'e', name: 'e',meta: { title: 'test-2-6', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'f', name: 'f',meta: { title: 'test-2-7', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')}
    ]
  },
  {
    path: '/a-b',
    name: 'a-b',
    component: Main,
    redirect: 'about',
    meta: { title: 'test-3', icon: 'el-icon-menu' },
    children: [
      { path: 'an/:id', name: 'an',meta: { title: 'test-3-1', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'av', name: 'av',meta: { title: 'test-3-2', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'bv', name: 'bv',meta: { title: 'test-3-3', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'cv', name: 'cv',meta: { title: 'test-3-4', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'dv', name: 'dv',meta: { title: 'test-3-5', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'ev', name: 'ev',meta: { title: 'test-3-6', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'fv', name: 'fv',meta: { title: 'test-3-7', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'gv', name: 'gv',meta: { title: 'test-3-8', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'hv', name: 'hv',meta: { title: 'test-3-9', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'kv', name: 'kv',meta: { title: 'test-3-10', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'lv', name: 'lv',meta: { title: 'test-3-11', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'rv', name: 'rv',meta: { title: 'test-3-12', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'jv', name: 'jv',meta: { title: 'test-3-13', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')}
    ]
    
  }
]

export const routers = [
  loginRouter,
  ...otherRouter,
  ...appRouter
]
