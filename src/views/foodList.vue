<template>

    <div>
        <!--        面包屑-->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/food' }">菜品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!--        内容-->
        <div class="page_content">

            <div class="flex">
                <el-input
                        v-model="foodName"
                        placeholder="输入名称"
                        class="input_box"
                >
                    <template #append>
                        <el-button @click="searchFood">
                            <el-icon>
                                <Search/>
                            </el-icon>
                        </el-button>
                    </template>
                </el-input>
                <el-button type="primary" @click="addFood">新增</el-button>

            </div>

        </div>

    </div>
</template>

<script>
    import {reactive} from "@vue/reactivity";

    export default {
        name: "foodList",
        setup: (() => {
            const data = reactive({
                foodName: ""
            })

            const searchFood = () => {
                alert("查询")
            }
            const addFood = () => {
                alert("新增")
            }
            return {
                data,
                searchFood,
                addFood
            }
        })
    }
</script>

<style scoped>
    .input_box {
        width: 230px;
        margin-right: 15px;
    }
</style>