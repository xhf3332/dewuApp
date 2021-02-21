import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: "/goumai"
        },
        {
            path: "/goumai",
            component: () => import("../views/goumai/index.vue"),
            // redirect:'/movie/city',
            // children: [
            //     {
            //         path: 'city',
            //         component:()=>import('../views/movie/city/index.vue')
            //     },
            //     {
            //         path: 'reying',
            //         component:()=>import('../views/movie/reying/index.vue')
            //     },
            //     {
            //         path: 'jijiang',
            //         component:()=>import('../views/movie/jijiang/index.vue')
            //     },
            //     {
            //         path: 'sou',
            //         component:()=>import('../views/movie/sou/index.vue')
            //     }
            // ]
        },
        {
            path: "/dewu",
            component: () => import('../views/dewu/index.vue')
        },
        {
            path: "/mine",
            component: () => import('../views/mine/index.vue')
        },
        {
            path: "/fuwu",
            component: () => import('../views/fuwu/index.vue'),


        },
        {
            path: '/calendar',
            component: () => import('../views/fuwu/top/calendar/index'),
            meta: {
                showtabbar: false,
            },
        },
        {
            path: '/information',
            component: () => import('../views/fuwu/top/information/index')
        },
        {
            path: '/answer',
            component: () => import('../views/fuwu/top/answer/index')
        }
    ],
    //    linkActiveClass:'active'
})
export default router