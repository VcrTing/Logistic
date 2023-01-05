<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.create_date" :header="'訂單日期 Order date'">
            <fn-time :timed="form.create_date" ref="dateRef" @resuit="(n: string) => form.create_date = n"/>
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="false" :header="'翔烽運單編號 CF waybill number'">
            <input class="input" disabled :value="''" placeholder="暫不可更改 Cannot be changed" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.waybill_no" :header="'客戶運單編號 Waybill number'">
            <input class="input" v-model="form.waybill_no" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.order_id" :header="'訂單編號 Order No.'">
            <input class="input" v-model="form.order_id" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.order_group" :header="'訂單組 Group'">
            <input class="input" v-model="form.order_group" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100 w-100-p" :is_err="form_err.product_content" :header="'貨品內容 Product detail'">
            <input class="input" v-model="form.product_content" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'

// 沒有改動
const dateRef = ref()

const form:ONE = reactive({
    create_date: '', waybill_no: '', order_id: '', order_group: '', product_content: ''
})
const form_err = reactive({
    create_date: false, waybill_no: false, order_id: false, order_group: false, product_content: false
})

const can = function() { let res = true
    if (!form.waybill_no) { form_err.waybill_no = true; return false } else { form_err.waybill_no = false }
    if (!form.order_id) { form_err.order_id = true; return false } else { form_err.order_id = false }
    if (!form.order_group) { form_err.order_group = true; return false } else { form_err.order_group = false }
    if (!form.product_content) { form_err.product_content = true; return false } else { form_err.product_content = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } dateRef.value.ioc(v.receipt_date) } 
})
</script>