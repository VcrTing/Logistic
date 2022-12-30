<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.customer_name_zh" :header="'收件人中文名 Chinese name'">
            <input class="input" v-model="form.customer_name_zh" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.customer_name_en" :header="'收件人英文名 English name'">
            <input class="input" v-model="form.customer_name_en" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.customer_phone_no" :header="'收件人電話號碼 Tel.'">
            <input class="input" v-model="form.customer_phone_no" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.district" :header="'地區 District'">
            <input class="input" v-model="form.district" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.area" :header="'區域 Area'">
            <input class="input" v-model="form.area" placeholder="請輸入 Please enter" />
        </eos-input>
        <!--
        <eos-input class="w-50 w-50-p" :is_err="form_err.district" :header="'地區 District'">
            <eos-addr-region class="input" @resuit="(rg: string, ars: any[]) => { form.region = rg; form.areas = ars }"/>
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_zh" :header="'區域 Area'">
            <eos-addr-area class="input" v-if="form.areas" :areas="form.areas"/>
        </eos-input>-->
    </div>
    <div class="py f-row">
        <eos-input class="w-100 w-100-p" :is_err="form_err.address" :header="'地址詳情 Address'">
            <input class="input" v-model="form.address" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'

// 沒有改動

const form:ONE = reactive({ 
    customer_name_zh: '', customer_name_en: '', customer_phone_no: '',
    district: '', area: '', address: ''
})
const form_err = reactive({
    customer_name_zh: false, customer_name_en: false, customer_phone_no: false,
    district: false, area: false, address: false
})

const can = function() { let res = true
    if (!form.customer_name_zh) { form_err.customer_name_zh = true; return false } else { form_err.customer_name_zh = false }
    if (!form.customer_name_en) { form_err.customer_name_en = true; return false } else { form_err.customer_name_en = false }
    if (!form.district) { form_err.district = true; return false } else { form_err.district = false }
    if (!form.area) { form_err.area = true; return false } else { form_err.area = false }
    if (!form.address) { form_err.address = true; return false } else { form_err.address = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>