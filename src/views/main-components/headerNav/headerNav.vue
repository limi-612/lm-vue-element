<template>
    <div class="header-nav-bar">
        <!-- <img src="/img/econ.6482186c.svg" > -->
        <div class="h-nav-left"><span class="iconfont icon-yyglxt" style="font-size:26px"></span> Design System</div>
        <div class="h-nav-right">
            <!-- <i class="el-icon-full-screen"></i> -->
            <ul class="h-nav-right-ul">
                <li><fullscreen v-model="isFullscreen"/></li>
                <li>
                    <el-dropdown size="small"  @command="changeLang">
                        <span class="iconfont icon-yuyan"></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
                            <el-dropdown-item command="en-US">English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    <el-dropdown size="small"  @command="operationUser">
                        <span class="el-dropdown-link">
                            <i class="el-icon-user-solid"></i>admin
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="modify">修改资料</el-dropdown-item>
                            <el-dropdown-item command="dropOut">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Cookies from 'js-cookie';
import Fullscreen from '../fullscreen/fullscreen'
export default {
    name: 'header-nav-bar',
    components:{
        Fullscreen
    },
    data(){
        return{
            icon:require("@/assets/icon/econ.svg"),
            isFullscreen:false
        }
    },
    methods:{
        changeLang(command){
            command.includes('zh-CN') ? Vue.config.lang ='zh-CN' : Vue.config.lang ='en-US'
        },
        operationUser(command){
            if(command.includes('modify')){

            }else{
                Cookies.remove('userInfo');
                this.$router.push({name:'login'})
            }
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