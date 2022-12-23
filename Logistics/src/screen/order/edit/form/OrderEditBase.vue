<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.code" :header="'订单日期 Order date'">
            <fn-time/>
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.code_1" :header="'翔烽运单编号 CF waybill number'">
            <input class="input" v-model="form.code_1" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_zh" :header="'客户运单编号 Waybill number'">
            <input class="input" v-model="form.shop_name_zh" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_en" :header="'订单编号 Order No.'">
            <input class="input" v-model="form.shop_name_en" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_zh" :header="'订单组 Group'">
            <input class="input" v-model="form.shop_name_zh" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100 w-100-p" :is_err="form_err.shop_name_zh" :header="'货品内容 Product detail'">
            <input class="input" v-model="form.shop_name_zh" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

// 没有改动

const form:ONE = reactive({
    code: '', code_1: '', shop_name_zh: '', shop_name_en: ''
})
const form_err = reactive({
    code: false, code_1: false, shop_name_zh: false, shop_name_en: false
})

const can = function() { let res = true
    if (!form.code) { form_err.code = true; return false } else { form_err.code = false }
    if (!form.shop_name_zh) { form_err.shop_name_zh = true; return false } else { form_err.shop_name_zh = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>