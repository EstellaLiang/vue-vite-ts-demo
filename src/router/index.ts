import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHashHistory} from "vue-router";
import type {App} from "vue";

const Layout = () => import('@/layout/index.vue')

/**
 * 静态路由
 */
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/default/404/index.vue')
    },
    {
        path: "/",
        name: "",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "home",
                component: () => import("@/views/home/index.vue"),
                name: "home",
                meta: {
                    title: "首页",
                    // icon: "",
                    // keepAlive: true,
                },
            },
        ],
    },
    {
        path: "/menu1",
        component: Layout,
        name: "menu1",
        meta: {
            title: "菜单1",
            // icon: "",
            // isExpand: true
        },
        children: [
            {
                path: "page1",
                component: () => import("@/views/menu1/Page1.vue"),
                name: "page1",
                meta: {title: "页面1"},
            },
            {
                path: "page2",
                component: () => import("@/views/menu1/Page2.vue"),
                name: "page2",
                meta: {title: "页面2"},
            }
        ],
    },
]

/**
 * 动态路由
 **/
export const dynamicRoutes: RouteRecordRaw[] = [
    {
        path: "/menu1",
        component: Layout,
        name: "menu1",
        meta: {
            title: "菜单1",
            // icon: "",
            // isExpand: true
        },
        children: [
            {
                path: "page1",
                component: () => import("@/views/menu1/Page1.vue"),
                name: "page1",
                meta: {title: "页面1"},
            },
            {
                path: "page2",
                component: () => import("@/views/menu1/Page2.vue"),
                name: "page2",
                meta: {title: "页面2"},
            }
        ],
    },
    {
        path: "/menu2",
        component: Layout,
        name: "menu2",
        meta: {
            title: "菜单2",
            // icon: "",
            // isExpand: true
        },
        children: [
            {
                path: "page1",
                component: () => import("@/views/menu2/Page1.vue"),
                name: "page1",
                meta: {title: "页面1"},
            },
        ],
    }
]


/**
 * 创建路由
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({left: 0, top: 0}),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
    app.use(router);
}

/**
 * 重置路由
 */
export function resetRouter() {
    router.replace({path: "/login"});
}

export default router;
