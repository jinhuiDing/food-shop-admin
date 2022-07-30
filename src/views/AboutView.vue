<template>
    <div class="about">
        <h1>vue3的生命周期</h1>
        <div id="dom">{{msg}}---{{num}}</div>

        <br>
        <!--        双向绑定-->
        <input type="text" placeholder="请输入姓名" v-model="username"
               @blur="handlerBlur"
               @focus="handlerFocus"
               @input="handlerInput"
               @change="handlerChange"

        >
        <br>
        <textarea placeholder="请输入建议" cols="30" rows="10" v-model="suggest"></textarea>
        <br>
        <input type="text" placeholder="请输入手机号" v-model="phone" @input="handlerValid"
        >
        <!--        v-on:事件名="事件方法"  简写@事件名="事件方法"-->
        <button @click="submit">提交</button>
    </div>
</template>

<script>
    import {reactive, toRefs, onBeforeMount, onMounted, onUpdated, onBeforeUpdate} from "vue"

    export default {
        name: "about",
        setup() {
            const data = reactive({
                msg: "你好",
                num: 1,
                username: "",
                suggest: "",
                phone: ""
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
                // setTimeout(() => {
                //     if (data.msg === "你好") {
                //         data.msg = "hello"
                //     } else {
                //         data.msg = "你好"
                //     }
                // }, 2000)

            })
            const submit = (() => {
                    alert(`${data.username}的建议是: ${data.suggest}`)
                }
            )
            const handlerFocus = (() => {
                    console.log("获取焦点")
                }
            )
            const handlerInput = (() => {
                    console.log("输入内容")
                }
            )
            const handlerBlur = (() => {
                    console.log("失去焦点")
                }
            )
            const handlerChange = (() => {
                    console.log("改变了")
                }
            )
            const handlerValid = (() => {

                    if (!/^[1][2-9][0-9]{9}$/.test(data.phone)) {
                        console.log("不合法的手机号")
                    }
                }
            )
            return {
                ...toRefs(data),
                submit,
                handlerBlur,
                handlerInput,
                handlerFocus,
                handlerChange,
                handlerValid
            }
        }
    }

</script>
