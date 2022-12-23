<template>
    <div class="fx-l f-row">
        <div class="w-25 w-333-p mb_x" v-for="(v, i) in many" :key="i">
            <cp-custom-card :tit="v.type">
                <div class="pb_s">用户：{{ v.name }}</div>
                <div>电话：{{ v.phone }}</div>
                <div class="pb_s">邮箱：{{ v.email }}</div>
                <div>公司电话：{{ v.company.name }}</div>
                <div>公司邮箱：{{ v.company.email }}</div>
                <div>公司地址：<span>
                    {{ v.company.region }}&nbsp;&nbsp;{{ v.company.area }}&nbsp;&nbsp;{{ v.company.addr }}
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
import CpCustomCard from '../../../../../components/custom/CpCustomCard.vue';
defineProps<{
    many: MANY
}>()
</script>