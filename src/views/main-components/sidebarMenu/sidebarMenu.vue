<template>
<!-- :collapse="true" 展开收起菜单 -->
    <el-menu
        :router="true"
        :unique-opened="true"
        :collapse-transition="false"
        :collapse="collapse"
        :default-active="routerActive"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu v-for="(item,index) in  menuList" :index="item.name" :key="index">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{$t(item.meta.title)}}</span>
            </template>
            <el-menu-item v-for="(menuItem,idx) in item.children" :index="item.path+'/'+menuItem.path" :key="idx" @contextmenu.prevent.native="rightClicking(menuItem)">{{$t(menuItem.meta.title)}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    name:'side-bar-menu',
    props:{
        collapse:Boolean
    },
    data(){
        return{
            routerActive:this.$route.path,
            menuList:this.$store.state.AllPages,
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
            this.$router.push({name:'id',params:{id:new Date().getTime()}})
        },
    },
    mounted(){
    }
}
</script>