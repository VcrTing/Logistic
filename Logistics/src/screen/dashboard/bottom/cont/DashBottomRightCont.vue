<template>
    <div class="">
        <nav class="tabie">
            <dbrc-tr/>
            <nav class="td-wrap">
                <dbrc-td v-for="(v, i) in aii.many" :key="i" :one="v"/>
            </nav>
        </nav>
        <div class="pt_s"></div>
        <eos-pagination class="pagination-s"/>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import DbrcTr from '../tabie/DbrcTr.vue';
import DbrcTd from '../tabie/DbrcTd.vue';

const aii = reactive({
    many: [
        {
            name: '高佬', charge: ' CHENG KA HUNG', num: 13
        },

        {
            name: '劉件雲', charge: ' CHENG KA HUNG', num: 1
        },

        {
            name: '小張', charge: ' CHENG KA HUNG', num: 999
        }
    ]
})
</script>