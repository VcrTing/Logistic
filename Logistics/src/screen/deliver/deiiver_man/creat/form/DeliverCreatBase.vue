<template>
    <div>
        <div class="py f-row">
            <eos-input class="w-25 w-333-p" :is_err="form_err.chinese_name" :header="'中文名：'">
                <input class="input" v-model="form.chinese_name" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.english_name" :header="'英文名：'">
                <input class="input" v-model="form.english_name" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.id_card_no" :header="'身份證號碼：'">
                <input class="input" v-model="form.id_card_no" placeholder="請輸入" />
            </eos-input>
        </div>
        <div class="py f-row">
            <eos-input class="w-25 w-333-p" :is_err="form_err.phone_no" :header="'電話：'">
                <input class="input" v-model="form.phone_no" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.email" :header="'電郵：'">
                <input class="input" v-model="form.email" placeholder="請輸入" />
            </eos-input>
            <div class="fx-1"></div>
        </div>
        <div class="py f-row">
            <eos-input class="w-25 w-333-p" :is_err="form_err.company_name" :header="'公司名稱（如有）：'">
                <input class="input" v-model="form.company_name" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-333-p" :is_err="form_err.business_registration_no" :header="'商業登記號碼（如有）：'">
                <input class="input" v-model="form.business_registration_no" placeholder="請輸入" />
            </eos-input>
            <div class="fx-1"></div>
        </div>
        <div class="py f-row">
            <eos-input class="w-50 w-333-p" :header="'送貨員類別：'" :is_txt_mode="true">
                <slot></slot>
            </eos-input>
            <eos-input class="fx-1" :is_err="form_err.contractor_name" :header="'判頭名稱：'">
                <input class="input" v-model="form.contractor_name" placeholder="請輸入" />
            </eos-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form: ONE = reactive({
    chinese_name: '', english_name: '', id_card_no: '', phone_no: '', email: '', company_name: '', business_registration_no: '', contractor_name: ''
})
const form_err = reactive({
    chinese_name: false, english_name: false, id_card_no: false, phone_no: false, email: false, company_name: false, business_registration_no: false, contractor_name: false
})

const can = function() { let res = true
    if (!form.chinese_name) { form_err.chinese_name = true; return false } else { form_err.chinese_name = false }
    if (!form.phone_no) { form_err.phone_no = true; return false } else { form_err.phone_no = false }
    if (!form.email) { form_err.email = true; return false } else { form_err.email = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>
