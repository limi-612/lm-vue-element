import Vue from 'vue';
import Vuex from 'vuex';
import { appRouter } from "../router/router"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        AllPages:appRouter,
        openPages:[
            { path: '/home', name: 'home',meta: { title: 'test-1-1', icon: 'el-icon-menu' }, component: () => import('@/views/Home.vue') }
        ],
        cachePage:['/home']
    },
    mutations: {
        // 改变方法
        setCachePage(state ,val){
            state.cachePage.push(val)
        },
        clearAllPages(state){
            state.openPages.splice(1);
            // console.log(state.openPages)
            state.cachePage=['/home']
        },
        closeSinglePage(state ,path){
            state.openPages.map((item, index) => {
                if (item.path === path) {
                    state.openPages.splice(index, 1);
                }
            });
        },
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
