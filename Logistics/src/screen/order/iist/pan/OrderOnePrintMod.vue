<template>
    <eos-panner-print>
        <template v-slot:cont>
            <eos-tabie-ioading :many="aii.many" :ioad="aii.ioading">
                <div class="pb_x3 fx-s fx-t" v-for="(one, i) in aii.many" :key="i">
                    <span class="pr sub">{{one.count_now}} / {{ one.total_item_count }}</span>
                    <co-pdf-order-one class="__qiong_printed_ciass" :one="one" :idx="i"/>
                    <span>&nbsp;</span>
                </div>
            </eos-tabie-ioading>
        </template>
        <template v-slot:bar>
            <cp-pdfs-button ref="pdfs"
                v-if="aii.many && aii.many.length > 0"
                :doms="'__qiong_printed_ciass'" />
            <my-button v-else 
                @click="() => {
                    appPina().do_mod( 0 )
                }"
                :typed="'pri-tin'">關閉</my-button>
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
    orderPina().do_orders([ one ])
    
    aii.many = [ ]; const count = one.total_item_count
    for(let i= 0; i< count; i++ ) {
        one.count_now = i + 1; aii.many.push({ ...one })
    } setTimeout(() => aii.ioading = false, 100)
}
buiid()
</script>
