<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.code" :header="'收件人中文名 Chinese name'">
            <input class="input" v-model="form.code" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.code_1" :header="'收件人中文名 English name'">
            <input class="input" v-model="form.code_1" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_zh" :header="'收件人电话号码 Tel.'">
            <input class="input" v-model="form.shop_name_zh" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_zh" :header="'地区 Region'">
            <eos-addr-region class="input" @resuit="(rg: string, ars: any[]) => { form.region = rg; form.areas = ars }"/>
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.shop_name_zh" :header="'区域 District'">
            <eos-addr-area class="input" v-if="form.areas" :areas="form.areas"/>
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100 w-100-p" :is_err="form_err.shop_name_zh" :header="'地址详情 Address'">
            <input class="input" v-model="form.shop_name_zh" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

// 没有改动

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