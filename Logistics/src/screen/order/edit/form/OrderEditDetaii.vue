<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="false" :header="'送貨日期 Delivery date'">
            <fn-time :timed="form.delivery_date" ref="dateRef" @resuit="(n: string) => form.delivery_date = n"/>
        </eos-input>
        <eos-input v-if="false" class="w-50 w-50-p" :is_err="false" :header="'送貨员 Delivery men'">
            <input class="input" v-model="form.delivery_men" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.car_park" :header="'停車場 Parking'">
            <input class="input" type="number" v-model="form.car_park" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.tunnel_fee" :header="'隧道費 Tunnel fee'">
            <input class="input" type="number" v-model="form.tunnel_fee" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.misc_fee" :header="'雜費 Other charges'">
            <input class="input" type="number" v-model="form.misc_fee" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.floor_count" :header="'樓梯層數 Stairs floor'">
            <input class="input" type="number" v-model="form.floor_count" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p" :is_err="form_err.delivery_charge" :header="'運費 Delivery charges'">
            <input class="input" type="number" v-model="form.delivery_charge" placeholder="請輸入 Please enter" />
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.collection_payment" :header="'代收货款 Collection Payment'">
            <input class="input" type="number" v-model="form.collection_payment" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'
import { userPina } from '../../../../himm/store';

// 沒有改動

const form:ONE = reactive({
    car_park: 0, tunnel_fee: 0, misc_fee: 0, 
    floor_count: 0,  collection_payment: 0, 
    delivery_date: '', delivery_charge: 0,
})
const form_err = reactive({
    car_park: false, tunnel_fee: false, misc_fee: false, 
    floor_count: false, collection_payment: false, delivery_charge: false
})

const can = function() { let res = true
    // if (!form.weight) { form_err.weight = true; return false } else { form_err.weight = false }
    Object.values( form_err ).map( e => { if (e) { res = false } }); return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>