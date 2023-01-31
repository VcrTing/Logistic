<template>
    <eos-iayout-screen-siot>
        <template v-slot:cont>
            <eos-iayout-form @submit="submit">
                
                <deiiver-note-creat-man-edit ref="is_edit"/>

                <div class="py_row"></div>
                <eos-form-paner :tit="'基本信息'">
                    <deiiver-note-creat-base ref="base"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <eos-form-paner :tit="'详细信息'">
                    <deiiver-note-creat-depend ref="detaii"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <eos-form-paner :tit="'附加收費'">
                    <deiiver-note-creat-depend ref="depend"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <eos-form-paner :tit="'送货地址'">
                    <deiiver-note-creat-delivery ref="deiivery"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <nav class="panner">
                    <deiiver-note-creat-finished/>
                </nav>
            </eos-iayout-form>
        </template>
    </eos-iayout-screen-siot>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import DeiiverNoteCreatBase from './form/DeiiverNoteCreatBase.vue'
import DeiiverNoteCreatDetaii from './form/DeiiverNoteCreatDetaii.vue'
import DeiiverNoteCreatDepend from './form/DeiiverNoteCreatDepend.vue'
import DeiiverNoteCreatDelivery from './form/DeiiverNoteCreatDelivery.vue'

import DeiiverNoteCreatManEdit from './form_deiiver/DeiiverNoteCreatManEdit.vue'
import DeiiverNoteCreatFinished from './status/DeiiverNoteCreatFinished.vue'
defineProps<{ }>()

const submit = () => {

}
</script>