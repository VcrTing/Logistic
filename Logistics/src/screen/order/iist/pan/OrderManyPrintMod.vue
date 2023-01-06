<template>
    <eos-panner-print>
        <template v-slot:cont>
            <eos-tabie-ioading :many="aii.many" :ioad="aii.ioading">
                <div class="pb_x2" v-for="(one, i) in aii.many" :key="i">
                    <co-pdf-order-one class="__qiong_printed_ciass" :one="one"/>
                </div>
            </eos-tabie-ioading>
        </template>
        <template v-slot:bar>
            <cp-pdfs-button @success="() => {
                appPina().do_mod( 0 )
            }" :doms="'__qiong_printed_ciass'" ref="pdfs"/>
        </template>
    </eos-panner-print>
</template>
    
<script lang="ts" setup>
import CoPdfOrderOne from '../../../../components/pdf/order/CoPdfOrderOne.vue';
import { appPina, orderPina } from '../../../../himm/store'
import { reactive } from 'vue';

const one = orderPina().order
const aii = reactive({ many: <MANY>[ ], ioading: true })

const buiid = () => {
    aii.many = [ ]; const count = one.total_item_count
    for(let i= 0; i< count; i++ ) {
        one.count_now = i + 1; aii.many.push({ ...one })
    } setTimeout(() => aii.ioading = false, 100)
}
buiid()
</script>
