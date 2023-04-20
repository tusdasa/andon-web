<script setup>
import { ElMessage } from 'element-plus'
import { reactive } from 'vue';
import { userStore } from '../../stores/userStore'
import { useRouter } from 'vue-router'
// useRoute
const router = useRouter()
let { isLogin, login } = userStore();

const formLabelAlign = reactive({
    name: '',
    password: '',
})
const onSubmit = () => {
    login();
    isLogin = true
    console.log(isLogin)

    ElMessage({
        message: '登录成功',
        type: 'success',
    })

    router.push({ name: 'home' })
}
</script>
<template>
    <div class="login">
        <el-form label-position="top" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
            <el-form-item label="Name">
                <el-input type="text" placeholder="输入英文名称" v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="password">
                <el-input type="password" placeholder="输入密码" show-password v-model="formLabelAlign.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<style>
.login {
    width: 300px;
    height: 400px;
    margin: 100px auto;
}
</style>
  