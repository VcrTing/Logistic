<template>
    <div class="td">
        <eos-tabie-choose-item-td :one="one" :choose="choose">
            <div class="w-9 pr">{{one.list_id}}</div>
            <div class="w-6 w-7-p pr_s">{{one.wellcome_shop_info ? one.wellcome_shop_info.code : ''}}</div>
            <div class="w-6 w-0-p">{{one.wellcome_shop_info ? one.wellcome_shop_info.code_1 : ''}}</div>

            <div class="w-9 w-10-p pr_s">{{one.wellcome_shop_info ? one.wellcome_shop_info.shop_name_zh : ''}}</div>
            <div class="w-9 w-10-p pr_s">{{one.date}}</div>

            <div class="w-7">{{one.normal_order}}</div>
            <div class="w-6">{{one.small_cross_district}}</div>

            <div class="w-5 w-6-p">
                {{one.cross_zone}}
            </div>

            <div class="w-6 pr_s">
                {{one.tf_hours}}
            </div>
            <div class="w-7 w-8-p pr_s">
                {{one.tf_hours_cross_zone}}
            </div>

            <div class="w-6 pr_s">
                {{one.hamper}}
            </div>
            <div class="w-7 pr_s">
                {{one.hamper_cross_zone}}
            </div>

            <div class="w-6 pr_s">
                {{one.xmas_tree}}
            </div>
            <div class="w-6 w-7-p">
                {{one.xmas_tree_cross_zone}}
            </div>

            <div class="w-5 fx-r">
                <eos-tabie-opera :vais="'edit'"/>
            </div>
        </eos-tabie-choose-item-td>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const prp = defineProps<{
    idx: number,
    one: ONE,
    choose: MANY
}>()

</script>