<template>
    <div>
        <div class="py f-row">
            <eos-input class="w-25 w-25-p" :is_err="form_err.small_cross_district" :header="'小跨區：'">
                <input class="input" v-model="form.small_cross_district" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.large_cross_district" :header="'大跨區：'">
                <input class="input" v-model="form.large_cross_district" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.car_park" :header="'停車場：'">
                <input class="input" v-model="form.car_park" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.tunnel_fee" :header="'隧道費：'">
                <input class="input" v-model="form.tunnel_fee" placeholder="請輸入" />
            </eos-input>
        </div>

        <div class="py f-row">
            <eos-input class="w-25 w-25-p" :is_err="form_err.misc_fee" :header="'親費：'">
                <input class="input" v-model="form.misc_fee" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.floor_count" :header="'樓梯層數：'">
                <input class="input" v-model="form.floor_count" placeholder="請輸入" />
            </eos-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
 
const form: ONE = reactive({
    small_cross_district: '', large_cross_district: '', car_park: '', tunnel_fee: '', misc_fee: '', floor_count: ''
})
const form_err = reactive({
    small_cross_district: false, large_cross_district: false, car_park: false,
    tunnel_fee: false, misc_fee: false, floor_count: false
})

const can = function() { let res = true
    if (!form.small_cross_district) { form_err.small_cross_district = true; return false } else { form_err.small_cross_district = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>