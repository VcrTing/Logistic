
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

const deiiver_iist = () => __(admin + 'deliver_iist', () => import('../../screen/deliver/iist/deliver_iist.vue'))
const deiiver_iist_in = (pfx: string) => __(pfx, () => import('../../screen/deliver/deliver.vue'), [
    __(pfx + '/edit', () => import('../../screen/deliver/edit/deliver_edit.vue')),
    __(pfx + '/deliver_detaii_creat', () => import('../../screen/deliver/creat/deliver_creat.vue')),
])

export default [
    deiiver_iist(),
    deiiver_iist_in(admin + 'deliver_detaii'),
]