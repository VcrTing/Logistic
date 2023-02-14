<template>
    <div class="py fx-s">
        <h4>訂單已完成送貨&nbsp;&nbsp;The order has been delivered</h4>
        <div class="fx-r">
            否&nbsp;&nbsp;&nbsp;<eos-switch ref="dateRef" @resuit="(v: boolean) => form.is_complete_list = v"/>&nbsp;&nbsp;是
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'

// 沒有改動
const dateRef = ref()

const form: ONE = reactive({ is_complete_list: false })
const form_err = reactive({ is_complete_list: false })

const can = function() { let res = true
    // if (!form.is_complete_list) { form_err.is_complete_list = true; return false } else { form_err.is_complete_list = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => form, 
    reset: (v: ONE) => { form.is_complete_list = v.is_complete_list; dateRef.value.ioc(v.is_complete_list) } 
})
</script>