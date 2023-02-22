<template>
    <div class="fx-l">
        <!--
        <eos-print-drop>
            <button @click="$emit('p_aii')">全部 All</button>
        </eos-print-drop>
        -->
        <!--
        <my-button v-if="user.is_admin" :typed="'pri-out'" :icon="'bi-file-earmark-excel'" @click="$emit('excei')">導出 Excel Export Excel</my-button>
        -->
        <eos-pdf-button @click="$emit('p_aii')"/>

        <span class="px_s"></span>
        <div v-if="!user.is_admin">
            <my-button :typed="'pri-out'" @click="rtr.push('/admin/custom_order_iist/upioad_order_in_buik')">
                <i class="bi bi-plus-lg"></i>
                批量上傳訂單 Upload orders in bulk
            </my-button>
            
            <!--
            <span class="px_s"></span>
            <my-button :typed="'pri'" :icon="'bi-file-earmark-excel'" @click="$emit('excei')">導出 Excel Export Excel</my-button>
            -->
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { userPina } from "../../himm/store";
import EosPdfButton from "../../eos/eiement/EosPdfButton.vue";
defineEmits([ 'p_aii', 'excei' ])
const rtr = useRouter()
const user = userPina()
</script>