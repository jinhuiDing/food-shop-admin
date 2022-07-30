<template>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
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

<style scoped>

</style>