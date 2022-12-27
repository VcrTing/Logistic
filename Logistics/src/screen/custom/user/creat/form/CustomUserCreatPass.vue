<template>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="form_err.pass" :header="'密碼 Password'">
            <input class="input" v-model="form.pass" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

// 沒有改動

const form:ONE = reactive({
    pass: ''
})
const form_err = reactive({
    pass: false,
})

const can = function() { let res = true
    if (!form.pass) { form_err.pass = true; return false } else { form_err.pass = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>