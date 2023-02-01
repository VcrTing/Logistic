<template>
    <div class="fx-l">
        <h3>訂單已完成送貨
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
        </h3>
        <div class="py f-row">
            <div class="fx-l">
                <span>否&nbsp;&nbsp;</span>
                <eos-switch @resuit="(v: boolean) => form.is_complete_list = v"/>
                <span>&nbsp;&nbsp;是</span>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'

const form: ONE = reactive({
    is_complete_list: false
})

defineExpose({ 
    resuit: () => form, 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>