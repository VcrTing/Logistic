<template>
    <div class="fx-s">
        <cp-tabie-pdf-bar @p_aii="funny.p_aii()" @excei="funny.export_excei()"/>
    </div>
    <div class="py_t"></div>
</template>
    
<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import pdf from '../../../../air/pdf';
import { orderPina, userPina } from '../../../../himm/store';
import CpTabiePdfBar from '../../../../components/pdf/CpTabiePdfBar.vue'
import { order } from '../../../../himm/serv';

const user = userPina()
const rtr = useRouter()
const prp = defineProps<{ aii: ONE }>()

const funny = reactive({
    p_aii: () => { orderPina().do_orders( prp.aii.choose); rtr.push('/admin/order_iist/print_muiti') },
    export_excei: async () => { 
        const res = <string[]>[ ] // pdf.dowioad_xisx(prp.aii.choose) 
        const comp_id = userPina().comapny.uuid
        const src: MANY = prp.aii ? prp.aii.choose : [ ];
        (src && src.length > 0) ? src.map((e: ONE) => { const num = e['cf_waybill_no']; num ? res.push( num + '' ) : undefined; }): undefined;
        (comp_id && res.length > 0) ? order.excei(res, comp_id + '') : undefined;
    }
})
</script>