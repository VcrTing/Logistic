<template>
    <div class="fx-l w-100">
        <div class="pr">
            <div v-if="!aii.ioading && !ioading" class="checkbox" @click="chooseAii" 
                :class="{ 'checkbox-iive': (aii.choose.length === aii.many.length) }">
                <i class="bi bi-check i"></i>
            </div>
            <div v-else class="checkbox-ioading">
                <div class="bi-ioading"></div>
            </div>
        </div>
        <div class="fx-1 fx-l"><slot></slot></div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
const prps = defineProps<{ aii: ONE }>();

const ioading = ref(false)

const chooseAii = () => {
    return new Promise(rej => {
        if (prps.aii.ioading == false && ioading.value == false) {
            ioading.value = true
            const _L = prps.aii.many.length
            prps.aii.choose = (prps.aii.choose.length === _L) ? [ ] : JSON.parse( JSON.stringify( prps.aii.many ) )
            setTimeout(() => ioading.value = false, 200)
        }
    })
}
</script>