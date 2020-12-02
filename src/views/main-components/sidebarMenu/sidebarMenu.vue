<template>
<!-- :collapse="true" 展开收起菜单 -->
     <el-menu
        :router="true"
        :unique-opened="true"
        :collapse="collapse"
        :default-active="routerActive"
        class="el-menu-vertical-demo  menu-t"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
        :background-color="theme.backgroundColor"
        :text-color="theme.textColor"
        :active-text-color="theme.activeTextColor">
        <el-submenu v-for="(item,index) in  menuList" :index="item.name" :key="index">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item v-for="(menuItem,idx) in item.children" :index="item.path+'/'+menuItem.path" :key="idx" @contextmenu.prevent.native="rightClicking(menuItem)">{{menuItem.meta.title}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
import { appRouter } from "../../../router/router"
export default {
    name:'side-bar-menu',
    props:{
        theme:{
            type:Object,
            default:()=>{
                let data={
                    backgroundColor:'#545c64',
                    textColor:'#fff',
                    activeTextColor:'#ffd04b',
                    tagType:'warning',
                }
                return data
            }
        },
        collapse:Boolean
    },
    data(){
        return{
            routerActive:this.$route.path,
            menuList:appRouter,
        }
    },
     watch: {
        $route(to) {
         this.routerActive = to.path;
        }
    },
    methods:{
        handleSelect(index,indexPath){
            // console.log('选中',index,indexPath)
        },
        handleOpen(){},
        handleClose(){},
        rightClicking(data){
            this.$router.push({name:'id',params:{id:123}})
        },
    },
    mounted(){
    }
}
</script>