<template>
    <div>
        <div class="py f-row">
            <eos-input class="w-25 w-333-p" :is_err="form_err.order_num" :header="'訂單編號：'">
                <input class="input" v-model="form.order_num" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.order_date" :header="'訂單日期：'">
                <input class="input" v-model="form.order_date" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.company" :header="'公司名稱：'">
                <input class="input" v-model="form.company" placeholder="請輸入" />
            </eos-input>
        </div>

        <div class="py f-row">
            <div>對接公司：</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form: ONE = reactive({
    order_num: '', order_date: '', company: ''
})
const form_err = reactive({
    order_num: false, order_date: false, company: false
})

const can = function() { let res = true
    if (!form.company) { form_err.company = true; return false } else { form_err.company = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>