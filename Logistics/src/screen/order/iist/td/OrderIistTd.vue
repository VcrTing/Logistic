<template>
    <div class="td" :class="{ 'td-focus-err': one.is_focus }">
        <eos-tabie-choose-item-td :one="one" :choose="choose">
            <div class="w-9">{{one.date}}</div>
            <div class="w-12 pr_s">{{one.cf_waybill_no}}</div>
            <div class="w-12">{{one.waybill_no}}</div>
            <div class="w-7">{{one.order_group}}</div>
            <div class="w-9 pr">{{one.distribute_time}}</div>
            <div class="w-10 pr_s">
                <div @click="() => { orderPina().do_order( one ) ; app.do_panner(1) }" class="pri hand">{{one.order_id}}</div>
            </div>
            <div class="w-9">
                {{one.customer_name_zh}}<br/>
                {{one.customer_name_en}}
            </div>
            <div class="w-10 pr_s">{{one.customer_phone_no}}</div>
            <div class="w-16">
                {{ one.district }}
                {{ one.area }}
                {{ one.address }}
            </div>
            <div class="w-6 fx-r">
                <eos-tabie-opera :vais="'edit_print'" :is_icon="true" 
                    @edit="edit"
                    @print="rt.push('/admin/order_iist/pdf')"
                    />
            </div>
        </eos-tabie-choose-item-td>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { appPina, orderPina } from "../../../../himm/store"
const app = appPina()
const rt = useRouter()

const prp = defineProps<{
    idx: number, one: ONE, choose: MANY
}>()

const edit = () => {
    orderPina().do_order( prp.one )
    rt.push('/admin/order_iist/edit')
}
</script>