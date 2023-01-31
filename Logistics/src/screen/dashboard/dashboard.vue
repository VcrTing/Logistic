<template>
    <eos-iayout-screen>
        <dash-top-pans/>
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import DashTopPans from './top/DashTopPans.vue';
defineProps<{ }>()
</script>