<template>
    <div class="td">
        <eos-tabie-choose-item-td :one="one" :aii="aii">
            <div class="w-11">
                {{ one.receipt_date }}
            </div>
            <div class="w-14 pr_s">
                <span class="pri hand" @click="() => {
                        app.do_one( one ); app.do_panner(1)
                    }">
                    {{ one.cf_waybill_no }}
                </span>
            </div>
            <div class="w-14 pr_s">
                {{ one.waybill_no }}
            </div>
            <div class="w-8">
                {{ one.order_group }}
            </div>
            <div class="w-10 pr_s">
                {{ one.order_id }}
            </div>
            <div class="w-11">
                {{ one.customer_name }}
            </div>
            <div class="w-10">
                {{ one.customer_phone_no }}
            </div>
            <div class="w-19 t-elip_x2">
                {{ one.address }}
            </div>
            <div class="w-4 t-r">
                <eos-tabie-opera :vais="'edit'" :is_icon="true"/>
            </div>
        </eos-tabie-choose-item-td>
    </div>
</template>
    
<script lang="ts" setup>
import { useRouter } from "vue-router"
import { appPina } from "../../../../../../himm/store"
const app = appPina()
const rt = useRouter()
const prp = defineProps<{ idx: number, one: ONE, aii: ONE }>()
</script>