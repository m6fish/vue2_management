import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/Dashboard',
        component: Home,
        children: [{
            // Dashboard 大廳
            path: '/Dashboard',
            name: 'Dashboard',
            meta: {
                title: 'Dashboard'
                // icon: ''
            },
            // component: r => require.ensure([], () => r(require('@/views/Dashboard')), 'Dashboard')
            component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard/index.vue')
        }, {
            // Setting 使用者設定
            path: '/Setting',
            name: 'Setting',
            meta: {
                title: 'Setting'
                // icon: ''
            },
            component: () => import(/* webpackChunkName: "Setting" */ '@/views/Setting/index.vue')
        }, {
            // UserList 使用者列表
            path: '/UserList',
            name: 'UserList',
            meta: {
                title: 'UserList'
                // icon: ''
            },
            component: () => import(/* webpackChunkName: "UserList" */ '@/views/UserList/index.vue')
        }, {
            // Accounting 帳務列表
            path: '/AccountList',
            name: 'AccountList',
            meta: {
                title: 'AccountList'
                // icon: ''
            },
            component: () => import(/* webpackChunkName: "AccountList" */ '@/views/AccountList/index.vue'),
            children: [{
                // Accounting-A list 帳務-A列表
                path: 'AList',
                name: 'AList',
                meta: {
                    title: 'AList'
                // icon: ''
                },
                component: () => import(/* webpackChunkName: "AccountList" */ '@/views/AccountList/AList/index.vue')
            }, {
                // Accounting-B list 帳務-B列表
                path: 'BList',
                name: 'BList',
                meta: {
                    title: 'BList'
                // icon: ''
                },
                component: () => import(/* webpackChunkName: "AccountList" */ '@/views/AccountList/BList/index.vue')
            }]
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router
