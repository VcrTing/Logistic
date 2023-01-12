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
        <eos-input class="w-50 w-60-p" :is_err="form_err.email" :header="'用戶郵箱 User email'">
            <input class="input" v-model="form.email" placeholder="請輸入 Please Enter" />
        </eos-input>
    </div>
    <!--
    <div class="py">
        <co-seiect-company :tit="'所屬公司 Company'" 
            ref="seiect"
            :is_err="form_err.company_represent"
            @resuit="(v: ONE) => (form.company_represent = v ? (v.id + '') : undefined)"/>
    </div>-->
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose, nextTick } from 'vue'
// import CoSeiectCompany from '../../../../../components/company/seiect_company/CoSeiectCompany.vue';

// 沒有改動
const seiect = ref()

const form: ONE = reactive({
    email: '', phone_no: '', company_represent: '', chinese_name: ''
})
const form_err = reactive({
    email: false, phone_no: false, company_represent: false, chinese_name: false
})

const can = function() { let res = true
    if (!form.chinese_name) { form_err.chinese_name = true; return false } else { form_err.chinese_name = false }
    if (!form.phone_no) { form_err.phone_no = true; return false } else { form_err.phone_no = false }
    // if (!form.company_represent) { form_err.company_represent = true; return false } else { form_err.company_represent = false }
    if (!form.email) { form_err.email = true; return false } else { form_err.email = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ] } 
        nextTick(() => seiect.value.ioc( v.company_represent ))
    } 
})
</script>