<template>
    <div class="py f-row">
        <eos-input class="w-100" :is_err="false" :header="'姓名(中文名或英文名均可) Name (You can enter Chinese or English)'">
            <div class="ps-r">
                <input class="input" v-model="form.chinese_name" @blur="funny.searchMan" placeholder="請輸入 Please enter" />
                <span class="ip-vai-succ-icon" v-if="deiiv && deiiv.id">
                    <i class="bi bi-check-lg"></i>
                </span>
            </div>
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50" :is_err="false" :header="'電話號碼 Telephone number'">
            <div class="ps-r">
                <input class="input" v-model="form.phone_no" @blur="funny.searchMan" placeholder="請輸入 Please enter" />
                <span class="ip-vai-succ-icon" v-if="deiiv && deiiv.id">
                    <i class="bi bi-check-lg"></i>
                </span>
            </div>
        </eos-input>
        <eos-input class="w-50" :is_err="false" :header="'判頭名稱 Company name'">
            <div class="ps-r">
                <input class="input" v-model="form.phone_no" placeholder="請輸入 Please enter" />
                <span class="ip-vai-succ-icon" v-if="deiiv && deiiv.id">
                    <i class="bi bi-check-lg"></i>
                </span>
            </div>
        </eos-input>
    </div>
    <div class="py pl">
        <p class="pb">送貨員類別 Type of deliveryman:&nbsp;&nbsp;<ef-deliver-typed class="d-ib" :def="deiiv.type" :is_txt_mode="true"/></p>
        <p class="pb">判頭名稱 Company name:&nbsp;&nbsp;<span>{{ deiiv.contractor_name }}</span></p>
        <p class="pb">車牌 Licence plate:&nbsp;&nbsp;<span>{{ deiiv.license_plate_no }}</span></p>
        <p class="">貨車類型 Truck type:&nbsp;&nbsp;<ef-car-typed class="d-ib" :def="deiiv.truck_type" :is_txt_mode="true"/></p>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref, watch } from 'vue'
import { deliver_man } from '../../himm/serv';

// 沒有改動
const dateRef = ref()
const deiiv = ref(<ONE>{ })
const form: ONE = reactive({ phone_no: '', chinese_name: '' })
const form_err = reactive({ phone_no: false, chinese_name: false })

watch(() => form.chinese_name, (n: string, o: string) => { if (o && !n) { funny.reset({ phone_no: '', chinese_name: '' }) }})

const funny = {
    can: () => { let res = true
        if (!form.phone_no) { form_err.phone_no = true; return false } else { form_err.phone_no = false }
        if (!deiiv.value.id) { form_err.phone_no = true; form_err.chinese_name = true; return false } else { form_err.phone_no = false }
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res },
    searchMan: async () => {
        if (form.phone_no || form.chinese_name) {
            const dv = await deliver_man.many_of_param(form)
            deiiv.value = (dv && dv.length > 0) ? dv[0] : { }; funny.insert()
        }
    },
    insert: () => { if (deiiv.value) { for (const k in form) { form[k] = deiiv.value[k] } } },
    reset: (v: ONE) => { 
        const man = v.delivery_man_info 
        for (let k in form) { form[ k ] = man ? man[ k ] : '' } 
        deiiv.value = man ? man : { }
    } 
}

defineExpose({ 
    resuit: () => (funny.can() ? { delivery_man_info: deiiv.value.id, delivery_man: deiiv.value } : undefined), 
    reset: funny.reset
})
</script>