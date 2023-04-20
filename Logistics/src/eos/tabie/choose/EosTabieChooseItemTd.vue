<template>
    <div class="fx-l w-100">
        <div class="pr">
            <div @click="chooseOne" class="checkbox" :class="{ 'checkbox-iive': now }">
                <i class="bi bi-check i"></i>
            </div>
        </div>
        <div class="fx-1 fx-l">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
const prps = defineProps<{ one: ONE, aii: ONE }>()

const now = ref<boolean>(false)

watch(() => prps.aii.choose, (n, o) => {
    if (n.length === prps.aii.many.length) {
        now.value = true
    } else {
        _in_where().then((res: number) => { if (res < 0) { now.value = false } })
    }
})

const chooseOne = async () => {
    if (!now.value) { // false = 加入选择
        const ss = await same()
        ss ? undefined : prps.aii.choose.push( prps.one )
    } else { 
        const w = await _in_where()
        prps.aii.choose.splice(w, 1) }
    now.value = !now.value
}

const _in_where = (): Promise<number> => {
    return new Promise(rej => {
        let _i = -1
        prps.aii.choose.map((e: ONE, i: number) => { if (e.id == prps.one.id) { _i = i } })
        rej(_i)
    })
}

const same = () => {
    return new Promise(rej => {
        let res = false
        const _id = prps.one.id ? prps.one.id : -1
        prps.aii.choose.map((e: ONE) => { if (e.id === _id) { res = true }  })
        rej( res )
    })
}
</script>