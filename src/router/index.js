import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/TaskAllocation.vue'),
        redirect: '/dashboard',
        children: [
            {
                path:'/allocation',
                component: () => import('@/views/Allocation.vue'),
            },
            {
                path:'/dashboard',
                component: () => import('@/views/DashBoard.vue'),
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
            },
            {
                path:'/scheduling',
                component: () => import('@/views/scheduling/TaskScheduling.vue'),
                children: [
                    {
                        path:'',
                        name:'table',
                        component: () => import('@/views/scheduling/components/Table.vue'),
                    },
                    {
                        path:'flowchart',
                        name:'flowchart',
                        component: () => import('@/views/scheduling/components/FlowChart.vue'),
                    },
                    {
                        path:'operator',
                        name:'operator',
                        component: () => import('@/views/scheduling/components/Operator.vue'),
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