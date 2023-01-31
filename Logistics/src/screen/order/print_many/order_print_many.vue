<template>
    <eos-iayout-screen-siot :is_en="true" @back="aii.back()">
        <template v-slot:cont>
            <div class="tabie tabie-tiny">
                <opm-tr :aii="aii"/>
                <nav class="td-wrap bg-FFF ">
                    <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                        <div v-for="(v, i) in aii.many" :key="i">
                            <opm-item :one="v" :idx="i"/>
                        </div>
                    </eos-tabie-ioading>
                </nav>
            </div>
            <div class="py"></div>
            <order-iist-fixed-panner/>
        </template>
        <template v-slot:bar>
            <co-pdfs-button :doms="'__qiong_printed_muiti_ciass'" :caii="aii.success_one"/>
        </template>
    </eos-iayout-screen-siot>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import OpmTr from './tabie/OpmTr.vue'
import OpmPan from './pan/OpmPan.vue'
import OpmMod from './pan/OpmMod.vue'
import OpmItem from './tabie/OpmItem.vue'
import OrderIistFixedPanner from '../iist/pan/OrderIistFixedPanner.vue'
import CoPdfsButton from '../../../components/pdf/button/CoPdfsButton.vue';
import { orderPina } from '../../../himm/store';
const qry: ONE = useRoute().query
const rtr = useRouter()

const source: string | null = qry.source

const aii = reactive({
    many: <MANY>[ ], ioading: true,
    success_one: (idx: number) => { },
    back: () => {
        const frm: string | null = qry.from
        frm ? rtr.push(frm) : rtr.back()
    }
})
console.log('source =', source)
if (source && (String(source) === '2')) {
    aii.many = orderPina().orders_print_2
    console.log('aii.many =', aii.many)
} else {
    aii.many = orderPina().orders_print
}

setTimeout(() => aii.ioading = false, 100)
</script>