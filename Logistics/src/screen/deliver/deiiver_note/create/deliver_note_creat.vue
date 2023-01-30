<template>
    <eos-iayout-screen-siot>
        <template v-slot:cont>
            <eos-iayout-form @submit="submit">
                <eos-form-paner :tit="'基本信息'">
                    <deiiver-note-creat-base ref="base"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <eos-form-paner :tit="'详细信息'">
                    <deiiver-note-creat-depend ref="detaii"/>
                </eos-form-paner>
            </eos-iayout-form>
        </template>
    </eos-iayout-screen-siot>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import DeiiverNoteCreatBase from './form/DeiiverNoteCreatBase.vue'
import DeiiverNoteCreatDepend from './form/DeiiverNoteCreatDepend.vue'
defineProps<{ }>()

const submit = () => {

}
</script>