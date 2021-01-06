import Vue from 'vue';
import Vuex from 'vuex';
import { appRouter,arguRouter } from "../router/router"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        AllPages:[...appRouter, ...arguRouter],
        openPages:[
            { path: '/home', name: 'home',meta: { title: 'test-1-1', icon: 'el-icon-menu' }, component: () => import('@/views/system/home/Home.vue') }
        ],
        cachePage:['/home'],
        AllShowPages:[...appRouter]
    },
    // 改变方法
    mutations: {
        //当前打开的所有页面
        setCachePage(state ,val){
            state.cachePage.push(val)
        },
        //删除所有tag
        clearAllPages(state){
            state.openPages.splice(1);
            state.cachePage=['/home']
        },
        //关闭除了当前路由和home的页面
        clearOthersPages(state ,router){
            let cachePage=['/home',router.path]

            let currentIndex = 0;
            state.openPages.forEach((item, index) => {
                if (item.path === router.path) {
                    currentIndex = index;
                }
            });
            if (currentIndex === 0) {
                state.openPages.splice(1);
            } else {
                state.openPages.splice(currentIndex + 1);
                state.openPages.splice(1, currentIndex - 1);
            }

            state.cachePage=cachePage

        },
        //关闭当前tag打开页面（单条）
        closeSinglePage(state ,path){
            state.openPages.map((item, index) => {
                if (item.path === path) {
                    state.openPages.splice(index, 1);
                }
            });
        },
        //关闭当前tag缓存页面（单条）
        closeCachePage(state ,path){
            state.cachePage.forEach((item,index) => {
                if(item==path){
                    state.cachePage.splice(index, 1);
                }
            });
        }
    },
    actions: {

    },
    modules: {
        
    }
});

export default store;
