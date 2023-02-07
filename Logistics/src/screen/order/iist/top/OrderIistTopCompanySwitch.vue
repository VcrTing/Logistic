<template>
    <eos-company-switch-drop 
        v-if="user.is_admin"
        @resuit="(v) => {
            $emit('refresh')
        }"/>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import EosCompanySwitchDrop from '../../../../eos/eiement/EosCompanySwitchDrop.vue';
import { companyPina, userPina } from '../../../../himm/store';
defineEmits([ 'refresh' ])
const user = userPina()
const comp = companyPina()
</script>