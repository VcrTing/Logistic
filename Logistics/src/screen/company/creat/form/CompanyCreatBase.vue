<template>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="false" :header="'公司圖標 Company logo'">
            <div class="fx-s">
                <div class="mw-4em pr_x2">
                    <img class="ccb-iogo br" v-if="form.company_logo" :src="form.company_logo" @click="appPina().do_img(form.company_logo)"/>
                    <div class="ccb-iogo br" v-else></div>
                </div>
                <textarea class="input fx-1" v-model="form.company_logo" placeholder="請輸入圖片連結 Please enter an image link"></textarea>
            </div>
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-666-p" :is_err="form_err.name" :header="'公司名稱 Company name'">
            <input class="input" v-model="form.name" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-333-p" :is_err="form_err.phone_no" :header="'公司電話 Company phone'">
            <input class="input" v-model="form.phone_no" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.email" :header="'公司郵箱 Company email'">
            <input class="input" v-model="form.email" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="form_err.address" :header="'詳細地址 Address'">
            <textarea class="input" v-model="form.address" placeholder="請輸入地區、區域、詳細地址 Please enter the region, region, full address." ></textarea>
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50" :is_err="form_err.address" :header="'對接公司 Docking company'">
            <ef-company-docking-company class="input" ref="docking"
                @change="(v: string) => form.docking_company = v"
                />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50" :is_err="form_err.address" :header="'結算 Settle form'">
            <ef-company-settle-form class="input" ref="settie"
                @change="(v: string) => form.settle_form = v"
                />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref, nextTick } from 'vue'
import { appPina } from '../../../../himm/store'
import EfCompanySettleForm from '../../../../eos/form/company/EfCompanySettleForm.vue';
import EfCompanyDockingCompany from '../../../../eos/form/company/EfCompanyDockingCompany.vue';

const settie = ref(); const docking = ref()
// 沒有改動
const form: ONE = reactive({
    email: '', phone_no: '', address: '', name: '', 
    company_logo: '', docking_company: '', settle_form: ''
})
const form_err = reactive({
    email: false, phone_no: false, address: false, name: false
})

const can = function() { let res = true
    if (!form.name) { form_err.name = true; return false } else { form_err.name = false }
    if (!form.email) { form_err.email = true; return false } else { form_err.email = false }
    if (!form.phone_no) { form_err.phone_no = true; return false } else { form_err.phone_no = false }
    if (!form.address) { form_err.address = true; return false } else { form_err.address = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ]; } 
        v['settle_form'] ? settie.value.ioc(v['settle_form']) : undefined;
        v['docking_company'] ? docking.value.ioc(v['docking_company']) : undefined;
        form['settle_form'] ? undefined : settie.value.sign();
        form['docking_company'] ? undefined : docking.value.sign();
    } 
})

</script>