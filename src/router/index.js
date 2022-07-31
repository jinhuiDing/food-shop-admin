import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import LayOut from '../views/Layout/LayOut.vue'

const routes = [
    {
        path: '/',
        name: 'LayOut',
        component: LayOut,
        redirect:"/index",
    //    子路由,嵌套路由
        children:[
            {
                path:'/index',
                name:'index',
                component:()=>import("../views/foodList.vue")
            },
            {
                path:'/order',
                name:'order',
                component:()=>import("../views/orderList.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
