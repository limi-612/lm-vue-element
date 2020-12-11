<template>
    <div id="main">
        <el-container>
        <!-- 头部导航-->
        <el-header>
            <header-nav-bar/>
        </el-header>
        <el-container class="container-main">
            <!-- 侧边栏菜单 -->
            <el-aside class="side-menu" :width="isCollapse ? '65px' : '240px'">
               <side-bar-menu :collapse="isCollapse" />
            </el-aside>
            <el-container>
                <!-- 头部多标签栏 -->
                <nav-tag-bar @changeCollapse="(active)=>{this.isCollapse=active}" :collapse="isCollapse"/>
                <!-- 中间内容 -->
                <el-main>
                    <keep-alive>
                        <router-view :key="key"></router-view>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
        </el-container>  
    </div>
</template>
<script>
import sideBarMenu from "../views/main-components/sidebarMenu/sidebarMenu"
import navTagBar from "../views/main-components/navTag/navTag"
import headerNavBar from "../views/main-components/headerNav/headerNav"
export default {
    components:{
        sideBarMenu,
        navTagBar,
        headerNavBar
    },
    data(){
        return{
             activeIndex2: '1',
             isCollapse:false
        }
    },
    methods:{
        handleSelect(){},
       
    },
    computed:{
        key(){
            let str=JSON.parse(JSON.stringify(this.$route.fullPath))
            return str
        }
    }
}
</script>
<style lang="less">
@import url("./main");
</style>