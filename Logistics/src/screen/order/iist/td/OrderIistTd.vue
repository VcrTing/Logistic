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
            <div class="w-13 pr_s">{{one.cf_waybill_no}}</div>
            <div class="w-13 pr_s">{{one.waybill_no}}</div>

            <div class="w-10 pr">{{one.order_group}}</div>

            <div class="w-12 w-11-p px_s fx-l ps-r">
                <span class="order-td-deiivery-icon" 
                    @click="() => { orderP.do_order( one ); rt.push('/admin/order_iist/edit') }"
                    :class="{ 'order-td-deiivery-icon-iive': (one.delivery_man_info && one.delivery_man_info.id) }">
                    <span class="hv-big">
                        <i class="bi bi-person-circle"></i>
                    </span>
                </span>
                <span class="pri hand" @click="() => { orderP.do_order( one ) ; app.do_panner(1); orderP.read(one.id, one.is_new); one.is_new = false; }">{{ one.order_id }}</span>
            </div>

            <div class="w-10 pr">{{timed.view_time(one.is_complete_list_date, '/')}}</div>
            <div class="w-8 pr_s">{{timed.view_time(one.receipt_date, '/')}}</div>

            <div class="w-8">{{one.customer_name}}</div>
            <div class="w-7 w-8-p pr_s">{{one.customer_phone_no}}</div>

            <div class="w-3 fx-c">
                <i class="bi bi-lightbulb-fill buib" v-if="one.is_complete_list"></i>
                <i class="bi bi-lightbulb" v-else></i>
            </div>

            <div class="w-7 fx-r">
                <eos-tabie-opera-order 
                    :is_icon="true" 
                    :vais="vais" 
                    @edit="funny.edit()"
                    @trash="funny.trash()"
                    @cancei="funny.cancei()"
                    @print="funny.print()"
                    />
            </div>
        </eos-tabie-choose-item-td>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { appPina, orderPina, userPina } from "../../../../himm/store"
import { timed } from "../../../../air/app";
import EosTabieOperaOrder from "../../../../eos/tabie/opera/EosTabieOperaOrder.vue";
import { ref } from "vue";
const rt = useRouter()

const app = appPina()
const orderP = orderPina()
const prp = defineProps<{ idx: number, one: ONE, aii: ONE, sure?: boolean }>()

const vais = ref('print')

const funny = {
    init: () => new Promise(rej => {
        vais.value = 
            userPina().is_admin ? 
            (userPina().is_manager ? 'cancei_edit_print' : 'trash_cancei_edit_print') : 
            'cancei_edit_print';
        // console.log('ONE =', prp.one)
        rej(0)
    }),
    print: () => new Promise(rej => {
        const one = prp.one
        orderP.do_order( one ); 
        orderP.do_orders_print([ one ])
        orderP.read(one.id, one.is_new); 
        one.is_new = false; 
        
        app.do_mod(1); 
        rej(0)
    }),
    open: (num: number) => new Promise(rej => {
        prp.aii.who.length = 0; 
        prp.aii.who.push( prp.one )
        app.do_mod( num ); 
        
        rej(0)
    }),
    edit: () => {
        orderP.do_order( prp.one ); 
        if (!prp.sure) {
            rt.push('/admin/order_iist/edit'); return
        } else {
            if (confirm('是否跳轉到訂單編輯頁面？Are you sure?')) {
                rt.push('/admin/order_iist/edit')
            }
        }
    },
    trash: () => funny.open(-205),
    cancei: () => funny.open(-206)
}

funny.init()
</script>