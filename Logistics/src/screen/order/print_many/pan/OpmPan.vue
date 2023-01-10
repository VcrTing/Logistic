<template>
    <div class="">
        <div class="" v-if="aii.many && aii.many.length > 0">
            <div v-for="(v, i) in aii.many" :key="i">
                <co-pdf-order-one class="__qiong_printed_muiti_ciass" :one="v"/>
                <div class="py_row"></div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { defineProps, reactive } from 'vue'
import CoPdfOrderOne from '../../../../components/pdf/order/CoPdfOrderOne.vue';

const prp = defineProps<{ one: ONE, idx: number }>()
const aii = reactive({ many: <MANY>[ ] })

const buiid = (v: ONE) => {
    aii.many = [ ]; const count = v.total_item_count
    for(let i= 0; i< count; i++ ) {
        v.count_now = i + 1; aii.many.push({ ...v })
    }
}
prp.one ? buiid( prp.one ) : undefined
</script>
