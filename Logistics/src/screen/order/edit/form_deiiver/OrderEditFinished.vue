<template>
    <nav class="panner mb">
        <div class="fx-s">
            <h4>貨品已到貨倉&nbsp;&nbsp;The goods have arrived at the warehouse</h4>
            <div class="fx-1 fx-r">
                <div class="pl pr_x3 fx-r fx-1">
                    <span class="txt-pri">更新時間:&nbsp;</span>
                    
                    <fn-time-ref class="ip-time-singie ip-time-pri ip_time_r" 
                        v-if="form['is_in_warehouse']"
                        :form="form" :pk="'is_in_warehouse_date'"/>
                    <div v-else></div>
                    <!--
                    <fn-time :timed="form.is_in_warehouse_date" @resuit="(n: string) => { form.is_in_warehouse_date = n }"/>
                    -->
                </div>
                <div class="fx-r">
                    否&nbsp;&nbsp;&nbsp;<eos-switch-ref :pchd="''" :form="form" :pk="'is_in_warehouse'"/>&nbsp;&nbsp;是
                </div>
            </div>
        </div>
    </nav>

    <nav class="panner mb">
        <div class="fx-s">
            <h4>訂單已完成送貨&nbsp;&nbsp;The order has been delivered</h4>
            <div class="fx-r fx-1">
                <div class="pl pr_x3 fx-r fx-1">
                    <span class="txt-pri">更新時間:&nbsp;</span>
                    <fn-time-ref class="ip-time-singie ip-time-pri ip_time_r" 
                        v-if="form['is_complete_list']"
                        :form="form" :pk="'is_complete_list_date'"/>
                </div>
                <div class="fx-r">
                    否&nbsp;&nbsp;&nbsp;<eos-switch-ref :pchd="''" :form="form" :pk="'is_complete_list'"/>&nbsp;&nbsp;是
                </div>
            </div>
        </div>
    </nav>

    <nav class="panner mb">
        <div class="fx-s">
            <h4>貨品已離開貨倉運送客人中&nbsp;&nbsp;The goods have left the warehouse</h4>
            <div class="fx-r fx-1">
                <div class="pl pr_x3 fx-r fx-1">
                    <span class="txt-pri">更新時間:&nbsp;</span>
                    <fn-time-ref class="ip-time-singie ip-time-pri ip_time_r" 
                        v-if="form['is_leave_warehouse']"
                        :form="form" :pk="'is_leave_warehouse_date'"/>
                </div>
                <div class="fx-r">
                    否&nbsp;&nbsp;&nbsp;<eos-switch-ref :pchd="''" :form="form" :pk="'is_leave_warehouse'"/>&nbsp;&nbsp;是
                </div>
            </div>
        </div>
    </nav>

    <nav class="panner mb">
        <div class="fx-s">
            <h4>貨品未能成功送到客人&nbsp;&nbsp;The goods were not delivered to the guests</h4>
            <div class="fx-r fx-1">
                <div class="pl pr_x3 fx-r fx-1">
                    <span class="txt-pri">更新時間:&nbsp;</span>
                    <fn-time-ref class="ip-time-singie ip-time-pri ip_time_r" 
                        v-if="form['is_fail_deliver']"
                        :form="form" :pk="'is_fail_deliver_date'"/>
                </div>
                <div class="fx-r">
                    否&nbsp;&nbsp;&nbsp;<eos-switch-ref :pchd="''" :form="form" :pk="'is_fail_deliver'"/>&nbsp;&nbsp;是
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import moment from 'moment'
import { reactive, defineExpose, watch } from 'vue'
import FnTimeRef from '../../../../front/ui/FnTimeRef.vue'

// 沒有改動
// const dateRef = ref()

const form: ONE = reactive({ 
    is_in_warehouse: false,
    is_leave_warehouse: false,
    is_fail_deliver: false,
    is_complete_list: false,

    is_fail_deliver_date: '',
    is_in_warehouse_date: '',
    is_complete_list_date: '',
    is_leave_warehouse_date: '',
})
const form_err = reactive({ is_complete_list: false })

const isfaisetime = (k: string = '') => { 
    if (k) { 
        if (form[k]) { } 
        else { form[k + '_date'] = moment().format("yyyy-MM-DD") } } }

const endfortrue = (k: string = '') => {
    if (k && form[k]) {
        if (!form[k + '_date']) {
            form[k + '_date'] = moment().format("yyyy-MM-DD")
        }
    } 
}
watch(() => form.is_in_warehouse, (n: boolean) => isfaisetime('is_in_warehouse'))
watch(() => form.is_leave_warehouse, (n: boolean) => isfaisetime('is_leave_warehouse'))
watch(() => form.is_fail_deliver, (n: boolean) => isfaisetime('is_fail_deliver'))
watch(() => form.is_complete_list, (n: boolean) => isfaisetime('is_complete_list'))

defineExpose({ 
    resuit: () => {
        endfortrue('is_in_warehouse')
        endfortrue('is_fail_deliver')
        endfortrue('is_complete_list')
        endfortrue('is_leave_warehouse')
        return form
    }, 
    reset: (v: ONE) => { 
        for (let k in v) { 
            // if (v[k] === true) { form[k] = v[k] }
            form[k] = v[k]
        } 
    } })
</script>