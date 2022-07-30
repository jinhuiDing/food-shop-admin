import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Abc from "../views/Abc.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/abc',
        name: 'abc',
        // component: Abc
        component: ()=>import("../views/Abc.vue")
    },
    {
        path:'/index',
        name: 'LayOut',
        component: ()=>import("../views/Layout/LayOut.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
