<template>
    <div class="py f-row">
        <eos-input class="w-25 w-333-p" :is_err="form_err.region" :header="'國家/地區：'">
            <!--<eos-addr-region class="input" @resuit="changeRegion"/>-->
            <input class="input" v-model="form.region" placeholder="請輸入"/>
        </eos-input>
        <eos-input class="w-25 w-333-p" :is_err="form_err.area" :header="'区域：'">
            <!--<eos-addr-area v-if="areas" :areas="areas" class="input" @resuit="changeArea"/>-->
            <input class="input" v-model="form.area" placeholder="請輸入"/>
        </eos-input>
        <eos-input class="w-25 w-333-p" :is_err="form_err.district" :header="'区域 2：'">
            <!--<eos-addr-area v-if="areas" :areas="areas" class="input" @resuit="changeArea"/>-->
            <input class="input" v-model="form.district" placeholder="請輸入"/>
        </eos-input>
        
    </div>
    <div class="py">
        <eos-input class="w-100" :is_err="form_err.address" :header="'詳細地址：'">
            <input class="input" v-model="form.address" placeholder="請輸入" />
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form: ONE = reactive({
    region: '', area: '', district: '', address: ''
})
const form_err = reactive({
    region: false, area: false, district: false, address: false
})

const can = () => { let res = true
    if (!form.region) { form_err.region = true; return false } else { form_err.region = false }
    if (!form.area) { form_err.area = true; return false } else { form_err.area = false }
    if (!form.district) { form_err.district = true; return false } else { form_err.district = false }
    if (!form.address) { form_err.address = true; return false } else { form_err.address = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>