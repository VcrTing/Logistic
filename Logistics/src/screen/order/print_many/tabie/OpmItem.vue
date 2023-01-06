<template>
    <div class="td">
        <div class="w-6">
            {{ idx + 1 }}
        </div>
        <div class="w-15">
            {{ one.create_date }}
        </div>
        <div class="w-24">
            <span class="pri">
                {{ one.cf_waybill_no }}
            </span>
        </div>
        <div class="w-12">
            {{ one.order_group }}
        </div>
        <div class="w-19">
            {{ one.order_id }}
        </div>
        <div class="w-9">
            {{ one.total_item_count ? one.total_item_count : '' }}
        </div>
        <div class="w-13">
            <div v-if="one.total_item_count" class="fx-l">
                <div class="pr_n bi-pdf" v-for="(v, i) in one.total_item_count" :key="i">
                    <i class="bi bi-file-earmark-pdf"></i>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{
    one: ONE,
    idx: number
}>()
</script>

<style lang="sass" scoped>
.bi-pdf
    transform: scale(1.4)
</style>