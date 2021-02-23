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
            component: () =>
                import ("@/views/goumai/pages/index"),
            children: [{
                path: "detail",
                name: 'detail',
                component: () =>
                    import ("@/views/goumai/pages/detail")
            }]
        },
        {
            path: "/dewu",
            component: () =>
                import ('../views/dewu/index.vue')
        },
        {
            path: "/mine",
            component: () =>
                import ('../views/mine/index.vue')
        },
        {
            path: "/fuwu",
            component: () =>
                import ('../views/fuwu/index.vue')
        },
    ],
    //    linkActiveClass:'active'
})
export default router