<template>
    <div> 
        <div class="py f-row">
            <eos-input class="w-25 w-25-p" :is_err="form_err.customer_name" :header="'客戶姓名：'">
                <input class="input" v-model="form.customer_name" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.district" :header="'區域：'">
                <input class="input" v-model="form.district" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.area" :header="'地區：'">
                <input class="input" v-model="form.area" placeholder="請輸入" />
            </eos-input>
        </div>

        <div class="py f-row">
            <eos-input class="w-100" :is_err="form_err.address" :header="'詳細地址：'">
                <textarea class="input" v-model="form.address" placeholder="請輸入" ></textarea>
            </eos-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form: ONE = reactive({
    customer_name: '', district: '', area: '', address: ''
})
const form_err = reactive({
    customer_name: false, district: false, area: false, address: false
})

const can = function() { let res = true
    if (!form.customer_name) { form_err.customer_name = true; return false } else { form_err.customer_name = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>