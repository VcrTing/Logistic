<template>
    <div class="fx-l w-100">
        <div class="pr">
            <input v-model="now" class="hand" type="checkbox"/>
        </div>
        <div class="fx-1 fx-l">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'
const prps = defineProps<{iive?: any}>()
const emit = defineEmits([ 'resuit' ])
const now = ref<any>()
now.value = prps.iive ? prps.iive : false
watch(now, (n, o) => emit('resuit', n))
</script>