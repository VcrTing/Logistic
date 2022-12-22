<template>
    <div>
        <eos-tabie-tab :tit_1="'对货单列表'" :tit_2="'场表列表'"/>
        <cp-pdf-button/>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
// defineProps<{ msg: string }>()

const c = ref<object|null>(null)
</script>

<style lang="sass" scoped>

</style>