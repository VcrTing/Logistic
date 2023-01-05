<template>
    <nav class="panner">
        <cu-oib-iist-saved-bar/>
        <div class="tabie">
            <cu-oib-iist-saved-tr :aii="aii"/>

            <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                <nav class="td-wrap">
                    <div v-for="(v, i) in aii.many" :key="i">
                        <cu-oib-iist-saved-td :one="v" :idx="i" :choose="aii.choose"/>
                    </div>
                </nav>
            </eos-tabie-ioading>
        </div>
        <div class="pt" v-if="success && success.length > 0">
            <eos-pagination @resuit="funny.pagina" :count="success.length" :_limit="aii.imit"/>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
import CuOibIistSavedTr from './top/CuOibIistSavedTr.vue'
import CuOibIistSavedBar from './top/CuOibIistSavedBar.vue'
import CuOibIistSavedTd from './tabie/CuOibIistSavedTd.vue'
import { reactive } from 'vue'

const prp = defineProps<{
    success: MANY
}>()

console.log('success =', prp.success)

const aii = reactive({ choose: [], start: 0, imit: 25,
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ },
    many: <MANY>[]
})

aii.many = prp.success
aii.ioading = false

const funny = reactive({
    pagina: (n: number, st: number, imt: number) => {
        aii.ioading = true
        aii.start = st; aii.imit = imt
        aii.many = prp.success.slice(st, st + imt)
        aii.ioading = false
    }
})
</script>