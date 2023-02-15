<template>
    <div class="td">
        <div class="w-22">
            {{one.deliverymanName}}
        </div>
        <div class="w-40">
            {{one.contractor_name}}
        </div>
        <div class="w-18">
            <ef-deliver-typed :def="one.type" :is_txt_mode="true"/>
        </div>
        <div class="w-20 t-c">
            {{ one.orderCount }}
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{
    one: ONE
}>()
</script>