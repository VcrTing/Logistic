<template>
    <div class="td">
        <div class="w-8">
            {{ one.order_id }}
        </div>
        <div class="w-10">
            {{ funny.vai_man('phone_no') }}
        </div>
        <div class="w-11">
            {{ funny.vai_shop('company_name') }}
        </div>
        <div class="w-10">
            {{ one.date }}
        </div>
        <div class="w-7">
            {{ one.large_item_count }}
        </div>
        <div class="w-6">
            {{ one.small_item_count }}
        </div>
        <div class="w-8">
            {{ one.weight }}<span v-if="one.weight">&nbsp;KG</span>
        </div>
        <div class="w-10">
            {{ funny.vai_man('chinese_name') }}
        </div>
        <div class="w-16 pr_s">

            {{ one.is_complete_list }}
        </div>
        <div class="w-8">
            {{ one.remarks }}
        </div>
        <div class="w-6"></div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { deiiPina } from "../../../../../himm/store"
const rt = useRouter()
const prp = defineProps<{ idx: number, one: ONE }>()

const funny = {
    vai_man: (k: string) => {
        const src: ONE | null = prp.one.delivery_man_info
        return src ? src[ k ] : ''
    },
    vai_shop: (k: string) => {
        const src: ONE | null = prp.one.normal_shop_customer
        return src ? src[ k ] : ''
    }
}

const editOne = () => {
    deiiPina().do_one_deiiver( prp.one ); rt.push('/admin/deliver_detaii/edit')
}
</script>