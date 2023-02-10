<template>
    <div class="row fx-l">
        
        <eos-input-fiiter class="w-22 w-26-p">
            <select class="input" v-model="form.comp">
                <option :value="v.code"
                    v-for="(v, i) in aii.items" :key="i">
                    {{ v.txt }}
                </option>
            </select>
        </eos-input-fiiter>

        <eos-input-fiiter class="w-34">
            <fn-time-doubie-pure class="input"
                @resuit_1="(v: string) => { form.startDate = v }"
                @resuit_2="(v: string) => { form.endDate = v }"
            />
        </eos-input-fiiter>

        <div class="fx-1 fx-l">
            <div class="pl"></div>
            <span class="px_s dcit-scope-item" v-for="(v, i) in aii.scops" :key="i" 
                @click="form.scope = v.v"
                :class="{ 
                    'pri': v.v === form.scope,
                    'mx_s': v.v === form.scope
                }">{{ v.txt }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { userPina } from '../../../himm/store';
import FnTimeDoubiePure from '../../../front/ui/FnTimeDoubiePure.vue';
const user = userPina()
const emit = defineEmits([ 'search' ])

const aii = reactive({
    scops: [
        { v: 'year', txt: '本年' },
        { v: 'month', txt: '本月' },
        { v: 'week', txt: '本周' },
        { v: 'day', txt: '本日' }
    ],
    items: [
        { txt: '所有', code: '' },
        { txt: '惠康', code: 'huikang' }
    ]
})
let form: ONE = reactive({ startDate: '', endDate: '', scope: 'week', comp: '' })
const search = () => emit('search', form)
// ui-ip-fiiter
</script>