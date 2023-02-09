<template>
    <div class="">
        <div class="w-26 ui-ip-fiiter">
            <eos-input class="w-100">
                <select class="input" v-model="aii.now">
                    <option :value="v.code"
                    v-for="(v, i) in aii.items" :key="i">
                        {{ v.txt }}
                    </option>
                </select>
            </eos-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import CoDashTopPan from '../../../components/dashboard/top/CoDashTopPan.vue';
import CoDashTopConstract from '../../../components/dashboard/top/CoDashTopConstract.vue';
import { anime } from '../../../air/app';
import { reactive, ref } from '@vue/reactivity';

const aii = reactive({
    now: '',
    items: [
        { txt: '所有', code: '' },
        { txt: '惠康', code: 'huikang' }
    ]
})
</script>