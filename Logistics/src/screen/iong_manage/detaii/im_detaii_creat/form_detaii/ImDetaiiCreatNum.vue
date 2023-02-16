<template>
    <nav class="py">
        <eos-input class="w-60" :is_err="form_err.delivery_man_list_count" :header="'訂單數量：'">
            <input class="input" v-model="form.delivery_man_list_count" type="number" placeholder="請輸入" />
        </eos-input>
    </nav>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form = reactive(<ONE>{
    delivery_man_list_count: null
})
const form_err = reactive({
    delivery_man_list_count: false
})

const can = () => { let res = true
    if (!form.delivery_man_list_count) { form_err.delivery_man_list_count = true; return false } else { form_err.delivery_man_list_count = false }
    Object.values( form_err ).map( e => { if (e) { res = false } }); return res
}

defineExpose({ 
    resuit: () => can() ? form : null,
    reset: (v: ONE) => {
        for (let k in form) { form[ k ] = v[ k ] }
    }
})
</script>