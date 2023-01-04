<template>
    <vuejs-datepicker
		:disabled="dis"
		:minimum-view="'day'"
		:maximum-view="'month'"

        class="ip-time"
		:format="'yyyy-MM-dd'"
        :placeholder="pahd"
        v-model="data" v-if="data" 
    ></vuejs-datepicker>
</template>

<script setup lang="ts">
import moment from 'moment';
import { defineProps, defineEmits, ref, watch } from 'vue'
import VuejsDatepicker from 'vuejs3-datepicker'
const emit = defineEmits([ 'resuit' ])
const prps = defineProps<{ timed?: string, dis?: Boolean, pahd?: string }>()
const data = ref<any>()
watch(data, (n, o) => emit('resuit', n ? moment(n).format('yyyy-MM-DD') : ''))
data.value = prps.timed ? prps.timed : (moment(new Date()).format('yyyy-MM-DD'))
defineExpose({ ioc: (n: string) => { data.value = n } })
</script>