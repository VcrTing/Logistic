<template>
    <div class="fx-l w-100">
        <div class="pr">
            <input @click="chooseOne" v-model="now" class="hand" type="checkbox"/>
        </div>
        <div class="fx-1 fx-l">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
const prps = defineProps<{ one: ONE, choose: MANY }>()

const now = ref<boolean>(false)

watch(prps.choose, (n, o) => { 
    setTimeout((e: any) => { now.value = ( _in_where() >= 0 ) }, 10) 
})

const chooseOne = () => {
    if (!now.value) { // false = 加入选择
        prps.choose.push( prps.one )
    } else { prps.choose.splice(_in_where(), 1) }
    now.value = !now.value
}

const _in_where = (): number => {
    let _i = -1
    prps.choose.map((e: ONE, i: number) => { if (e.id == prps.one.id) { _i = i } })
    return _i
}
</script>