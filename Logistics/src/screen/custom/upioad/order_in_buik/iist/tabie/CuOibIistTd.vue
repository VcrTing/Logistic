<template>
    <div class="td">
        <div class="w-11">
            {{ one.receipt_date }}
        </div>
        <div class="w-14">
            {{ one.waybill_no }} 
        </div>
        <div class="w-8">
            {{ one.order_group }}
        </div>
        <div class="w-11 ">
            <div @click="() => { app.do_one( one ) ; app.do_panner(1) }" class="pri hand">{{ one.order_id }}</div>
        </div>
        <div class="w-12">
            {{ one.customer_name }}
        </div>
        <div class="w-11">
            {{ one.customer_phone_no }}
        </div>
        <div class="w-30">
            {{ one.address }}
        </div>
        <div class="w-4 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true" @edit="() => {
                app.do_one( prp.one ); app.do_mod(1); 
            }"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { appPina } from "../../../../../../himm/store"

const prp = defineProps<{
    idx: number, one: ONE
}>()
const app = appPina()
</script>