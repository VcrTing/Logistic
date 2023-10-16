<template>
    <my-button @click="funny.p_aii" :typed="'pri-tin'" :icon="'bi bi-file-earmark-pdf'">
        列印 Print
    </my-button>
    <div class="py_t"></div>
</template>
    
<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router';
import { orderPina } from '../../../../../../himm/store';

const rt = useRoute()
const rtr = useRouter()
const prp = defineProps<{ aii: ONE }>()

const funny = reactive({
    p_aii: () => new Promise((rej) => {
        const cos: MANY = prp.aii.choose ? prp.aii.choose : [ ]
        if (cos && cos.length > 0) {
            orderPina().do_orders_print_2(cos)
            const rts = rtr.resolve({ path: '/admin/order_iist/print_muiti', }); 
            setTimeout(() => window.open(rts.href + '?from=' + rt.path + '&source=2', '_blank'), 400)
        }
        rej(0)
    })
})
</script>