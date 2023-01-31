<template>
    <div class="fx-l">
        <h3>订单已完成送货
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
        </h3>
        <div class="py f-row">
            <div class="fx-l">
                <span>否&nbsp;&nbsp;</span>
                <eos-switch @resuit="(v: boolean) => form.finished = v"/>
                <span>&nbsp;&nbsp;是</span>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
    finished: false
})
</script>