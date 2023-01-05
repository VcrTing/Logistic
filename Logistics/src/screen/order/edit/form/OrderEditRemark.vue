<template>

    <eos-input class="w-100" :is_err="form_err.remark" :header="'備註 Remark'">
        <textarea class="input" v-model="form.remark" placeholder="請輸入 Please enter"></textarea>
    </eos-input>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'

// 沒有改動

const form:ONE = reactive({ 
    remark: '', 
})
const form_err = reactive({
    remark: false
})

const can = function() { let res = true
    // if (!form.remark) { form_err.remark = true; return false } else { form_err.remark = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>