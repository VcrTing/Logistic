<template>
    <div class="switch-wrapper">
        <div class="rnd switch eos-switch" :class="{ 'switch-active': form[pk], 'switch-die': !form[pk] }" @click="form[pk] = !form[pk]">
            <div class="switch-inner"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { ref, watch, defineEmits } from 'vue'
// const emt = defineEmits([ 'resuit' ])
// const prp = 
defineProps<{ form: ONE, pk: string }>()

// const now = ref<boolean>(prp.def ? prp.def : false)
// watch(now, (n, o) => emt('resuit', n))

// defineExpose({ ioc: (def: boolean) => now.value = def })
</script>