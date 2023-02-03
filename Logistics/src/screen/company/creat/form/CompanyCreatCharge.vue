<template>
    <div class="py f-row">
        <eos-input class="w-25 w-25-p" :is_err="form_err.name" :header="'負責人一 Person in charge'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-20-p" :is_err="form_err.name" :header="'負責人一職位 Position'">
            <ef-company-occupation-select class="input"/>
        </eos-input>
        <eos-input class="w-25 w-28-p" :is_err="form_err.name" :header="'負責人一電話 Telephone number'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-27-p" :is_err="form_err.name" :header="'負責人一電郵 Email'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-25 w-25-p" :is_err="form_err.name" :header="'負責人二 Person in charge'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-20-p" :is_err="form_err.name" :header="'負責人二職位 Position'">
            <ef-company-occupation-select class="input"/>
        </eos-input>
        <eos-input class="w-25 w-28-p" :is_err="form_err.name" :header="'負責人二電話 Telephone number'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-27-p" :is_err="form_err.name" :header="'負責人二電郵 Email'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-25 w-25-p" :is_err="form_err.name" :header="'負責人三 Person in charge'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-20-p" :is_err="form_err.name" :header="'負責人三職位 Position'">
            <ef-company-occupation-select class="input"/>
        </eos-input>
        <eos-input class="w-25 w-28-p" :is_err="form_err.name" :header="'負責人三電話 Telephone number'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-27-p" :is_err="form_err.name" :header="'負責人三電郵 Email'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, defineExpose } from 'vue'
import EfCompanyOccupationSelect from '../../../../eos/form/company/EfCompanyOccupationSelect.vue';

const form: ONE = reactive({
    name: ''
})
const form_err = reactive({
    name: false
})

const can = function() { let res = true
    if (!form.name) { form_err.name = true; return false } else { form_err.name = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>