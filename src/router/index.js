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
        },
        {
            path: "/dewu",
            component: () => import('../views/dewu/index.vue'),
            redirect: "/dewu/guanzhu",

            children: [{
                    path: 'sousuo',
                    component: () => import('../views/dewu/sousuo/index.vue')
                },
                {
                    path: 'guanzhu',
                    component: () => import('../views/dewu/guanzhu/index.vue')
                },
                {
                    path: 'tuijian',
                    component: () => import('../views/dewu/tuijian/index.vue'),
                    redirect: "/dewu/tuijian/quanbu",
                    children: [{
                            path: "chuanda",
                            component: () => import('../views/dewu/tuijian/chuanda/index.vue')
                        },
                        {
                            path: "quanbu",
                            component: () => import('../views/dewu/tuijian/qb/index.vue')
                        },
                        {
                            path: "girlchuan",
                            component: () => import('../views/dewu/tuijian/girlchuan/index.vue')
                        },
                        {
                            path: "guochao",
                            component: () => import('../views/dewu/tuijian/guochao/index.vue')
                        },
                        {
                            path: "jianshen",
                            component: () => import('../views/dewu/tuijian/jianshen/index.vue')
                        },
                        {
                            path: "kuzi",
                            component: () => import('../views/dewu/tuijian/kuzi/index.vue')
                        },
                        {
                            path: "manchuan",
                            component: () => import('../views/dewu/tuijian/manchuan/index.vue')
                        },
                        {
                            path: "manli",
                            component: () => import('../views/dewu/tuijian/manli/index.vue')
                        },
                        {
                            path: "maozi",
                            component: () => import('../views/dewu/tuijian/maozi/index.vue')
                        },
                        {
                            path: "meizhuang",
                            component: () => import('../views/dewu/tuijian/meizhuang/index.vue')
                        },
                        {
                            path: "qiche",
                            component: () => import('../views/dewu/tuijian/qiche/index.vue')
                        },
                        {
                            path: "qiuxie",
                            component: () => import('../views/dewu/tuijian/qiuxie/index.vue')
                        },
                        {
                            path: "shebao",
                            component: () => import('../views/dewu/tuijian/shebao/index.vue')
                        },
                        {
                            path: "shoubiao",
                            component: () => import('../views/dewu/tuijian/shoubiao/index.vue')
                        },
                        {
                            path: "shoushi",
                            component: () => import('../views/dewu/tuijian/shoushi/index.vue')
                        },
                        {
                            path: "shuma",
                            component: () => import('../views/dewu/tuijian/shuma/index.vue')
                        },
                        {
                            path: "shipin",
                            component: () => import('../views/dewu/tuijian/sp/index.vue')
                        },
                        {
                            path: "wanju",
                            component: () => import('../views/dewu/tuijian/wanju/index.vue')
                        },
                        {
                            path: "weiyi",
                            component: () => import('../views/dewu/tuijian/weiyi/index.vue')
                        },
                        {
                            path: "xiangbao",
                            component: () => import('../views/dewu/tuijian/xiangbao/index.vue')
                        },
                        {
                            path: "youxi",
                            component: () => import('../views/dewu/tuijian/youxi/index.vue')
                        },
                        {
                            path: "yundong",
                            component: () => import('../views/dewu/tuijian/yundong/index.vue')
                        },
                    ]
                },
                {
                    path: 'live',
                    component: () => import('../views/dewu/live/index.vue')
                },
                {
                    path: 'xiang',
                    component: () => import('../views/dewu/xiang/index.vue')
                }
            ]
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