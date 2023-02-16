<template>
    <div class="row fx-l">
        
        <eos-input-fiiter class="w-20 w-24-p">
            <select class="input" v-model="form.comp">
                <option :value="v.uuid"
                    v-for="(v, i) in aii.items" :key="i">
                    {{ v.name }}
                </option>
            </select>
        </eos-input-fiiter>
<!--
        <eos-input-fiiter class="w-27 w-30-p">
            <fn-time-doubie-pure class="input" ref="doubie"
                @resuit_1="(v: string) => { form.startDate = v }"
                @resuit_2="(v: string) => { form.endDate = v }"
            />
        </eos-input-fiiter> -->

        <div class="fx-1 fx-l">
            <div class="pl"></div>
            <span class="px_s dcit-scope-item hand" v-for="(v, i) in aii.scops" :key="i" 
                @click="form.scope = v.v"
                :class="{ 
                    'pri': v.v === form.scope,
                    'mx_s': v.v === form.scope
                }">{{ v.txt }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { ref, reactive, watch } from 'vue'
import FnTimeDoubiePure from '../../../front/ui/FnTimeDoubiePure.vue';
const prp = defineProps<{ many: MANY }>()
const emit = defineEmits([ 'search' ])
const doubie = ref()
const aii = reactive({
    scops: [
        { v: 'year', txt: '本年', star: '', end: '' },
        { v: 'month', txt: '本月', star: '', end: '' },
        { v: 'week', txt: '本周', star: '', end: '' },
        { v: 'day', txt: '本日', star: '', end: '' },
        // { v: 'custom', txt: '自定義' }
    ],
    items: <ONE>[ { name: '所有', uuid: -1 } ], is_insert: false,
})
let form = reactive({ startDate: '', endDate: '', scope: 'week', comp: -1 })
const search = () => emit('search', form)

watch(() => form.scope, (n: string) => { search() })
watch(() => form.comp, (n: string | number) => { search() })
watch(() => form.startDate, (n: string | number) => { search() })

watch(() => form.endDate, (n: string | number) => {
    const _ed = moment(n)
    const _st = moment(form.startDate)
    if (_ed < _st) {
        // form.endDate = form.startDate; doubie.value.reset_1( form.endDate )
        search()
    } else { search() }
})

defineExpose({
    addcomp: (cps: MANY) => { 
        aii.is_insert ? undefined : cps.map((cp: ONE) => aii.items.push( cp ))
        aii.is_insert = true }
})
</script>