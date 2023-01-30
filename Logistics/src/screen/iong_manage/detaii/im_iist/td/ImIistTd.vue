<template>
    <div class="td">
        <eos-tabie-choose-item-td :one="one" :aii="aii">
            <div class="w-5 w-0-p"><span class="pl">{{ idx + 1 }}</span></div>
            <div class="w-8 w-9-p">{{ one.list_id }}</div>
            <div class="w-7">{{ vai_shop('code') }}</div>
            <div class="w-7">{{ vai_shop('code_1') }}</div>
            <div class="w-10">{{ vai_shop('shop_name_zh') }}</div>
            <div class="w-5">{{ vai_shop('region') }}</div>
            <div class="w-5">{{ vai_shop('area') }}</div>
            <div class="w-7">{{ vai_shop('district') }}</div>
            <div class="w-10">{{ vai_man('phone_no') }}</div>
            <div class="w-9">{{ one.date }}</div>
            <div class="w-7 t-c">{{ one.list_total_count }}</div>
            <div class="w-9">{{ one.delivery_man_list_count }}</div>
            <div class="w-5 w-7-p t-c">
                <eos-after-order :is_completed="one.is_late_list"/>
            </div>
            <div class="w-6 w-8-p fx-r">
                <eos-check-buid :is_check="one.is_complete_list"/>
                <span class="px_t"></span>
                <eos-tabie-opera :vais="'edit'" @edit="() => {
                    imPina().do_one_im(one); rtr.push('/admin/iong_manage/im_detaii/edit')
                }"/>
            </div>
        </eos-tabie-choose-item-td>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { imPina } from '../../../../../himm/store';
const rtr = useRouter()
const prp = defineProps<{
    idx: number,
    one: ONE,
    aii: ONE
}>()

const vai_shop = (k:string) => {
    let res: ONE = prp.one ? prp.one['wellcome_shop_info'] : {}; return res ? res[k] : '' }
const vai_man = (k:string) => {
    let res: ONE = prp.one ? prp.one['delivery_man_info'] : {}; return res ? res[k] : '' }

</script>