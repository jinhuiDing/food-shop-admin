<template>
    <div class="login_wrap">
        <div class="form_wrap">
            <el-form :model="loginData"
                     ref="loginForm" label-width="100px">
                <el-form-item label="用户名" prop="username" :rules="[
                    {
                        required:true,
                        message:'请输入用户名',
                        trigger:'blur'
                    }
                ]">
                    <el-input v-model="loginData.username" autocomplete="false" placeholder="请输入用户名"/>
                </el-form-item>
                <el-form-item prop="password" label="密码" :rules="[
                    {
                        required:true,
                        message:'密码不能为空',
                        trigger:'blur'
                    }
                ]">
                    <el-input v-model="loginData.password" type="password" autocomplete="false"
                              placeholder="请输入密码"/>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="submit_btn" @click="submitForm"
            >登陆
            </el-button>
            <p>{{num}}</p>
        </div>

    </div>
</template>

<script>
    import {reactive, toRefs} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'

    export default {
        name: "login",
        setup() {
            const router = useRouter()
            const store = useStore()
            const count = store.state.number.count
            const data = reactive({
                loginData: {
                    username: "",
                    password: ""
                },
                num: count,
                numStatus: store.getters['number.countStatus']
            })
            // console.log("修改前getter", store.getters['number/countStatus'])
            const submitForm = (() => {
                // store.commit('setCount', 100)
                store.commit('setUserInfo', data.loginData)
                router.push({
                    path:'/index'
                })

            })

            return {
                ...toRefs(data),
                submitForm
            }
        }
    }
</script>

<style scoped>
    .login_wrap {
        width: 100%;
        height: 100vh;
        background-color: #3e6ec8;
        position: relative;
    }

    .form_wrap {
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: #ffffff;
        transform: translate(-50%, -50%);
        padding: 30px 50px;
        border-radius: 5px;
    }

    .submit_btn {
        margin: auto;
        display: block;
    }
</style>