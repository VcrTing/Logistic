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
    p_aii: () => {
        const cos: MANY = prp.aii.choose ? prp.aii.choose : [ ]
        if (cos && cos.length > 0) {
            orderPina().do_orders( cos )
            const rts = rtr.resolve({
                path: '/admin/order_iist/print_muiti', query: { from: rt.path }
            }); 
            window.open(rts.href, '_blank')
        }
    }
})
</script>