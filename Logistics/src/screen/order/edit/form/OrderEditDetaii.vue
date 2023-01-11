<template>
    <div class="py f-row">
        <eos-input class="w-50 w-50-p ip-weight" :is_err="form_err.weight" :header="'重量 Weight'">
            <input class="input" type="number" v-model="form.weight" placeholder="請輸入 Please enter" />
            <span class="ip-unit">kg</span>
        </eos-input>
        <eos-input class="w-50 w-50-p" :is_err="form_err.total_item_count" :header="'件數 No.'">
            <input class="input" type="number" v-model="form.total_item_count" placeholder="請輸入 Please enter" />
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
        <eos-input class="w-50 w-50-p" :is_err="form_err.collection_payment" :header="'代收货款 Collection Payment'">
            <input class="input" type="number" v-model="form.collection_payment" placeholder="請輸入 Please enter" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'
// 沒有改動

const form:ONE = reactive({
    weight: '', total_item_count: '', car_park: '', tunnel_fee: '', misc_fee: '', 
    floor_count: '',  collection_payment: '',
})
const form_err = reactive({
    weight: false, total_item_count: false, car_park: false, tunnel_fee: false, misc_fee: false, 
    floor_count: false, collection_payment: false
})

const can = function() { let res = true
    if (!form.weight) { form_err.weight = true; return false } else { form_err.weight = false }
    if (!form.total_item_count) { form_err.total_item_count = true; return false } else { form_err.total_item_count = false }
    // if (!form.car_park) { form_err.car_park = true; return false } else { form_err.car_park = false }
    // if (!form.tunnel_fee) { form_err.tunnel_fee = true; return false } else { form_err.tunnel_fee = false }
    // if (!form.floor_count) { form_err.floor_count = true; return false } else { form_err.floor_count = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>