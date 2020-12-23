<template>
    <div class="header-nav-bar header-meun">
        <!-- <img src="/img/econ.6482186c.svg" > -->
        <div class="h-nav-left"><span class="iconfont icon-shengdantubiao-05" style="font-size:26px"></span>&nbsp&nbsp<span>Design System</span></div>
        <div class="h-nav-right">
            <!-- <i class="el-icon-full-screen"></i> -->
            <ul class="h-nav-right-ul">
                <li><fullscreen v-model="isFullscreen"/></li>
                <li>
                    <el-dropdown size="small"  @command="operationTheme">
                        <span class="el-dropdown-link">
                            <!-- <i class="el-icon-magic-stick"></i> -->
                            <span class="iconfont icon-zhuti"></span>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item,index) in themes" :key="index" :command="item.value"><span :class="item.class"></span>&nbsp{{$t(item.name)}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
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
                            <el-dropdown-item command="modify">{{$t('common.personalSpace')}}</el-dropdown-item>
                            <el-dropdown-item command="dropOut">{{$t('common.dropOut')}}</el-dropdown-item>
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
import Util from '../../../libs/util'
export default {
    name: 'header-nav-bar',
    components:{
        Fullscreen
    },
    data(){
        return{
            icon:require("@/assets/icon/econ.svg"),
            isFullscreen:false,
            themes: [
                { name: 'themes.themeGray', value: 'theme-gray' ,class:'span-gray'},
                { name: 'themes.themeBlue', value: 'theme-blue' ,class:'span-blue'},
            ],
            theme: '',

        }
    },
    methods:{
        changeLang(command){
            command.includes('zh-CN') ? Vue.config.lang ='zh-CN' : Vue.config.lang ='en-US'
            Util.setTitle(this,this.$route)
        },
        operationUser(command){
            if(command.includes('modify')){

            }else{
                Cookies.remove('userInfo');
                this.$router.push({name:'login'})
                //清理权限管理页面存储的数据
                // Object.keys(localStorage).forEach(item => item.indexOf('role-') != -1 ? localStorage.removeItem(item) : '')
            }
        },
        operationTheme(theme){
            window.localStorage.setItem('theme', theme);
            // 设置body类
            const body = document.querySelector('body');
            this.themes.forEach((t) => {
                body.classList.remove(t.value);
            });
            body.classList.add(theme);
        }
    },
    created() {
        // 初始化获取主题
        this.theme = window.localStorage.getItem('theme') || this.themes[0].value;
        // 设置body类
        const body = document.querySelector('body');
        body.classList.add(this.theme);
    }
}
</script>
<style lang="less" scoped>
/deep/ .el-dropdown{
    height: 100%;
    overflow: hidden;
}
</style>