<template>
    <nav class="panner mb">
        <div class="fx-s">
            <h4>貨品已到貨倉&nbsp;&nbsp;The goods have arrived at the warehouse</h4>
            <div class="fx-r">
                否&nbsp;&nbsp;&nbsp;<eos-switch-ref :form="form" :pk="'is_in_warehouse'"/>&nbsp;&nbsp;是
            </div>
        </div>
    </nav>

    <nav class="panner mb">
        <div class="fx-s">
            <h4>訂單已完成送貨&nbsp;&nbsp;The order has been delivered</h4>
            <div class="fx-r">
                否&nbsp;&nbsp;&nbsp;<eos-switch-ref :form="form" :pk="'is_complete_list'"/>&nbsp;&nbsp;是
            </div>
        </div>
    </nav>

    <nav class="panner mb">
        <div class="fx-s">
            <h4>貨品已離開貨倉運送客人中&nbsp;&nbsp;The goods have left the warehouse</h4>
            <div class="fx-r">
                否&nbsp;&nbsp;&nbsp;<eos-switch-ref :form="form" :pk="'is_leave_warehouse'"/>&nbsp;&nbsp;是
            </div>
        </div>
    </nav>

    <nav class="panner mb">
        <div class="fx-s">
            <h4>貨品未能成功送到客人&nbsp;&nbsp;The goods were not delivered to the guests</h4>
            <div class="fx-r">
                否&nbsp;&nbsp;&nbsp;<eos-switch-ref :form="form" :pk="'is_fail_deliver'"/>&nbsp;&nbsp;是
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'

// 沒有改動
// const dateRef = ref()

const form: ONE = reactive({ 
    is_in_warehouse: false,
    is_leave_warehouse: false,
    is_fail_deliver: false,
    is_complete_list: false })
const form_err = reactive({ is_complete_list: false })
/*
const can = function() { let res = true
    // if (!form.is_complete_list) { form_err.is_complete_list = true; return false } else { form_err.is_complete_list = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
*/
defineExpose({ 
    resuit: () => form, 
    reset: (v: ONE) => { 
        form.is_complete_list = v.is_complete_list; 
        form.is_in_warehouse = v.is_in_warehouse;
        form.is_fail_deliver = v.is_fail_deliver;
        form.is_leave_warehouse = v.is_leave_warehouse
    } 
})
</script>