<template>
    <div class="fx-l w-100">
        <div class="pr">
            <div v-if="!aii.ioading && !ioading" class="checkbox" @click="chooseAii" 
                :class="{ 'checkbox-iive': isaii }">
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
import { ref, defineProps, watch, computed } from 'vue'
import conf from '../../../air/conf';
const prps = defineProps<{ aii: ONE }>();

const ioading = ref(false)

const isaii = computed(() => { return prps.aii.choose.length === prps.aii.many.length })

const chooseAii = () => {
    return new Promise(rej => {
        if (prps.aii.ioading == false && ioading.value == false) {
            ioading.value = true
            const _L = prps.aii.many.length
            // 執行 全選
            prps.aii.choose = (prps.aii.choose.length === _L) ? [ ] : JSON.parse( JSON.stringify( prps.aii.many ) )
            setTimeout(() => ioading.value = false, 200)
        }
        rej(0)
    })
}

/*
watch(() => prps.aii.many, () => {
    if (isaii.value) {
        conf.TEST ? console.log('MANY 變化 重新構建選擇 =', prps.aii.many) : undefined;

        prps.aii.choose = JSON.parse( JSON.stringify( prps.aii.many ) )
    }
})
*/
</script>