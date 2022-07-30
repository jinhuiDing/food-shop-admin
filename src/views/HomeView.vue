<template>
    <h1>hello world</h1>

    <p v-text="name"></p>
    <!--    v-text的简写-->
    <p>{{name}}</p>
    <!--    v-html -->
    <p v-html="info"></p>
    <p>{{info}}</p>

    <!--    v-bind绑定动态的标签属性-->
    <p v-bind:data="dataVal">我有属性data</p>


    <!--    class类名绑定 可以叠加使用-->
    <p class="text" :class="{'red':isRed}">我是红色的</p>


    <!--    v-if -->
    <!--    v-show-->
    <p v-if="isTrue">我是if存在</p>
    <p v-show="isFalse">我是show展示</p>

    <p v-if="isFalse">if</p>
    <p v-else>else</p>


    <!--    for循环-->
    <ul>
        <!--   循环此userList-->
        <!--        v-for=(每一个对象,下标) in 数组 -->
        <li v-for="(user,index) in userList" :key="index">
            学生姓名:{{user.username}}
            学生年龄:{{user.userAge}}
        </li>
    </ul>

</template>

<script>
    import {reactive, toRefs} from "vue"

    export default {
        name: "home",
        setup() {
            //beforecreate和created这两个生命周期
            const data = reactive({
                name: "小红",
                age: 20,
                info: "<i>我是斜体字</i>",
                dataVal: 22,
                isRed: true,
                isTrue: true,
                isFalse: false,
                userList: [
                    {
                        username: "小红",
                        userAge: 10
                    }, {
                        username: "小名",
                        userAge: 23
                    }, {
                        username: "小李",
                        userAge: 34
                    }, {
                        username: "小王",
                        userAge: 11
                    }, {
                        username: "小张",
                        userAge: 9
                    }
                ]
            })
            return {
                ...toRefs(data)
            }
        }
    }
</script>

<style>
    .red {
        color: red;
    }
</style>