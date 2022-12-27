<template>
    <div class="py f-row">
        <eos-input class="w-50 w-60-p" :is_err="form_err.chinese_name" :header="'用戶名稱 User name'">
            <input class="input" v-model="form.chinese_name" placeholder="請輸入 Please Enter" />
        </eos-input>
        <eos-input class="w-50 w-40-p" :is_err="form_err.phone_no" :header="'用戶電話 User phone'">
            <input class="input" v-model="form.phone_no" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.email" :header="'用戶郵箱 User email'">
            <input class="input" v-model="form.email" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
    <div class="py">
        <!--
        <eos-input class="" :is_err="form_err.company" :header="'所屬公司 Company'">
            <input class="input" v-model="form.company" placeholder="請輸入 Please Choose" />
        </eos-input>
        -->
        <co-seiect-company :is_err="form_err.company" :tit="'所屬公司 Company'" @resuit="(v: ONE) => (form.company = v ? (v.id + '') : undefined)">

        </co-seiect-company>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import CoSeiectCompany from '../../../../../components/company/seiect_company/CoSeiectCompany.vue';

// 沒有改動
const form: ONE = reactive({
    email: '', phone_no: '', company: '', chinese_name: ''
})
const form_err = reactive({
    email: false, phone_no: false, company: false, chinese_name: false
})

const can = function() { let res = true
    if (!form.chinese_name) { form_err.chinese_name = true; return false } else { form_err.chinese_name = false }
    if (!form.phone_no) { form_err.phone_no = true; return false } else { form_err.phone_no = false }
    if (!form.company) { form_err.company = true; return false } else { form_err.company = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
/*
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
    */
</script>