<template>
    <div>
        <div class="py f-row">
            <eos-input class="w-25 w-333-p" :is_err="form_err.license_plate_no" :header="'車牌：'">
                <input class="input" v-model="form.license_plate_no" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-333-p" :header="'貨車類型：'">
                <ef-car-typed class="input" ref="truck_type"/>
            </eos-input>
            <div class="fx-1"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose, nextTick } from 'vue'

const truck_type = ref()
const form: ONE = reactive({ license_plate_no: '', truck_type: '' })
const form_err = reactive({ license_plate_no: false })

const can = function() { let res = true
    if (!form.license_plate_no) { form_err.license_plate_no = true; return false } else { form_err.license_plate_no = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

const resuit = function() {
    if (can()) {
        form.truck_type = truck_type.value.now; return form 
    } return null
}

defineExpose({ 
    resuit, 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>