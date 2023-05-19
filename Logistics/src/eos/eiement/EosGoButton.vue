<template>
    <button v-if="is_bottom" class="eos-go-button" @click="goGO">
        返回頂部
        <i class="bi bi-arrow-up"></i>
    </button>
    <button v-else class="btn-pri-tin" @click="goGO">
        <i class="bi bi-arrow-down-short"></i>
    </button>
</template>
    
<script lang="ts" setup>
import { defineProps } from 'vue';
const prp = defineProps<{
    is_bottom?: boolean
}>()
const goGO = () => {
    const dom = document.getElementById('center')
    if (dom) {
        const h = dom.scrollHeight + 100; 
        dom.scrollTo({ top: prp.is_bottom ? 0 : h, behavior: 'smooth' })
    }
}
</script>