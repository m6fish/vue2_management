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
            // Dashboard
            path: '/Dashboard',
            name: 'Dashboard',
            meta: {
                title: 'Dashboard'
                // icon: ''
            },
            // component: r => require.ensure([], () => r(require('@/views/Dashboard')), 'Dashboard')
            component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard/index.vue')
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router
