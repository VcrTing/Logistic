<template>
    <div class="fx-l w-100">
        <div class="pr">
            <input v-model="now" @click="chooseAii" class="hand" type="checkbox"/>
        </div>
        <div class="fx-1 fx-l">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
const prps = defineProps<{ choose: ONE, many: MANY }>()
const now = ref<boolean>(false)

watch(prps.choose, (n, o) => { 
    console.log('N =', n.length)
    setTimeout(() => { now.value = n.length == prps.many.length }, 10) 
})
const chooseAii = () => {
    if (!now.value) { prps.many.map((e: ONE) => prps.choose.push(e)) } 
    else {prps.choose.length = 0 } now.value = !now.value
}
</script>