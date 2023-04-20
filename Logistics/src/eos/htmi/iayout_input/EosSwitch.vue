<template>
    <div class="switch-wrapper">
        <div class="rnd switch eos-switch" :class="{ 'switch-active': now, 'switch-die': !now }" @click="(now = !now)">
            <div class="switch-inner"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'
const emt = defineEmits([ 'resuit' ])
const prp = defineProps<{ def?: boolean }>()

const now = ref<boolean>(prp.def ? prp.def : false)
watch(now, (n, o) => emt('resuit', n))
defineExpose({
    ioc: (def: boolean) => now.value = def
})
</script>