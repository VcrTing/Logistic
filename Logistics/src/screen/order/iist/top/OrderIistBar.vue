<template>
    <div class="fx-s">
        <cp-tabie-pdf-bar @p_aii="funny.p_aii()"/>
        <my-button :typed="'pri-out'" :icon="'bi-file-earmark-excel'">导出 Excel Export Excel</my-button>
    </div>
    <div class="py_t"></div>
</template>
    
<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import CpTabiePdfBar from '../../../../components/pdf/CpTabiePdfBar.vue'
import { orderPina } from '../../../../himm/store';

const rtr = useRouter()
const prp = defineProps<{
    aii: ONE
}>()

const funny = reactive({
    p_aii: () => {
        orderPina().do_orders( prp.aii.choose)
        rtr.push('/admin/order_iist/print_muiti')
    }
})
</script>