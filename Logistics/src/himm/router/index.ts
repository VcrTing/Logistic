import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

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
            path: '/admin', redirect: '/admin/deliver_detaii/deliver_detaii_creat',
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
        }
    ],
});

export default router;