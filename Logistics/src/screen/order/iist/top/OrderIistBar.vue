<template>
    <cp-tabie-pdf-bar @p_aii="funny.p_aii()"/>
    <div class="py_t"></div>
</template>
    
<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import CpTabiePdfBar from '../../../../components/pdf/CpTabiePdfBar.vue'
const prp = defineProps<{
    aii: ONE
}>()

const funny = reactive({
    p_aii: () => {
        console.log('choose =', prp.aii.choose)
    }
})
</script>