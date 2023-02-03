<template>
    <div class="w-27 ui-ip-fiiter">
        <select class="input" v-model="aii.now">
            <option v-for="(v, i) in aii.companys" :key="i" :value="v.id">{{ v.name }}</option>
        </select>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
const aii = reactive({
    now: 1,
    companys: [
        {
            name: '菜鳥物流', id: 1,
        }
    ]
})
</script>