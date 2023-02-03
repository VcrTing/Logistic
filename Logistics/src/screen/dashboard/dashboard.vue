<template>
    <eos-iayout-screen :kiii_back="true">
            <dash-top-pans/>
        <div class="py_row"></div>
            <dash-center-pans/>
        <div class="py_row"></div>
            <dash-bottom-pans/>
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import DashTopPans from './top/DashTopPans.vue';
import DashCenterPans from './center/DashCenterPans.vue';
import DashBottomPans from './bottom/DashBottomPans.vue';
defineProps<{ }>()
</script>