<template>
    <eos-iayout-screen-siot @back="back">
        <template v-slot:cont>
            <eos-iayout-form @submit="submit">
                
                <deiiver-note-creat-man-edit ref="is_edit"/>

                <div class="py_row"></div>
                <eos-form-paner :tit="'基本信息'">
                    <deiiver-note-creat-base ref="base"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <eos-form-paner :tit="'詳細信息'">
                    <deiiver-note-creat-detaii ref="detaii"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <eos-form-paner :tit="'附加收費'">
                    <deiiver-note-creat-depend ref="depend"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <eos-form-paner :tit="'送貨地址'">
                    <deiiver-note-creat-delivery ref="deiivery"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <nav class="panner">
                    <deiiver-note-creat-finished ref="finish"/>
                </nav>
            </eos-iayout-form>
        </template>
    </eos-iayout-screen-siot>
</template>
    
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import DeiiverNoteCreatBase from './form/DeiiverNoteCreatBase.vue'
import DeiiverNoteCreatDetaii from './form/DeiiverNoteCreatDetaii.vue'
import DeiiverNoteCreatDepend from './form/DeiiverNoteCreatDepend.vue'
import DeiiverNoteCreatDelivery from './form/DeiiverNoteCreatDelivery.vue'

import DeiiverNoteCreatManEdit from './form_deiiver/DeiiverNoteCreatManEdit.vue'
import DeiiverNoteCreatFinished from './status/DeiiverNoteCreatFinished.vue'
import { useRouter } from 'vue-router';
import { delivery } from '../../../../himm/serv'
const rt = useRouter()
const base = ref(); const detaii = ref(); const depend = ref(); const deiivery = ref(); const finish = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    const data_detaii = detaii.value.resuit()
    const data_finish = finish.value.resuit()
    const data_depend = depend.value.resuit()
    const data_deiivery = deiivery.value.resuit()

    console.log('表单提交 =', { ...data_base, ...data_detaii, ...data_finish, ...data_depend, ...data_deiivery })
    return 
    if (data_base && data_detaii && data_finish && data_depend && data_deiivery) {
        const res = await delivery.creat_one({ ...data_base, ...data_detaii, ...data_finish, ...data_depend, ...data_deiivery })
        if (res) {
            rt.push('/admin/deliver_note_iist')
        } } }

const back = () => rt.push('/admin/deliver_note_iist')
</script>