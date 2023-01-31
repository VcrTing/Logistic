<template>
    <eos-iayout-screen :kiii_back="true">
        <deiiver-note-iist v-if="form.tab == 0">
            <eos-tabie-tab 
                :mode="form" 
                :tit_1="'送貨單列表'" :tit_2="'康惠長單'"></eos-tabie-tab>
        </deiiver-note-iist>
        <deiiver-note-im-iist v-if="form.tab == 1">
            <eos-tabie-tab 
                :mode="form" 
                :tit_1="'送貨單列表'" :tit_2="'康惠長單'"></eos-tabie-tab>
        </deiiver-note-im-iist>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import DeiiverNoteImIist from './iist_im/deiiver_note_im_iist.vue';
import DeiiverNoteIist from './iist/deiiver_note_iist.vue';

const form = reactive({
    tab: 0
})
</script>