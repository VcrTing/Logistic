<template>
    <div> 
        <div class="py f-row">
            <eos-input class="w-25 w-333-p" :is_err="form_err.order_id" :header="'訂單編號：'" :is_txt_mode="true">
                {{ form.order_id }}
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.date" :header="'訂單日期：'">
                <fn-time @resuit="(v: string) => form.date = v"/>
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.company" :header="'公司名稱：'">
                <select class="input" v-model="form.company">
                    <option>请选择</option>
                </select>
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
    order_id: '', date: '', company: ''
})
const form_err = reactive({
    order_id: false, date: false, company: false
})

const can = function() { let res = true
    if (!form.date) { form_err.date = true; return false } else { form_err.date = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

const ser_res = () => {
    form.normal_shop_customer = { }
    form.normal_shop_customer['company_name'] = ''
    form.normal_shop_customer['linking_company'] = ''
    return form
}

defineExpose({ 
    resuit: () => (can() ? ser_res() : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>