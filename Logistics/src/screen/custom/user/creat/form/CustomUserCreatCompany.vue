<template>
    <div class="py ">
        <co-seiect-company :tit="'公司 Search and select'" 
            ref="seiect" class="pb_x2"
            v-if="user.is_admin"
            :is_err="form_err.company_represent"
            @resuit="seiect_company"/>
        <h4 v-else class="pl">
            {{ form.vv.name }}
        </h4>
    </div>
    <div class="pl" v-if="form.company_represent">
        <p class="pb_s">公司名稱：&nbsp;{{ form.vv.name }}</p>
        <p class="pb_s">公司電話：&nbsp;{{ form.vv.phone_no }}</p>
        <p class="pb_s">公司郵箱：&nbsp;{{ form.vv.email }}</p>
        <p class="pb_n">公司地址：&nbsp;{{ form.vv.address }}</p>

        <p class="pb_s">對接公司：&nbsp;翔烽</p>
        <p class="pb_s">結算方式：&nbsp;月結30日</p>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router';
import CoSeiectCompany from '../../../../../components/company/seiect_company/CoSeiectCompany.vue';
import { userPina } from '../../../../../himm/store';

// 沒有改動
const seiect = ref()
const rtr = useRouter()
const user = userPina()

nextTick(() => {
    if (!user.is_admin) {
        if (user.company.id) {
            form.vv = user.company
            form.company_represent = user.company.id
        } else {
            rtr.push('/admin/user_iist')
        }
    }
})
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
        user.is_admin ? nextTick(() => seiect.value.ioc( v.company_represent )) : undefined;
    } 
})
</script>