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
    id:'1',
    path: '/sys',
    name: 'sys',
    component: Main,
    redirect: 'sys',
    meta: { title: 'menus.systemConfig', icon: 'el-icon-menu' },
    children: [
      { id:'1-0', path: 'role-configuration', name: 'role-configuration',meta: { title: 'menus.roleConfiguration', icon: 'el-icon-menu' }, component: () => import('@/views/system/role-configuration/roleConfiguration.vue')},
    ]
  },
  {
    id:'2', 
    path: '/demo',
    name: 'demo',
    component: Main,
    redirect: 'demo',
    meta: { title: 'menus.demo', icon: 'el-icon-menu' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      { id:'2-0', path: 'about/:id', name: 'id',meta: { title: 'test-2-1', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'2-1', path: 'a', name: 'a',meta: { title: 'menus.throttleFunction', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/throttle-function/throttleFunction.vue')},
      { id:'2-2', path: 'b', name: 'b',meta: { title: 'menus.exportExcel', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/excel/exportExcel.vue')},
      { id:'2-3', path: 'c', name: 'c',meta: { title: 'menus.switchTheme', icon: 'el-icon-menu' }, component: () => import('@/views/study-file/switch-theme/switchTheme.vue')},
      { id:'2-4', path: 'd', name: 'd',meta: { title: 'test-2-5', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'2-5', path: 'e', name: 'e',meta: { title: 'test-2-6', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'2-6', path: 'f', name: 'f',meta: { title: 'test-2-7', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')}
    ]
  },
  {
    id:'3', 
    path: '/a-b',
    name: 'a-b',
    component: Main,
    redirect: 'about',
    meta: { title: 'test-3', icon: 'el-icon-menu' },
    children: [
      { id:'3-0', path: 'an/:id', name: 'an',meta: { title: 'test-3-1', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-1', path: 'av', name: 'av',meta: { title: 'test-3-2', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-2', path: 'bv', name: 'bv',meta: { title: 'test-3-3', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-3', path: 'cv', name: 'cv',meta: { title: 'test-3-4', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-4', path: 'dv', name: 'dv',meta: { title: 'test-3-5', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-5', path: 'ev', name: 'ev',meta: { title: 'test-3-6', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-6', path: 'fv', name: 'fv',meta: { title: 'test-3-7', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-7', path: 'gv', name: 'gv',meta: { title: 'test-3-8', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-8', path: 'hv', name: 'hv',meta: { title: 'test-3-9', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-9', path: 'kv', name: 'kv',meta: { title: 'test-3-10', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-10', path: 'lv', name: 'lv',meta: { title: 'test-3-11', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-11', path: 'rv', name: 'rv',meta: { title: 'test-3-12', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')},
      { id:'3-12', path: 'jv', name: 'jv',meta: { title: 'test-3-13', icon: 'el-icon-menu' }, component: () => import('@/views/About.vue')}
    ]
    
  }
]

export const routers = [
  loginRouter,
  ...otherRouter,
  ...appRouter
]
