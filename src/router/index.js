import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import LayOut from '../views/Layout/LayOut.vue'
import store from '../store/index.js'

const routes = [
    {
      path: '/login',
      name:'login',
      component: ()=>import('../views/pages/login.vue')
    },
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
router.beforeEach((to,from,next)=>{
/*
* to: 到那个路由
* from: 从哪个页面
* next: 只有执行next页面才会进行跳转
* */

//    判断用户是否登陆
    const userInfo = store.state.userInfo.userInfo;
    console.log(userInfo);

    if (!userInfo.username){
        if (to.path==='/login'){
            next()
            return
        }
        next("/login")
    }else{
        next()
    }
})
export default router
