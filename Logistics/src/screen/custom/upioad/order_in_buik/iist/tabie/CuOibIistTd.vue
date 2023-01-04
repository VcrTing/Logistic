<template>
    <div class="td">
        <div class="w-11">
            {{ one.date }}
        </div>
        <div class="w-14">
            {{ one.waybill_no }} 
        </div>
        <div class="w-8">
            {{ one.order_group }}
        </div>
        <div class="w-11 ">
                <div @click="() => { orderPina().do_order( one ) ; app.do_panner(1) }" class="pri hand">{{one.order_id}}</div>
        </div>
        <div class="w-12">
            {{ one.customer_name_zh }}
        </div>
        <div class="w-11">
            {{ one.customer_phone_no }}
        </div>
        <div class="w-30">
            {{ one.address }}
        </div>
        <div class="w-4 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true" @edit="edit"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { appPina, orderPina } from "../../../../../../himm/store"

const prp = defineProps<{
    idx: number,
    one: ONE
}>()
const app = appPina()

const edit = () => {
    console.log('edit =', prp.one)
    app.do_one( prp.one ); app.do_mod(1); 
}
</script>