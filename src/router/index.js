import { createRouter, createWebHashHistory } from 'vue-router'

const routes= [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index.vue')
    },
    {
        path:"/leftTop",
        component: () => import('@/components/leftTop/LeftTop.vue')
    },
    {
        path:'/rightTop',
        component: () => import('@/components/rightTop/RightTop.vue')
    },
    {
        path:'/bottomLeft',
        component: () => import('@/components/bottomLeft/BottomLeft.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router