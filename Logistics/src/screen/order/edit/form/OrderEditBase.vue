<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="false" :header="'創建日期 Order date'" :is_txt_mode="true">
            <!--<fn-time :timed="form.create_date" ref="dateRef" @resuit="(n: string) => form.create_date = n"/>-->
            {{ form.create_date }}
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="false" :header="'翔烽運單編號 CF waybill number'" :is_txt_mode="true">
            <!--
            <input class="input" disabled :value="''" placeholder="暫不可更改 Cannot be changed" />-->
            {{ form.cf_waybill_no }}
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
        <eos-input class="w-50 w-50-p" :is_err="false" :header="'訂單日期 Order date'">
            <fn-time :timed="form.receipt_date" ref="dateRef" @resuit="(n: string) => form.receipt_date = n"/>
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.total_item_count" :header="'件數 Package'">
            <input class="input" type="number" v-model="form.total_item_count" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p ip-weight" :is_err="false" :header="'重量 Weight'">
            <input class="input" type="number" v-model="form.weight" placeholder="請輸入 Please enter" />
            <span class="ip-unit">kg</span>
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100 w-100-p" :is_err="form_err.product_content" :header="'貨品內容 Product detail'">
            <input class="input" v-model="form.product_content" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="false" :header="'備註 Remark'">
            <input class="input" v-model="form.remarks" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'

// 沒有改動
const dateRef = ref()

const form:ONE = reactive({
    create_date: '', cf_waybill_no: '', waybill_no: '', order_id: '', 
    order_group: '', receipt_date: '', product_content: '', remarks: '',
    weight: '', total_item_count: ''
})
const form_err = reactive({
    create_date: false, waybill_no: false, order_id: false, order_group: false, product_content: false,
    total_item_count: false
})

const can = function() { let res = true
    // if (!form.waybill_no) { form_err.waybill_no = true; return false } else { form_err.waybill_no = false }
    if (!form.total_item_count) { form_err.total_item_count = true; return false } else { form_err.total_item_count = false }
    // if (!form.order_id) { form_err.order_id = true; return false } else { form_err.order_id = false }
    // if (!form.order_group) { form_err.order_group = true; return false } else { form_err.order_group = false }
    // if (!form.product_content) { form_err.product_content = true; return false } else { form_err.product_content = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } dateRef.value.ioc(v.receipt_date) } 
})
</script>