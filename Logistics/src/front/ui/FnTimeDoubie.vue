<template>
    <div class="ip-time-doubie">
        <div class="fx-l w-100">

            <vuejs-datepicker
                :minimum-view="'day'"
                :maximum-view="'month'"

                class="ip-time" :class="{ 'ip-time-pchd': !cgg.change_1 }"
                :format="'yyyy-MM-dd'"
                :placeholder="pchd_1 ? pchd_1 : '開始日期'"
                v-model="time_1" v-if="time_1" 
            ></vuejs-datepicker>

            <span class="pl_s iptd_icon">
                <i class="bi bi-chevron-right" :class="{ 'sus_ipt': !cgg.change_1 }"></i>
            </span>

            <vuejs-datepicker
                :minimum-view="'day'"
                :maximum-view="'month'"

                class="ip-time" :class="{ 'ip-time-pchd': !cgg.change_2 }"
                :format="'yyyy-MM-dd'"
                :placeholder="pchd_2 ? pchd_2 : '截止日期'"
                v-model="time_2" v-if="time_2" 
            ></vuejs-datepicker>
        </div>
        <div class="ip-time-icon">
            <i class="bi bi-x-circle-fill" @click="() => {
                    reset(); $emit('reset')
                }"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>
import VuejsDatepicker from 'vuejs3-datepicker'
import { reactive, watch, defineEmits, ref } from 'vue'
import timed from '../../air/app/timed';

const emit = defineEmits([ 'resuit_1', 'resuit_2', 'reset' ])
const prp = defineProps<{
    def_1?: string, def_2?: string, is_r?: boolean,
    pchd_1?: string, pchd_2?: string
}>()

const time_1 = ref( prp.def_1 ? prp.def_1 : timed.now() ); 
const time_2 = ref( prp.def_2 ? prp.def_2 : timed.now() )
const cgg = reactive({ change_1: false, change_2: false })

watch(time_1, (n: string) => { 
    if (n == time_2.value) {

    } else { emit('resuit_1', timed.view_time( n )); cgg.change_1 = true }})
watch(time_2, (n: string) => { 
    if (n == time_1.value) {
         
    } else { emit('resuit_2', timed.view_time( n )); cgg.change_2 = true  }
})

const reset = () => { 
    time_1.value = prp.def_1 ? prp.def_1 : timed.now()
    time_2.value = prp.def_2 ? prp.def_2 : timed.now()
    setTimeout(() => {
        cgg.change_1 = false; cgg.change_2 = false;
    }, 50);
}

reset()


</script>

<style lang="sass" scoped>
.iptd_icon
    transform: translateX(-12px)
</style>