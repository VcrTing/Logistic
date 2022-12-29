<template>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="form_err.password" :header="is_edit ? '新密碼 The new password' : '密碼 Password'">
            <input class="input" v-model="form.password" 
            :placeholder="is_edit ? '請輸入新的密碼 Please Enter the new password' : '請輸入 Please Enter'" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'
const prp = defineProps<{
    is_edit?: boolean
}>()
// 沒有改動

const form: ONE = reactive({
    password: ''
})
const form_err = reactive({
    password: false,
})

const can = function() { let res = true
    if (!prp.is_edit) {
        if (!form.password) { form_err.password = true; return false } else { form_err.password = false }
    }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>