<template>
    <div class="py ">
        <co-seiect-company :tit="'公司 Search and select'" 
            ref="seiect"
            :is_err="form_err.company_represent"
            @resuit="seiect_company"/>
    </div>
    <div class="pt_x2 pl" v-if="form.company_represent">
        <p class="pb_s">公司名称：&nbsp;{{ form.vv.name }}</p>
        <p class="pb_s">公司电话：&nbsp;{{ form.vv.phone_no }}</p>
        <p class="pb_s">公司邮箱：&nbsp;{{ form.vv.email }}</p>
        <p class="pb_s">公司地址：&nbsp;{{ form.vv.address }}</p>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref, nextTick } from 'vue'
import CoSeiectCompany from '../../../../../components/company/seiect_company/CoSeiectCompany.vue';

// 沒有改動
const seiect = ref()

// 沒有改動
const form: ONE = reactive({ company_represent: '', vv: { } })
const form_err = reactive({ company_represent: false })

const can = function() { let res = true
    if (!form.company_represent) { form_err.company_represent = true; return false } else { form_err.company_represent = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

const seiect_company = (v: ONE) => { form.vv = v; form.company_represent = v ? (v.id + '') : undefined }

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { 
        // for (let k in form) { form[ k ] = v[ k ] }
        nextTick(() => seiect.value.ioc( v.company_represent ))
    } 
})
</script>