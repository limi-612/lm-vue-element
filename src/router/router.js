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
      { path: 'home', name: 'home',meta: { title: 'test-1-1', icon: 'el-icon-menu' }, component: () => import('@/views/system/home/Home.vue') }
    ]
  },
];

export const appRouter = [
  {
    path: '/sys',
    name: 'sys',
    component: Main,
    redirect: 'sys',
    label:'menus.systemConfig',
    meta: { title: 'menus.systemConfig', icon: 'el-icon-menu' },
    children: [
      { path: 'role-configuration', name: 'role-configuration',label:'menus.roleConfiguration', meta: { title: 'menus.roleConfiguration', icon: 'el-icon-menu' }, component: () => import('@/views/system/role-configuration/roleConfiguration.vue')},
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    component: Main,
    redirect: 'demo',
    label:'menus.demo',
    meta: { title: 'menus.demo', icon: 'el-icon-menu' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      { path: 'about/:id', name: 'id',label:'test-2-1', meta: { title: 'test-2-1', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'a', name: 'a',label:'menus.throttleFunction', meta: { title: 'menus.throttleFunction', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/throttle-function/throttleFunction.vue')},
      { path: 'b', name: 'b',label:'menus.exportExcel', meta: { title: 'menus.exportExcel', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/excel/exportExcel.vue')},
      { path: 'c', name: 'c',label:'menus.switchTheme', meta: { title: 'menus.switchTheme', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/switch-theme/switchTheme.vue')},
      { path: 'd', name: 'd',label:'test-2-5', meta: { title: 'test-2-5', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'e', name: 'e',label:'test-2-6', meta: { title: 'test-2-6', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'f', name: 'f',label:'test-2-7', meta: { title: 'test-2-7', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')}
    ]
  },
  {
    path: '/a-b',
    name: 'a-b',
    component: Main,
    redirect: 'about',
    label:'test-3', 
    meta: { title: 'test-3', icon: 'el-icon-menu' },
    children: [
      { path: 'an/:id', name: 'an',label:'test-3-1', meta: { title: 'test-3-1', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'av', name: 'av',label:'test-3-2', meta: { title: 'test-3-2', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'bv', name: 'bv',label:'test-3-3', meta: { title: 'test-3-3', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'cv', name: 'cv',label:'test-3-4', meta: { title: 'test-3-4', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'dv', name: 'dv',label:'test-3-5', meta: { title: 'test-3-5', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'ev', name: 'ev',label:'test-3-6', meta: { title: 'test-3-6', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'fv', name: 'fv',label:'test-3-7', meta: { title: 'test-3-7', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'gv', name: 'gv',label:'test-3-8', meta: { title: 'test-3-8', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'hv', name: 'hv',label:'test-3-9', meta: { title: 'test-3-9', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'kv', name: 'kv',label:'test-3-10', meta: { title: 'test-3-10', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'lv', name: 'lv',label:'test-3-11', meta: { title: 'test-3-11', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'rv', name: 'rv',label:'test-3-12', meta: { title: 'test-3-12', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { path: 'jv', name: 'jv',label:'test-3-13', meta: { title: 'test-3-13', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')}
    ]
    
  }
]

export const routers = [
  loginRouter,
  ...otherRouter,
  ...appRouter
]
