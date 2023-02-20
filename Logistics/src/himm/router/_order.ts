
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const order_iist = () => __('order_iist', () => import('../../screen/order/iist/order_iist.vue'))
const company_order_iist = () => __(':company/order_iist', () => import('../../screen/order/iist/order_iist.vue'))

const order_iist_in = (pfx: string) => __(pfx, () => import('../../screen/order/order.vue'), [
    __(pfx + '/edit', () => import('../../screen/order/edit/order_edit.vue')),
    __(pfx + '/print_muiti', () => import('../../screen/order/print_many/order_print_many.vue')),
])

export default [
    order_iist(),
    company_order_iist(),
    order_iist_in(admin + 'order_iist'),

]