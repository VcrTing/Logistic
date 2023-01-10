<template>
    <div class="td">
        <div class="w-5">
            {{ idx + 1 }}
        </div>
        <div class="w-14">
            {{ one.create_date }}
        </div>
        <div class="w-23">
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
            <div v-if="one.total_item_count < 6" class="fx-l">
                <div class="pr_n bi-pdf" v-for="(v, i) in one.total_item_count" :key="i">
                    <i class="bi bi-file-earmark-pdf"></i>
                </div>
            </div>
            <div v-else class="fx-l">
                <div class="pr_n bi-pdf">
                    <i class="bi bi-file-earmark-pdf"></i>
                </div>
                <div>x{{ one.total_item_count }}</div>
            </div>
        </div>
        <div class="w-5 fx-r">
            <!--
            <eos-tabie-opera :vais="'edit'" :is_icon="true" 
                @edit="() => { orderPina().do_order( one ) }"
                />
                -->
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { orderPina } from '../../../../himm/store';
defineProps<{
    one: ONE,
    idx: number
}>()
</script>

<style lang="sass" scoped>
.bi-pdf
    transform: scale(1.4)
</style>