<template>
    <div class="py f-row">
        <eos-input class="w-25 w-333-p" :is_err="form_err.code" :header="'Code：'">
            <input class="input" v-model="form.code" placeholder="請輸入" />
        </eos-input>
        <eos-input class="w-25 w-333-p" :is_err="form_err.code_1" :header="'Code 2：'">
            <input class="input" v-model="form.code_1" placeholder="請輸入" />
        </eos-input>
    </div>
    <div class="py">
        <eos-input class="w-50 w-100-p" :is_err="form_err.shop_name_zh" :header="'店鋪中文名稱：'">
            <input class="input" v-model="form.shop_name_zh" placeholder="請輸入" />
        </eos-input>
        <div class="py"></div>
        <eos-input class="w-50 w-100-p" :is_err="form_err.shop_name_en" :header="'店鋪英文名稱：'">
            <input class="input" v-model="form.shop_name_en" placeholder="請輸入" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form:ONE = reactive({
    code: '', code_1: '', shop_name_zh: '', shop_name_en: ''
})
const form_err = reactive({
    code: false, code_1: false, shop_name_zh: false, shop_name_en: false
})

const can = function() { let res = true
    if (!form.code) { form_err.code = true; return false } else { form_err.code = false }
    if (!form.shop_name_zh) { form_err.shop_name_zh = true; return false } else { form_err.shop_name_zh = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>