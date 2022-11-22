<template>
<div>
    <div class="login"></div>
    <div class="login-form">
        <el-form :model="form" ref="loginForm" label-width="50px" class="demo-ruleForm">
            <div class="text-header">登录</div>
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="form.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" size="mini" @click="submitForm()">登录</el-button>
                <el-button @click="resetForm()" size="mini">重置</el-button>
            </el-form-item>
            <div class="tips">账号：Wendy 密码：123</div>
        </el-form>
    </div>
</div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import {useRouter} from "vue-router";
import request from "@/request/index";
import show from '@/assets/show.png';
import axios from "axios";

export default defineComponent({
    setup() {
        const router = useRouter();
        const loginForm = ref(null);
        const form = reactive({
            account: '',
            password: ''
        });

         const submitForm = () => {
            console.log(form);

           let data = {
             account:form.account,
             password:form.password
           };
            // localhost修改
           request.post('http://192.168.43.51:9090/petshop/operator/login',data).then(function (response){
             let res = response;
             // alert(JSON.stringify(res.status));
             if(res.status == 200){
               localStorage.setItem('user', JSON.stringify(form));
               router.push('/');
             }else{
               ElMessage('账号或密码错误');
               return;
             }
           });

        };

        const resetForm = () => {
            loginForm.value.resetFields();
        };
        return {
            form,
            submitForm,
            resetForm,
            loginForm
        };
    },
});
</script>

<style scoped lang="less">
    .text-header{
        text-align: center;
        font-size: 20px;
        color: #fff;
        margin-bottom: 50px;
    }
    .login{
        width: 100vw;
        height: 100vh;
        background: url(~@/assets/show.png);
        background-repeat: no-repeat;
        background-size: cover;
        filter:blur(1px);
    }
    .login-form{
        position: absolute;
        width: 400px;
        height: 400px;
        top: 200px;
        right: 300px;
        border-radius: 10px;
        box-shadow: 1px 1px 5px #333;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<style lang="less">
    .login-form {
        .el-form-item__label{
         color: #fff;
        }
    }
</style>
