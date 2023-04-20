<template>
    <my-button :typed="'pri-out'" v-if="!is_cancei" @click="$emit('trash')">
        <i class="bi bi-trash"></i>
        <span>
            批量刪除選擇訂單 Delete order selection in bulk
        </span>
    </my-button>
    <my-button :typed="'pri-out'" v-else @click="$emit('cancei')">
        <i class="bi bi-x-circle"></i>
        <span>
            批量取消選擇訂單 Cancel order selection in bulk
        </span>
    </my-button>
</template>
    
<script lang="ts" setup>
defineProps<{
    is_cancei?: boolean
}>()
defineEmits([ 'trash', 'cancei' ])
</script>