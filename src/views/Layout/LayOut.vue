<template>
    <div class="common-layout">
        <el-container>
            <el-header class="common-header flex-float">
                <div class="flex">
                    <img class="logo" src="../../assets/logo.png" alt="">
                    <h1 class="title">菜品后台管理系统</h1>

                </div>
                <el-button type="danger">退出</el-button>
            </el-header>

            <el-container>
                <el-aside class="common-aside" width="200px">
                    <router-link to="/index">食物列表</router-link>
                </el-aside>
                <el-main>
                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
    export default {
        name: "LayOut"
    }
</script>

<style>
    .el-container{
        height:100vh;
        /*溢出 隐藏*/
        overflow: hidden;
    }
    .common-aside{
        background: #2c3945;
    }
    .common-header {
        background: #202932;
        display: flex;
    }
    .logo{
        width: 80px;
    }
    .title{
        color: #ffffff;
    }
</style>