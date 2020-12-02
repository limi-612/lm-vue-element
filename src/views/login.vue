<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user">
                <el-input v-model.number="ruleForm.user"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
export default {
    data(){
        return{
            ruleForm:{
                user:'',
                pass:'',
            },
            rules:{}
        }
    },
    methods:{
        submitForm(){
            Cookies.set('userInfo',this.ruleForm.user)
            this.$router.push({name:'home'})
        },
        resetForm(){

        }
    }
}
</script>