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
                        v-model="data.searchParam.name"
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
            <el-table :data="data.tableData" style="width: 100%">
                <el-table-column label="菜品名称" width="180">
                    <template #default="scope">
                        <div style="display: flex; align-items: center">
                            <el-icon>
                                <timer/>
                            </el-icon>
                            <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="菜品价格" width="180">
                    <template #default="scope">
                        <div style="display: flex; align-items: center">
                            <el-icon>
                                <money/>
                            </el-icon>
                            <span style="margin-left: 10px">{{ scope.row.price }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="菜品介绍" width="180">
                    <template #default="scope">
                        <el-popover effect="light" trigger="hover" placement="top" width="auto">
                            <template #default>
                                <div>{{ scope.row.subject }}</div>
                            </template>
                            <template #reference>
                                <el-tag>{{ scope.row.subject }}</el-tag>
                            </template>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="添加时间" width="180">
                    <template #default="scope">
                        <div style="display: flex; align-items: center">
                            <el-icon>
                                <timer/>
                            </el-icon>
                            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                        >Edit
                        </el-button
                        >
                        <el-button
                                size="small"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                        >Delete
                        </el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination background
                          v-model:current-page="data.searchParam.pageNum" :page-size="data.searchParam.pageSize" layout="prev, pager,next,total" :total="data.total"/>

        </div>

    </div>
</template>

<script>
    import {reactive} from "@vue/reactivity";
    import {Timer} from '@element-plus/icons-vue'
    import {getFoodApi} from "@/util/request";
    import {ref} from 'vue'

    export default {
        name: "foodList",
        setup: (() => {
            const data = reactive({
                foodName: "",
                total: 0,
                tableData: [],
                searchParam: {
                    name: "",
                    pageSize: 1,
                    pageNum: 1
                }
            })

            const searchFood = () => {
                getFoodApi(data.searchParam).then(res => {
                    data.tableData = res.data.dataList
                    data.total = res.data.total
                })
            }
            const addFood = () => {
                alert("新增")
            }

            const handleEdit = (index, row) => {
                console.log(index, row)
            }
            const handleDelete = (index, row) => {
                console.log(index, row)
            }

            const handleCurrentChange = (num) => {
                console.log(num)
            }

            searchFood()
            return {
                data,
                searchFood,
                addFood,
                handleEdit,
                handleDelete,
                handleCurrentChange
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