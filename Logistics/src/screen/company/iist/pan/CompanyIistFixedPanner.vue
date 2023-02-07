<template>
    <eos-fixed-panner>
        <co-company-fp-cont v-if="one" :one="one"/>
    </eos-fixed-panner>
</template>
    
<script lang="ts" setup>
import { watch, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { companyPina } from '../../../../himm/store';
import CoCompanyFpCont from '../../../../components/company/CoCompanyFpCont.vue';

const cpREF = storeToRefs(companyPina())
const one: ONE = ref()
watch(cpREF.one_company, (n: ONE) => one.value = n)
</script>