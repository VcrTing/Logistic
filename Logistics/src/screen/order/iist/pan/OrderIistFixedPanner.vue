<template>
    <eos-fixed-panner v-if="one && one.order_id">
        <co-order-fp-cont :one="one"/>
    </eos-fixed-panner>
    <eos-fixed-panner v-else>
        <eos-empty/>
    </eos-fixed-panner>
</template>
    
<script lang="ts" setup>
import { watch, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { orderPina } from '../../../../himm/store';
import CoOrderFpCont from '../../../../components/order/CoOrderFpCont.vue';

const appREF = storeToRefs(orderPina())
const one: ONE = ref()
watch(appREF.order, (n: ONE) => {
    (one.value = n);
})
</script>