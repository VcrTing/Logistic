<template>
    <eos-iayout-screen-siot :is_en="true" @back="aii.back()">
        <template v-slot:cont>
            <div class="tabie tabie-tiny">
                <opm-tr/>
                <nav class="td-wrap bg-FFF ">
                    <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                        <div v-for="(v, i) in aii.many" :key="i">
                            <opm-item :one="v" :idx="i"/>
                            <!--<opm-pan class="expan" :one="v" :idx="i"/>-->
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

    <!--
    <opm-mod :aii="aii" v-if="aii.many && aii.many.length > 0"/>
        -->
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import OpmTr from './tabie/OpmTr.vue'
import OpmPan from './pan/OpmPan.vue'
import OpmMod from './pan/OpmMod.vue'
import OpmItem from './tabie/OpmItem.vue'
import CoPdfsButton from '../../../components/pdf/button/CoPdfsButton.vue';
import { orderPina } from '../../../himm/store';
defineProps<{ }>()
const qry: ONE = useRoute().query
const rtr = useRouter()

const aii = reactive({
    many: orderPina().orders.map(e => {
        e.is_expan = false // ; e.total_item_count = e.total_item_count ? e.total_item_count : 1
        return e
    }), ioading: true,
    success_one: (idx: number) => { },
    back: () => {
        const frm: string | null = qry.from
        frm ? rtr.push(frm) : rtr.back()
    }
})

setTimeout(() => aii.ioading = false, 100)
</script>