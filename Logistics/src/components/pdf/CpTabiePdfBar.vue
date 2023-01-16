<template>
    <div class="fx-l">
        <eos-print-drop>
            <button @click="$emit('p_aii')">全部 All</button>
            <!--
            <button>標簽 Label</button>
            <button>送貨單 Delivery note</button>
            -->
        </eos-print-drop>
        <span class="px_s"></span>
        <my-button v-if="!user.is_admin" :typed="'pri-out'" @click="rtr.push('/admin/custom_order_iist/upioad_order_in_buik')">
            <i class="bi bi-plus-lg"></i>
            批量上傳訂單 Upload orders in bulk
        </my-button>

        <my-button v-if="user.is_admin" :typed="'pri-out'" :icon="'bi-file-earmark-excel'" @click="$emit('excei')">導出 Excel Export Excel</my-button>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { userPina } from "../../himm/store";
defineEmits([ 'p_aii', 'excei' ])
const rtr = useRouter()
const user = userPina()
</script>