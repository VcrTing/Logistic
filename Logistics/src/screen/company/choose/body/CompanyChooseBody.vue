<template>
    <div class="fx-l f-row">
        <div class="w-25 w-333-p mb_x" v-for="(v, i) in many" :key="i">
            <cp-custom-card 
                :tit="v.name"
                class="ani_proj_card"
                @order_manage="() => {
                    user.do_company(v);
                    rtr.push(`/admin/${v.name}/order_iist`)
                }"
                @edit="() => {
                    comp.do_one_company(v);
                    rtr.push('/admin/company_iist/edit')
                }"
                >
                <div class="py_s">負責人：{{ v.incharge }}</div>
                <!--
                <div>電話：{{ v.phone }}</div>
                <div class="pb_s">郵箱：{{ v.email }}</div>-->
                <div>公司電話：{{ v.phone_no }}</div>
                <div class="pb_s">公司郵箱：{{ v.email }}</div>
                <div class="mh-3em">公司地址：<span>{{ v.address }}
                    <!--{{ v.company.region }}&nbsp;&nbsp;{{ v.company.area }}&nbsp;&nbsp;{{ v.company.addr }}-->
                    </span>
                </div>
                <!--
                <fn-icon-txt class="pb_s" :icon="'bi bi-person-fill'">
                    {{v.name}}
                </fn-icon-txt>
                <fn-icon-txt class="pb_n" :icon="'bi bi-telephone-fill'">
                    {{v.phone}}
                </fn-icon-txt>
                <fn-icon-txt class="pb_s" :icon="'bi bi-geo-alt-fill'">
                    {{ v.region }}&nbsp;&nbsp;{{ v.area }}&nbsp;&nbsp;{{ v.addr }}
                </fn-icon-txt>-->
            </cp-custom-card>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import CpCustomCard from '../../../../components/custom/CpCustomCard.vue';
import { companyPina, orderPina, userPina } from '../../../../himm/store';
defineProps<{
    many: MANY
}>()
const comp = companyPina()
const user = userPina()
const rtr = useRouter()
</script>