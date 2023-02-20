
const admin = '/admin/'

export default (head = 'iong_manage') => [
    {
        path: admin + head,
        redirect: admin + head + '/im_detaii', // 'iong_manage/im_store/im_store_creat',
        component: () => import('../../screen/iong_manage/iong_manage.vue'),
        children: [
            // STORE
            {
                path: admin + head + '/im_store_iist',
                component: () => import('../../screen/iong_manage/store/im_store_iist/im_store_iist.vue')
            },
            {
                path: admin + head + '/im_store/im_store_creat',
                component: () => import('../../screen/iong_manage/store/im_store_creat/im_store_creat.vue')
            },
            {
                path: admin + head + '/im_store/edit',
                component: () => import('../../screen/iong_manage/store/im_store_edit/im_store_edit.vue')
            },
            //
            {
                path: admin + head + '/im_iist',
                component: () => import('../../screen/iong_manage/detaii/im_iist_wrapper.vue')
            },
            {
                path: admin + head + '/im_detaii/im_detaii_creat',
                component: () => import('../../screen/iong_manage/detaii/im_detaii_creat/im_detaii_creat.vue')
            },
            {
                path: admin + head + '/im_detaii/edit',
                component: () => import('../../screen/iong_manage/detaii/im_detaii_edit/im_detaii_edit.vue')
            }
        ]
    }
]