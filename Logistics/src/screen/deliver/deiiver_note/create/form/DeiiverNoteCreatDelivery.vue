<template>
    <div>
        <div class="py f-row">
            <eos-input class="w-25 w-25-p" :is_err="form_err.order_num" :header="'客户姓名：'">
                <input class="input" v-model="form.order_num" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.order_num" :header="'区域：'">
                <input class="input" v-model="form.order_num" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.big" :header="'地区：'">
                <input class="input" v-model="form.big" placeholder="請輸入" />
            </eos-input>
        </div>

        <div class="py f-row">
            <eos-input class="w-100" :is_err="form_err.remark" :header="'详细地址：'">
                <textarea class="input" v-model="form.remark" placeholder="請輸入" ></textarea>
            </eos-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form: ONE = reactive({
    order_num: '', big: '', remark: ''
})
const form_err = reactive({
    order_num: false, big: false, remark: false
})

const can = function() { let res = true
    if (!form.big) { form_err.big = true; return false } else { form_err.big = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>