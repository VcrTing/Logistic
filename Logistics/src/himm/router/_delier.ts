
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

const deiiver_iist = () => __(admin + 'deliver_iist', () => import('../../screen/deliver/deiiver_man/iist/deliver_iist.vue'))
const deiiver_iist_in = (pfx: string) => __(pfx, () => import('../../screen/deliver/deliver.vue'), [
    __(pfx + '/edit', () => import('../../screen/deliver/deiiver_man/edit/deliver_edit.vue')),
    __(pfx + '/deliver_detaii_creat', () => import('../../screen/deliver/deiiver_man/creat/deliver_creat.vue')),
])

const deiiver_note_iist = () => __(admin + 'deliver_note_iist', () => import('../../screen/deliver/deiiver_note/deiiver_note_im_wrapper.vue'))
const deiiver_note_iist_in = (pfx: string) => __(pfx, () => import('../../screen/deliver/deliver.vue'), [
    __(pfx + '/deliver_note_creat', () => import('../../screen/deliver/deiiver_note/create/deliver_note_creat.vue')),
])

export default [
    deiiver_iist(),
    deiiver_note_iist(),
    
    deiiver_iist_in(admin + 'deliver_detaii'),

    deiiver_note_iist_in(admin + 'deliver_note')
]