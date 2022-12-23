<template>
    <div class="py f-row">
        <eos-input class="w-50 w-666-p" :is_err="form_err.code" :header="'公司名稱 Company name'">
            <input class="input" v-model="form.code" placeholder="請輸入 Please Enter" />
        </eos-input>
        <eos-input class="w-50 w-333-p" :is_err="form_err.code_1" :header="'公司電話 Company phone'">
            <input class="input" v-model="form.code_1" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_zh" :header="'公司郵箱 Company email'">
            <input class="input" v-model="form.shop_name_zh" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-25 w-50-p" :is_err="form_err.shop_name_zh" :header="'地區 Region'">
            <eos-addr-region class="input" @resuit="(rg: string, ars: any[]) => { form.region = rg; form.areas = ars }"/>
        </eos-input>
        <eos-input class="w-333 w-50-p" :is_err="form_err.shop_name_zh" :header="'區域 Area'">
            <eos-addr-area class="input" v-if="form.areas" :areas="form.areas"/>
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="form_err.shop_name_en" :header="'詳細地址 Address'">
            <input class="input" v-model="form.shop_name_en" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

// 沒有改動

const form:ONE = reactive({
    region: '', areas: null, area: '',
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