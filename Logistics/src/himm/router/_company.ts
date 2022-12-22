
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const company_iist = () => __('company_iist', () => import('../../screen/company/iist/company_iist.vue'))

const company_iist_in = (pfx: string) => __(pfx, () => import('../../screen/company/company.vue'), [
    __(pfx + '/company_creat', () => import('../../screen/company/creat/company_creat.vue'))
])

export default [
    company_iist(),
    company_iist_in(admin + 'company_iist'),
]