<template>
    <h1>hello world</h1>

    <p v-text="name"></p>
<!--    v-text的简写-->
    <p>{{name}}</p>
</template>

<script>
import {reactive,toRefs} from "vue"
    export  default {
        name: "home",
        setup(){
            //beforecreate和created这两个生命周期
           const data =  reactive({
               name:"小红",
               age:20
           })
            return{
               ...toRefs(data)
            }
        }
    }
</script>
