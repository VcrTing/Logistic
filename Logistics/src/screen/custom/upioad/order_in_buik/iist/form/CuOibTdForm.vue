<template>
    <div class="panner" v-if="appRef.one">
        <h2>訂單修改</h2>
        <div class="pb_x2 pt" v-if="form.order_id">
            <div class="f-row">
                <eos-input class="w-50" :header="'訂單日期'">
                    <fn-time ref="timed" @resuit="(n: string) => form.date = n"/>
                </eos-input>
                <eos-input class="w-50" :is_err="form_err.order_id" :header="'訂單編號'">
                    <input class="input" v-model="form.order_id" placeholder="請輸入 Please Enter"/>
                </eos-input>
            </div>
            <div class="py_row"></div>
            <div class="f-row">
                <eos-input class="w-50" :header="'客戶運單編號'">
                    <input class="input" v-model="form.cf_waybill_number" placeholder="請輸入 Please Enter"/>
                </eos-input>
                <eos-input class="w-50" :is_err="form_err.waybill_no" :header="'運單編號'">
                    <input class="input" v-model="form.waybill_no" placeholder="請輸入 Please Enter"/>
                </eos-input>
            </div>
            <div class="py_row"></div>
            <div class="f-row">
                <eos-input class="w-50" :header="'收件人中文名'">
                    <input class="input" v-model="form.customer_name_zh" placeholder="請輸入 Please Enter"/>
                </eos-input>
                <eos-input class="w-50" :header="'收件人英文名'">
                    <input class="input"  v-model="form.customer_name_en" placeholder="請輸入 Please Enter"/>
                </eos-input>
            </div>

            <div class="py_row"></div>
            <eos-input class="w-100" :is_err="form_err.customer_phone_no" :header="'電話號碼'">
                <input class="input" v-model="form.customer_phone_no" placeholder="請輸入 Please Enter"/>
            </eos-input>

            <div class="py_row"></div>
            <eos-input class="w-100" :header="'地址'">
                <input class="input" v-model="form.address" placeholder="請輸入 Please Enter"/>
            </eos-input>
        </div>
        <div class="fx-c">
            <my-button @click="submit">儲存</my-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { reactive, ref, nextTick, watch } from "vue"
import { appPina } from "../../../../../../himm/store"
const timed = ref()
const app = appPina()
const appRef = storeToRefs(app)
const emt = defineEmits([ 'refresh' ])

const form: ONE = reactive({
    date: '', order_id: '', index: 0,
    cf_waybill_number: '', waybill_no: '',
    customer_name_zh: '', customer_name_en: '',
    customer_phone_no: '', address: ''
})

const form_err = reactive({
    date: false, order_id: false,
    cf_waybill_number: false, waybill_no: false,
    customer_name_zh: false, customer_name_en: false,
    customer_phone_no: false, address: false
})

const can = function() { let res = true
    if (!form.order_id) { form_err.order_id = true; return false } else { form_err.order_id = false }
    if (!form.waybill_no) { form_err.waybill_no = true; return false } else { form_err.waybill_no = false }
    if (!form.customer_phone_no) { form_err.customer_phone_no = true; return false } else { form_err.customer_phone_no = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

const submit = () => { if (can()) { emt('refresh', form); app.do_mod( 0 ) } }

const reset = (v: any) => {
    if (v && v.order_id) {
        for (let k in form) { form[ k ] = v[ k ] }
        nextTick(() => { v.date ? timed.value.ioc( v.date ) : undefined })
    } else { app.do_mod(0) }
}
watch(appRef.one, (n) => reset(n))
</script>