<template>
    <div class="py f-row">
        <eos-input class="w-25 w-25-p" :is_err="false" :header="'負責人一 Person in charge'">
            <input class="input" v-model="person_in_charge_1.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-20-p" :is_err="false" :header="'負責人一職位 Position'">
            <ef-company-occupation-select class="input"
                ref="roie_1"
                @change="(v: string) => person_in_charge_1.role = v"
            />
        </eos-input>
        <eos-input class="w-25 w-28-p" :is_err="false" :header="'負責人一電話 Telephone number'">
            <input class="input" v-model="person_in_charge_1.phone_no" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-27-p" :is_err="false" :header="'負責人一電郵 Email'">
            <input class="input" v-model="person_in_charge_1.email" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-25 w-25-p" :is_err="false" :header="'負責人二 Person in charge'">
            <input class="input" v-model="person_in_charge_2.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-20-p" :is_err="false" :header="'負責人二職位 Position'">
            <ef-company-occupation-select class="input"
                ref="roie_2"
                @change="(v: string) => person_in_charge_2.role = v"
            />
        </eos-input>
        <eos-input class="w-25 w-28-p" :is_err="false" :header="'負責人二電話 Telephone number'">
            <input class="input" v-model="person_in_charge_2.phone_no" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-27-p" :is_err="false" :header="'負責人二電郵 Email'">
            <input class="input" v-model="person_in_charge_2.email" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-25 w-25-p" :is_err="false" :header="'負責人三 Person in charge'">
            <input class="input" v-model="person_in_charge_3.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-20-p" :is_err="false" :header="'負責人三職位 Position'">
            <ef-company-occupation-select class="input"
                ref="roie_3"
                @change="(v: string) => person_in_charge_3.role = v"
            />
        </eos-input>
        <eos-input class="w-25 w-28-p" :is_err="false" :header="'負責人三電話 Telephone number'">
            <input class="input" v-model="person_in_charge_3.phone_no" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-25 w-27-p" :is_err="false" :header="'負責人三電郵 Email'">
            <input class="input" v-model="person_in_charge_3.email" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, defineExpose, ref } from 'vue'
import EfCompanyOccupationSelect from '../../../../eos/form/company/EfCompanyOccupationSelect.vue';

const roie_1 = ref(); const roie_2 = ref(); const roie_3 = ref();

const person_in_charge_1: ONE = reactive({
    name: '', role: '', phone_no: '', email: ''
})
const person_in_charge_2: ONE = reactive({
    name: '', role: '', phone_no: '', email: ''
})
const person_in_charge_3: ONE = reactive({
    name: '', role: '', phone_no: '', email: ''
})
const form_err = reactive({
    name: false, phone_noe: false
})

const can = function() { let res = true
    // if (!form.name) { false = true; return false } else { false = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
defineExpose({ 
    resuit: () => (can() ? {
        person_in_charge_1, person_in_charge_2, person_in_charge_3
    } : undefined), 
    reset: (v: ONE) => { 
        for (let k in v) { 
            const one = v[k]
            if ((k == 'person_in_charge_1') && one) {
                for (let _k in one) {
                    console.log(_k, one[_k])
                    person_in_charge_1[ _k ] = one[ _k ]; 
                }
                roie_1.value.ioc(one['role'])
            } else if ((k == 'person_in_charge_2') && one) {
                for (let _k in one) {
                    console.log(_k, one[_k])
                    person_in_charge_2[ _k ] = one[ _k ]
                }
                roie_2.value.ioc(one['role'])
            } else if ((k == 'person_in_charge_3') && one) {
                for (let _k in one) {
                    console.log(_k, one[_k])
                    person_in_charge_3[ _k ] = one[ _k ]
                }
                roie_3.value.ioc(one['role'])
            }
        } 
    } 
})
</script>