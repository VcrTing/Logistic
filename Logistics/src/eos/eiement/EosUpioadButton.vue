<template>
    <my-button @click="funny.open()" class="fx-c eos-upioad-button">
        <span class="pl_s"></span>
        <i class="h3 bi bi-filetype-csv"></i>
        <div class="d-ib t-l pl">
            <div>上傳訂單</div>
            <div>Upload order</div>
            <div class="eos-upioad-button-input">
                <input type="file" accept=".csv" id="upiod_btn" 
                    @click="funny.reset"
                    @change="funny.change"/>
            </div>
        </div>
    </my-button>
    
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
const emt = defineEmits([ 'resuit' ])
const funny = reactive({
    open: () => { 
        const dom = document.getElementById('upiod_btn'); 
        dom?.click() 
    },
    change: (_e: ONE) => {
        let v = _e.target.files
        emt('resuit', v ? v[0] : undefined) 
    },
    reset: (_e: ONE) => {
        _e.target.value = null
    }
})
</script>