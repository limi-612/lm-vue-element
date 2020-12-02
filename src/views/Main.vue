<template>
    <div id="main">
        <el-container>
        <el-header>
            <!-- 顶部菜单 -->
            <header-nav-bar/>
        </el-header>
        <el-container class="container-main">
            <el-aside width="240px">
                <!-- 菜单 -->
               <side-bar-menu :collapse="isCollapse" />
            </el-aside>
            <el-container>
            <!-- <el-footer class="nav-tag">Footer</el-footer> -->
            <nav-tag-bar/>
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