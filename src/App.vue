<template>
    <!--  router-view 展示路由对应的组件内容-->
    <router-view/>
</template>

<style>
    html body {
        /*width: 100%;*/
        /*height: 100vh;*/
        padding: 0;
        margin: 0;
    }

    .flex-float {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    .page_content {
        box-sizing: border-box;
        display: block;
        width: 100%;
        padding: 20px;
        background: #ffffff;
        margin-top: 30px;
    }
</style>
