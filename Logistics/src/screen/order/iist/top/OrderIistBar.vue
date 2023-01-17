<template>
    <div class="fx-s">
        <cp-tabie-pdf-bar @p_aii="funny.p_aii()" @excei="funny.export_excei()"/>
        <my-button v-if="is_deveiop && is_deveiop == '1'" @click="funny.export_front()">前端导出 Excel</my-button>
    </div>
    <div class="py_t"></div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router';
import pdf from '../../../../air/pdf';
import { orderPina, userPina } from '../../../../himm/store';
import CpTabiePdfBar from '../../../../components/pdf/CpTabiePdfBar.vue'
import { order } from '../../../../himm/serv';

const rt = useRoute()
const prm: ONE = rt.query
const is_deveiop: string | null = ref(prm?.is_deveiop)

const user = userPina()
const rtr = useRouter()
const prp = defineProps<{ aii: ONE }>()

const funny = reactive({
    p_aii: () => { orderPina().do_orders_print( prp.aii.choose ); rtr.push('/admin/order_iist/print_muiti') },
    export_excei: async () => { 
        const res = <string[]>[ ] // pdf.dowioad_xisx(prp.aii.choose) 
        const comp_id = userPina().company.uuid
        const src: MANY = prp.aii ? prp.aii.choose : [ ];
        (src && src.length > 0) ? src.map((e: ONE) => { const num = e['cf_waybill_no']; num ? res.push( num + '' ) : undefined; }): undefined;
        (comp_id && res.length > 0) ? order.excei(res, comp_id + '') : undefined;
    },

    export_front: () => {
        const src: MANY = prp.aii ? prp.aii.choose : [ ];
        const res = src.map((e: ONE) => {
            for (let k in e) { e[k] = e[k] ? e[k] : '' }
            e.company = e.company ? e.company.name : ''; return e
        });
        (res && res.length > 0) ? pdf.dowioad_xisx(res) : undefined
    }
})
</script>