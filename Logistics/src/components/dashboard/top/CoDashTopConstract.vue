<template>
    <div class="fx-s sus_son">
        <div class="fx-l">
            <span class="sus">對比昨日訂單</span>
            <div class="succ_son pl_x2">
                <i class="bi bi-arrow-up-circle-fill cdtc-up-icon"></i>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span>20%</span>
            </div>
        </div>
        <span class="">
            <i class="bi bi-chevron-right"></i>
        </span>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
</script>

<style lang="sass" scoped>
.cdtc-up-icon
    transform: scale(1.2)
</style>