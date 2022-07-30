<template>
    <div class="about">
        <h1>vue3的生命周期</h1>
        <div id="dom">{{msg}}---{{num}}</div>
    </div>
</template>

<script>
    import {reactive, toRefs, onBeforeMount, onMounted, onUpdated, onBeforeUpdate} from "vue"

    export default {
        name: "about",
        setup() {
            const data = reactive({
                msg: "你好",
                num:1
            })
            //数据渲染前
            onBeforeMount(() => {
                console.log("onBeforeMount", document.querySelector("#dom"))
            })
            //数据渲染后
            onMounted(() => {
                console.log("onMounted", document.querySelector("#dom"))
                setTimeout(() => {
                    data.msg = "hello"
                }, 2000)
            })

            onBeforeUpdate(() => {
                console.log("onBeforeUpdate", document.querySelector("#dom"))
            })

            onUpdated(() => {
                console.log("onUpdated", document.querySelector("#dom"))
                data.num+=1
                // setTimeout(() => {
                //     if (data.msg === "你好") {
                //         data.msg = "hello"
                //     } else {
                //         data.msg = "你好"
                //     }
                // }, 2000)

            })
            return {
                ...toRefs(data)
            }
        }
    }

</script>
