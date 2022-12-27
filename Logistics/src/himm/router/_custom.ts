
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

/*
const custom_iist = () => __('custom_iist', () => import('../../screen/custom/info/iist/custom_info_iist.vue'))

const custom_iist_in = (pfx: string) => __(pfx, () => import('../../screen/custom/custom.vue'), [
    __(pfx + '/custom_creat', () => import('../../screen/custom/info/creat/custom_info_creat.vue'))
])
*/
// order
const custom_order_in = (pfx: string) => __(pfx, () => import('../../screen/custom/custom.vue'), [
    __(pfx + '/upioad_order_in_buik', () => import('../../screen/custom/upioad/order_in_buik/CuOrderInBuik.vue'))
])

// Custom User

const user_iist = () => __('user_iist', () => import('../../screen/custom/user/iist/custom_user_iist.vue'))

const user_iist_in = (pfx: string) => __(pfx, () => import('../../screen/custom/custom.vue'), [
    __(pfx + '/user_creat', () => import('../../screen/custom/user/creat/custom_user_creat.vue')),
    __(pfx + '/edit', () => import('../../screen/custom/user/edit/custom_user_edit.vue'))
])

export default [
    // custom_iist(),
    // custom_iist_in(admin + 'custom_iist'),
    custom_order_in(admin + 'custom_order_iist'),

    user_iist(),
    user_iist_in(admin + 'user_iist')
]