<template>
    <div class="py f-row">
        <eos-input class="w-50 w-666-p" :is_err="form_err.name" :header="'公司名稱 Company name'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please Enter" />
        </eos-input>
        <eos-input class="w-50 w-333-p" :is_err="form_err.phone_no" :header="'公司電話 Company phone'">
            <input class="input" v-model="form.phone_no" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.email" :header="'公司郵箱 Company email'">
            <input class="input" v-model="form.email" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="form_err.address" :header="'詳細地址 Address'">
            <textarea class="input" v-model="form.address" placeholder="請輸入地區、區域、詳細地址 Please enter the region, region, full address." ></textarea>
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'

// 沒有改動
const form: ONE = reactive({
    email: '', phone_no: '', address: '', name: ''
})
const form_err = reactive({
    email: false, phone_no: false, address: false, name: false
})

const can = function() { let res = true
    if (!form.name) { form_err.name = true; return false } else { form_err.name = false }
    if (!form.email) { form_err.email = true; return false } else { form_err.email = false }
    if (!form.phone_no) { form_err.phone_no = true; return false } else { form_err.phone_no = false }
    if (!form.address) { form_err.address = true; return false } else { form_err.address = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>