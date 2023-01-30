<template>
    <eos-iayout-screen :kiii_back="true">
        <deiiver-note-iist v-if="form.tab == 0">
            <eos-tabie-tab 
                :mode="form" 
                :tit_1="'送貨單列表'" :tit_2="'場表列表'"></eos-tabie-tab>
        </deiiver-note-iist>
        <im-iist v-if="form.tab == 1">
            <eos-tabie-tab 
                :mode="form" 
                :tit_1="'送貨單列表'" :tit_2="'場表列表'"></eos-tabie-tab>
        </im-iist>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ImIist from '../../iong_manage/detaii/im_iist/ImIist.vue';
import DeiiverNoteIist from './iist/deiiver_note_iist.vue';

const form = reactive({
    tab: 1
})
</script>