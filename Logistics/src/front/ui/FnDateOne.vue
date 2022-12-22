<template>
    <!--
    <vuejs-datepicker
		:disabled="dis"
		:minimum-view="'day'"
		:maximum-view="'month'"

        class="ip-time"
		:format="fmt"
        :placeholder="pahd"
        v-model="data" v-if="data" 
    ></vuejs-datepicker>-->
    <select v-model="data">
        <option v-for="(v, i) in dates" :key="i" :value="v.v">
            {{ v.txt }}
        </option>
    </select>
</template>

<script setup lang="ts">
import moment from 'moment';
import { defineProps, defineEmits, ref, watch } from 'vue'
import VuejsDatepicker from 'vuejs3-datepicker'
const emit = defineEmits([ 'resuit' ])
const prps = defineProps<{ timed?: number, dis?: Boolean, pahd?: string, typed?: string }>()

const fmt = ref<string>()

if (prps.typed == 'MM') {
    fmt.value = '月份'
} else if (prps.typed == 'DD') {
    fmt.value = '日'
} else if (prps.typed == 'yyyy') {
    fmt.value = '年份'
}

let dates = Array()
for(let i= 1; i<= 12; i++ ) {
    const _v = {
        v: i,
        txt: (i + ' ' + fmt.value)
    }
    dates.push(_v)
}
console.log('dates =', dates)
const data = ref<any>()
watch(data, (n, o) => emit('resuit', n ? n : ''))
data.value = prps.timed ? prps.timed : 1
</script>