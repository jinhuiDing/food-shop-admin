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
                isFalse: false
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