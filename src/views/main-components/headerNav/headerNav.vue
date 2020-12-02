<template>
    <div class="header-nav-bar">
        <!-- <img src="/img/econ.6482186c.svg" > -->
        <div class="h-nav-left"></el-avatar>Ericsson Design System</div>
        <div class="h-nav-right">
            <i class="el-icon-full-screen"></i>
            <i class="el-icon-full-screen"></i>
            <!-- <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
                语言
            <i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文</el-dropdown-item>
                <el-dropdown-item>英文</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">admin
            <i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'header-nav-bar',
    data(){
        return{
            icon:require("@/assets/icon/econ.svg")
        }
    }
}
</script>
<style lang="less" scoped>
/deep/ .el-dropdown{
    height: 100%;
    overflow: hidden;
}
</style>