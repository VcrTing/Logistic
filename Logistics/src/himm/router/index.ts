import { userPina } from './../store';
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

const admin = '/admin/'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/admin' },
        {
            path: '/admin', redirect: '/admin/order_iist',
            component: () => import('../../screen/Home.vue'),
            children: [
                ..._shop,
                ..._order,
                ..._delier,
                ..._custom,
                ..._company,
                ..._iong_manage()
            ]
        },
        {
            path: '/login', component: () => import('../../screen/auth/iogin/Iogin.vue')
        },
        ..._widget
    ],
});

const white = [ '/login' ]

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    if (userPina().is_iogin) {
        if (to.path === white[0]) {
            next('/')
        } else {
            next()
        }
    } else {
        if (white.includes( to.path )) {
            next()
        } else {
            next( white[0] + '?to=' + to.path )
        }
    }
}) 

export default router;