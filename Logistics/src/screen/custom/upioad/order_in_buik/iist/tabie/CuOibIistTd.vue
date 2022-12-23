<template>
    <div class="td">
        <div class="w-11">
            {{ one.date }}
        </div>
        <div class="w-14">
            {{ one.number }}
        </div>
        <div class="w-8">
            {{ one.group }}
        </div>
        <div class="w-11 ">
            <span class="pri hand" @click="app.do_panner(1)">{{ one.order_no }}</span>
        </div>
        <div class="w-12">
            {{ one.reciver.name_hk }}<br/>
            {{ one.reciver.name_en }}
        </div>
        <div class="w-11">
            {{ one.reciver.phone }}
        </div>
        <div class="w-30">
            {{ one.reciver.region }}
            {{ one.reciver.area }}
            {{ one.reciver.address }}
        </div>
        <div class="w-4 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { appPina } from "../../../../../../himm/store"

defineProps<{
    idx: number,
    one: ONE
}>()
const app = appPina()
</script>