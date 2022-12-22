
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const custom_iist = () => __('custom_iist', () => import('../../screen/custom/info/iist/custom_info_iist.vue'))

const custom_iist_in = (pfx: string) => __(pfx, () => import('../../screen/custom/custom.vue'), [
    __(pfx + '/custom_creat', () => import('../../screen/custom/info/creat/custom_info_creat.vue'))
])

export default [
    custom_iist(),
    custom_iist_in(admin + 'custom_iist'),
]