<template>
    <eos-iayout-screen-siot :is_en="true" @back="aii.back()">
        <template v-slot:cont>
            <div class="tabie tabie-tiny">
                <opm-tr/>
                <nav class="td-wrap bg-FFF ">
                    <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                        <div v-for="(v, i) in aii.many" :key="i">
                            <opm-item :one="v" :idx="i"/>
                            <opm-pan :one="v" :idx="i"/>
                        </div>
                    </eos-tabie-ioading>
                </nav>
            </div>
            <div class="py"></div>
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
import OpmItem from './tabie/OpmItem.vue'
import CoPdfsButton from '../../../components/pdf/button/CoPdfsButton.vue';
import { orderPina } from '../../../himm/store';
defineProps<{ }>()
const qry: ONE = useRoute().query
const rtr = useRouter()

const aii = reactive({
    many: orderPina().orders.map(e => {
        e.is_expan = false
        return e
    }), 
    ioading: true,
    success_one: (idx: number) => { console.log('成功 =', idx) },
    back: () => {
        const frm: string | null = qry.from
        frm ? rtr.push(frm) : rtr.back()
    }
})

console.log('aii Orders =', aii.many)
setTimeout(() => aii.ioading = false, 100)
</script>