<template>
    <div class="td" :class="{ 'td-focus-err': one.is_new }">
        <eos-tabie-choose-item-td :one="one" :aii="aii">
            <div class="w-9">{{timed.view_time(one.create_date, '/')}}</div>
            <div class="w-14 pr_s">{{one.cf_waybill_no}}</div>
            <div class="w-12 pr_s">{{one.waybill_no}}</div>

            <div class="w-9 pr_s">{{one.order_group}}</div>
            <div class="w-11 pr_s">
                <div @click="() => { order.do_order( one ) ; app.do_panner(1); order.read(one.id, one.is_new); one.is_new = false; }" 
                    class="pri hand">{{ one.order_id }}</div>
            </div>

            <div class="w-10 pr">{{timed.view_time(one.delivery_date, '/')}}</div>
            <div class="w-10 pr_s">{{timed.view_time(one.receipt_date, '/')}}</div>

            <div class="w-10">
                {{one.customer_name}}
            </div>
            <div class="w-8 pr_s">{{one.customer_phone_no}}</div>

            <!--
            <div class="w-16 t-elip_x2">
                {{ one.address }}
            </div>
            -->
            <div class="w-7 fx-r">
                <eos-tabie-opera :vais="is_admin ? 'trash_edit_print' : 'edit_print'" :is_icon="true" 
                    @edit="() => { order.do_order( one ); rt.push('/admin/order_iist/edit') }"
                    @trash="() => { order.do_order( one ); app.do_mod(-200) }"
                    @print="() => { 
                        order.do_order( one ); app.do_mod(1); order.do_orders_print([ one ])
                        order.read(one.id, one.is_new); one.is_new = false; }"
                    />
            </div>
        </eos-tabie-choose-item-td>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { appPina, orderPina, userPina } from "../../../../himm/store"
import { timed } from "../../../../air/app";
const app = appPina()
const is_admin = userPina().is_admin
const order = orderPina()
const rt = useRouter()

const prp = defineProps<{ idx: number, one: ONE, aii: ONE }>()

</script>