<template>
    <div class="panner" v-if="one">
        <h2>修改導入前的訂單&nbsp;Edit</h2>
        <div class="pb_x2 pt_x" v-if="form">
            <div class="f-row">
                <eos-input class="w-50" :header="'訂單日期 Order time'">
                    <fn-time ref="timed" @resuit="(n: string) => form.receipt_date = n"/>
                </eos-input>
                <eos-input class="w-50" :is_err="form_err.order_id" :header="'訂單編號 Order no.'">
                    <input class="input" v-model="form.order_id" placeholder="請輸入 Please Enter"/>
                </eos-input>
            </div>
            <div class="py_row"></div>
            <div class="f-row">
                <eos-input class="w-50" :is_err="form_err.waybill_no" :header="'運單編號 Waybill number'">
                    <input class="input" v-model="form.waybill_no" placeholder="請輸入 Please Enter"/>
                </eos-input>
                <eos-input class="w-50" :is_err="form_err.order_group" :header="'訂單組 Order group'">
                    <input class="input" v-model="form.order_group" placeholder="請輸入 Please Enter"/>
                </eos-input>
            </div>
            <div class="py_row"></div>
            <div class="f-row">
                <eos-input class="w-50" :is_err="form_err.total_item_count" :header="'件數 Package'">
                    <input class="input" type="number" v-model="form.total_item_count" placeholder="請輸入 Please Enter"/>
                </eos-input>
            </div>
            <div class="py_row"></div>
            <div class="f-row">
                <eos-input class="w-50" :is_err="form_err.customer_name" :header="'收件人 Recipient'">
                    <input class="input" v-model="form.customer_name" placeholder="請輸入 Please Enter"/>
                </eos-input>
                <eos-input class="w-50" :is_err="form_err.customer_phone_no" :header="'電話號碼 Phone number'">
                    <input class="input" v-model="form.customer_phone_no" placeholder="請輸入 Please Enter"/>
                </eos-input>
            </div>

            <div class="py_row"></div>
            <eos-input class="w-100" :header="'地址 Address'">
                <textarea class="input" v-model="form.address" placeholder="請輸入 Please Enter"></textarea>
            </eos-input>
        </div>
        <div class="fx-c upper">
            <my-button @click="submit">儲存</my-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref, nextTick } from "vue"
import { appPina } from "../../../../../../himm/store"
const timed = ref()
const app = appPina()
const one = appPina().one
const emt = defineEmits([ 'refresh' ])

const form: ONE = reactive({
    receipt_date: '', order_id: '', index: 0, 
    waybill_no: '', order_group: '', total_item_count: 0,
    customer_name: '', 
    customer_phone_no: '', address: ''
})

const form_err = reactive({
    receipt_date: false, order_id: false,
    waybill_no: false, order_group: false, total_item_count: false,
    customer_name: false, 
    customer_phone_no: false, address: false
})

const can = function() { let res = true
    // if (!form.order_id) { form_err.order_id = true; return false } else { form_err.order_id = false }
    // if (!form.waybill_no) { form_err.waybill_no = true; return false } else { form_err.waybill_no = false }
    if (!form.receipt_date) { form_err.receipt_date = true; return false } else { form_err.receipt_date = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

const submit = () => { if (can()) { emt('refresh', form); app.do_mod( 0 ) } }

const reset = (v: any) => {
    if (v) {
        for (let k in form) { form[ k ] = v[ k ] }
        nextTick(() => { v.receipt_date ? timed.value.ioc( v.receipt_date ) : undefined })
    } else { app.do_mod(0) }
}
reset( one )
</script>