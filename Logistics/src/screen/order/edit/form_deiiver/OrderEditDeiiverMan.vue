<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="false" :header="'中文名 Chinese name'">
            <input class="input" v-model="form.chinese" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="false" :header="'英文名 English name'">
            <input class="input" v-model="form.english" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="false" :header="'電話號碼 Telephone number'">
            <input class="input" v-model="form.phone_no" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py pl">
        <p class="pb">送貨員類別 Type of deliveryman:&nbsp;&nbsp;貨車司機</p>
        <p class="pb">判頭名稱 Company name:&nbsp;&nbsp;張三</p>
        <p class="pb">車牌 Licence plate:&nbsp;&nbsp;Ak 67876</p>
        <p class="">貨車類型 Truck type:&nbsp;&nbsp;貨VAN</p>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'

// 沒有改動
const dateRef = ref()

const form:ONE = reactive({
    phone_no: '', chinese: '', english: ''
})
const form_err = reactive({
    create_date: false, waybill_no: false, order_id: false,
})

const can = function() { let res = true
    if (!form.waybill_no) { form_err.waybill_no = true; return false } else { form_err.waybill_no = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } dateRef.value.ioc(v.receipt_date) } 
})
</script>