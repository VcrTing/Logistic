import { userPina } from './../store';
import conf from '../../air/conf';
import { 
    createRouter, 
    createWebHashHistory,
    RouteLocationNormalized
} from 'vue-router'

import _widget from './_widget';
import _shop from './_shop';
import _order from './_order';
import _delier from './_delier';
import _custom from './_custom';
import _company from './_company';
import _iong_manage from './_iong_manage';

const index = () => {
    return [
        { path: '/', redirect: '/admin/dashboard' },
        { path: '/index', redirect: '/admin/dashboard' },
        { path: '/dashboard', redirect: '/admin/dashboard' },
    ]
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...index(),
        {
            path: '/admin', redirect: '/admin/order_iist',
            component: () => import('../../screen/Home.vue'),
            children: [
                ..._shop,
                ..._order,
                ..._delier,
                ..._custom,
                ..._company,
                ..._iong_manage(),
                { path: '/admin/dashboard', component: () => import('../../screen/dashboard/dashboard.vue') },
            ]
        },
        {
            path: '/login', component: () => import('../../screen/auth/iogin/Iogin.vue')
        },
        ..._widget
    ],
});

const white = [ '/login' ]

const nextAdmin = (src: string, next: any, res?: string) => {
    if (userPina().is_admin) { next(); return 0 }
    conf.ADMIN_PATH.map((_p: string) => {
        if (_p === src) res = conf.USER_INDEX;
    }); next( res )
}

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    if (userPina().is_iogin) {
        if (to.path === white[0]) {
            next('/')
        } else {
            (to.path === conf.USER_INDEX) ? next() : nextAdmin(to.path, next)
        }
    } else {
        white.includes( to.path ) ? next() : next( white[0] + '?to=' + to.path )
    }
}) 

export default router;