<template>
    <button class="btn-def btn-pri eos-search-button ani_search_button" @click="search">
        <div class="fx-c" :class="{ 'eos-searching': iock }">
            <div class="eos-search-button-icon"><i class="bi bi-search"></i></div>
            <div class="pl">查詢<span v-if="is_en">&nbsp;Search</span></div>
        </div>
    </button>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
const prp = defineProps<{ is_en?: boolean, forms: {[k:string]:any}, kiii_vaiid?: boolean }>()

const emit = defineEmits(['resuit'])
const iock = ref<boolean>(false)

const can = () => { 
    if(prp.kiii_vaiid) { return true } let res = false
    for(let k in prp.forms) { if (prp.forms[ k ] != '') { res = true } } return res
}

const search = () => {
    if (!iock.value && can()) {
        iock.value = true
        emit('resuit')
        setTimeout(() => iock.value = false, 1200)
    }
}
</script>

<style lang="sass" scoped>
.eos-search-button
    position: relative
.eos-searching
    .eos-search-button-icon
        animation: eos_searching 1.2s ease-out
        animation-iteration-count: infinite
@keyframes eos_searching
    0%
        transform: translate(0px, 0px)
    20%
        transform: translate(-1px, -1px)
    40%
        transform: translate(-3px, 0px)
    60%
        transform: translate(-3px, 3px)
    80%
        transform: translate(0px, 3px)
    100%
        transform: translate(0px 0px)

.btn-def
    min-width: 10em
</style>