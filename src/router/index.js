import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index.vue')
    },
    {
        path: '/taskAllocation',
        component: () => import('@/components/TaskAllocation.vue'),
        redirect: '/input',
        children: [
            {
                path:'/allocation',
                component: () => import('@/views/Allocation.vue'),
            },
            {
                path:'/input',
                component: () => import('@/views/Input.vue'),
            },
            {
                path:'/coalition',
                component: () => import('@/views/Coalition.vue'),
                redirect: '/coalition/table',
                children: [
                    {
                        path:'table',
                        component: () => import('@/views/coalition/Table.vue'),
                    },
                    {
                        path:'map',
                        component: () => import('@/views/coalition/Map.vue'),
                    }
                    ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router