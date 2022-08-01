<template>

    <div>
        <!--        面包屑-->
        <el-breadcrumb separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/food' }">菜品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!--        内容-->
        <div class="page_content">

            <div class="flex">
                <el-input
                        v-model="searchParam.name"
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
                <el-button type="primary" @click="addDialogFormVisible=true">新增</el-button>

            </div>
            <el-table :data="tableData" style="width: 100%">
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
                <el-table-column label="更新时间" width="220">
                    <template #default="scope">
                        <div style="display: flex; align-items: center">
                            <el-icon>
                                <timer/>
                            </el-icon>
                            <span style="margin-left: 10px">{{ scope.row.updateTime }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" @click="handleEdit(scope.$index, scope.row)"
                        >Edit
                        </el-button
                        >
                        <el-button
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                        >Delete
                        </el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination background
                           v-model:current-page="searchParam.pageNum"
                           @current-change="handleCurrentChange"
                           :page-size="searchParam.pageSize"
                           layout="prev, pager,next,total"
                           :total="total"/>

        </div>


        <el-dialog v-model="dialogFormVisible" title="菜品信息">
            <el-form :model="food">
                <el-form-item label="菜品名称" :label-width="formLabelWidth">
                    <el-input v-model="food.name" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="菜品价格" :label-width="formLabelWidth">
                    <el-input v-model="food.price" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="菜品描述" :label-width="formLabelWidth">
                    <el-input v-model="food.subject" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="更新时间" :label-width="formLabelWidth">
                    <el-input disabled v-model="food.updateTime"></el-input>
                </el-form-item>

            </el-form>
            <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateFood"
        >确认</el-button
        >
      </span>
            </template>
        </el-dialog>


        <el-dialog v-model="addDialogFormVisible" title="新增菜品">
            <el-form
                    :rule="rules"
                    :model="newFood">
                <el-form-item label="菜品名称" prop="name" :label-width="formLabelWidth">
                    <el-input v-model="newFood.name" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="菜品价格" prop="price" :label-width="formLabelWidth">
                    <el-input v-model="newFood.price" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="菜品描述" prop="subject" :label-width="formLabelWidth">
                    <el-input v-model="newFood.subject" autocomplete="off"/>
                </el-form-item>

            </el-form>
            <template #footer>
      <span class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addFood"
        >确认</el-button
        >
      </span>
            </template>
        </el-dialog>

    </div>
</template>

<script>
    import {reactive} from "@vue/reactivity";
    import {getFoodApi, updateFoodApi, delFoodApi, addFoodApi} from "@/util/request";
    import {toRefs} from 'vue'
    import {confirmBox} from "@/util/confirm";
    import {ElMessage} from "element-plus";

    export default {
        name: "foodList",
        setup: (() => {
            const data = reactive({
                foodName: "",
                total: 0,
                tableData: [],
                dialogFormVisible: false,
                addDialogFormVisible: false,
                formLabelWidth: 140,
                searchParam: {
                    name: "",
                    pageSize: 10,
                    pageNum: 1
                },
                newFood: {
                    name: "",
                    price: 0,
                    updateTime: '',
                    subject: ''
                },
                food: {
                    id: 0,
                    name: "",
                    price: 0,
                    updateTime: '',
                    subject: ''
                },
                rules: {
                    name: [
                        {
                            required: true,
                            message: "请输入名称",
                            trigger: 'blur'
                        }
                    ]
                }
            })

            const searchFood = () => {
                getFoodApi(data.searchParam).then(res => {
                    data.tableData = res.data.dataList
                    data.total = res.data.total
                })
            }
            const addFood = () => {
                addFoodApi(data.newFood).then((res) => {
                    ElMessage.success("成功")
                    searchFood()

                })
                data.addDialogFormVisible = false
            }

            const handleEdit = (index, row) => {
                data.dialogFormVisible = true
                data.food = row
            }
            const updateFood = () => {
                const param = data.food
                param.updateTime = null
                updateFoodApi(param).then(
                    res => {
                        data.dialogFormVisible = false
                        searchFood()
                    }
                )

            }
            const handleDelete = (index, row) => {
                confirmBox("你确定要删除吗？", () => delFood(row.id), () => {
                })
            }

            const handleCurrentChange = (num) => {
                data.searchParam.pageNum = num
                searchFood()
            }
            const delFood = (id) => {
                delFoodApi(id).then((res) => {
                    searchFood()
                })
            }

            searchFood()
            return {
                ...toRefs(data),
                searchFood,
                addFood,
                handleEdit,
                handleDelete,
                updateFood,
                delFood,
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