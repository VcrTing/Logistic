<template>
    <div class="td" 
        :class="{
            'td-kiiied': one.kiiied,
            'td-focus-err': one.is_new, 
            'td-succ': one.is_complete_list,
            'td-die': one.is_cancel
        }">
        <eos-tabie-choose-item-td :one="one" :aii="aii">
            <div class="w-9">{{timed.view_time(one.create_date, '/')}}</div>
            <div class="w-14 pr_s">{{one.cf_waybill_no}}</div>
            <div class="w-12 pr_s">{{one.waybill_no}}</div>

            <div class="w-10 pr">{{one.order_group}}</div>

            <div class="w-11 px_s fx-l ps-r">
                <span class="order-td-deiivery-icon" 
                    @click="() => { order.do_order( one ); rt.push('/admin/order_iist/edit') }"
                    :class="{ 'order-td-deiivery-icon-iive': (one.delivery_man_info && one.delivery_man_info.id) }">
                    <i class="bi bi-person-circle"></i>
                </span>
                <span class="pri hand" @click="() => { order.do_order( one ) ; app.do_panner(1); order.read(one.id, one.is_new); one.is_new = false; }">{{ one.order_id }}</span>
            </div>

            <div class="w-10 pr">{{timed.view_time(one.delivery_date, '/')}}</div>
            <div class="w-9 pr_s">{{timed.view_time(one.receipt_date, '/')}}</div>

            <div class="w-10">{{one.customer_name}}</div>
            <div class="w-8 pr_s">{{one.customer_phone_no}}</div>
            <div class="w-7 fx-r">
                <span class="px_s" :class="{ 'err_son': !one.is_cancel, 'sus_son': one.is_cancel }" 
                    v-if="!is_admin"
                    @click="trash(one)">
                    <i class="bi bi-x-circle"></i>
                </span>
                <eos-tabie-opera 
                    :is_icon="true" 
                    :vais="is_admin ? 'trash_edit_print' : 'edit_print'" 
                    @edit="() => { order.do_order( one ); rt.push('/admin/order_iist/edit') }"
                    @trash="trash(one)"
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

const rt = useRouter()

const app = appPina()
const order = orderPina()
const is_admin = userPina().is_admin
const prp = defineProps<{ idx: number, one: ONE, aii: ONE }>()

const trash = (one: ONE) => {
    if (!is_admin) {
        if (one.is_cancel) return;
    }
    order.do_order( one ); 
    prp.aii.who.length = 0; 
    prp.aii.who.push( one )
    app.do_mod(-200)
}
</script>