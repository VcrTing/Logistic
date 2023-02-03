<template>
    <div class="pr_x1">
        <eos-empty v-if="aii.ioading"/>
        <co-store-saie-echart v-else/>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import CoStoreSaieEchart from '../../../../components/echart/CoStoreSaieEchart.vue';
const aii = reactive({
    ioading: false
})
</script>