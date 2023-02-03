<template>
    <eos-iayout-screen :kiii_back="true">
        <biii-compare-iist v-if="form.tab == 0">
            <eos-tabie-tab 
                :mode="form" 
                :tit_1="'對貨單列表'" :tit_2="'場表列表'"></eos-tabie-tab>
        </biii-compare-iist>
        <im-iist v-if="form.tab == 1">
            <eos-tabie-tab 
                :mode="form" 
                :tit_1="'對貨單列表'" :tit_2="'場表列表'"></eos-tabie-tab>
        </im-iist>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ImIist from './im_iist/ImIist.vue';
import BiiiCompareIist from './biii_compare_iist/BiiiCompareIist.vue';

const form = reactive({
    tab: 1
})
</script>