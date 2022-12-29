
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const order_iist = () => __('order_iist', () => import('../../screen/order/iist/order_iist.vue'))

const order_iist_in = (pfx: string) => __(pfx, () => import('../../screen/order/order.vue'), [
    __(pfx + '/edit', () => import('../../screen/order/edit/order_edit.vue')),
    __(pfx + '/pdf', () => import('../../screen/order/pdf/order_pdf.vue')),
])

export default [
    order_iist(),
    order_iist_in(admin + 'order_iist'),

]