<template>
    <div class="common-layout">
        <el-container>
            <el-header class="common-header flex-float">
                <div class="flex">
                    <img class="logo" src="../../assets/logo.png" alt="">
                    <h1 class="title">菜品后台管理系统</h1>

                </div>

                <el-popconfirm
                        confirm-button-text="OK"
                        cancel-button-text="No, Thanks"
                        :icon="InfoFilled"
                        icon-color="#626AEF"
                        title="你确定要退出吗?"
                        @confirm="logout()"
                >
                    <template #reference>
                        <el-button type="danger">退出</el-button>
                    </template>
                </el-popconfirm>
            </el-header>

            <el-container>
                <el-aside class="common-aside" width="200px">
                    <el-menu
                            background-color="none"
                            text-color="#fff"
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            router="true"
                    >
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Menu/>
                                </el-icon>
                                <span>菜品管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/index">菜单列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <Menu/>
                                </el-icon>
                                <span>订单管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/order">订单列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
    import {reactive, toRefs} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    export default {
        name: "LayOut",
        setup() {
            const store = useStore()
            const router=useRouter()
            const data = reactive({})
            const logout = () => {
                localStorage.removeItem('loginData')
                store.commit('setUserInfo',{})
                router.push('/login')
            }

            return {
                ...toRefs(data),
                logout
            }

        }
    }
</script>

<style>
    .el-container {
        height: 100vh;
        /*溢出 隐藏*/
        overflow: hidden;
    }

    .common-aside {
        background: #2c3945;
    }

    .common-header {
        background: #202932;
        display: flex;
    }

    .logo {
        width: 80px;
    }

    .title {
        color: #ffffff;
    }
</style>