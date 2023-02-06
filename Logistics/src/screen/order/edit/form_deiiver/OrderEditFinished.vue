<template>
    <div class="py fx-s">
        <h4>訂單已完成送貨&nbsp;&nbsp;The order has been delivered</h4>
        <div class="fx-r">
            否&nbsp;&nbsp;&nbsp;<eos-switch/>&nbsp;&nbsp;是
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'

// 沒有改動
const dateRef = ref()

const form:ONE = reactive({
    phone_no: '', chinese: '', english: ''
})
const form_err = reactive({
    create_date: false, waybill_no: false, order_id: false,
})

const can = function() { let res = true
    if (!form.waybill_no) { form_err.waybill_no = true; return false } else { form_err.waybill_no = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } dateRef.value.ioc(v.receipt_date) } 
})
</script>