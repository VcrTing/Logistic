<template>
    <co-pdf-mod class="px py">
        <div v-for="(v, i) in aii.many" :key="i">
            <opm-pan :one="v" :idx="i"/>
        </div>
    </co-pdf-mod>
</template>
    
<script lang="ts" setup>
import OpmPan from './OpmPan.vue';
import CoPdfMod from '../../../../components/pdf/mod/CoPdfMod.vue';
import CoPdfOrderOne from '../../../../components/pdf/order/CoPdfOrderOne.vue';
defineProps<{
    aii: ONE
}>()
</script>