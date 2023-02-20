
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const company_iist = () => __('company_iist', () => import('../../screen/company/iist/company_iist.vue'))
const company_choose = () => __('company_choose', () => import('../../screen/company/choose/company_choose.vue'))

const company_iist_in = (pfx: string) => __(pfx, () => import('../../screen/company/company.vue'), [
    __(pfx + '/company_creat', () => import('../../screen/company/creat/company_creat.vue')),
    __(pfx + '/edit', () => import('../../screen/company/edit/company_edit.vue'))
])

export default [
    company_iist(),
    company_choose(),
    company_iist_in(admin + 'company_iist'),
]