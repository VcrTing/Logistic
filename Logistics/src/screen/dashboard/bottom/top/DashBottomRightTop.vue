<template>
    <div class="fx-s fx-wp dash-bottom-right-top">
        <h3 class="fx-1">
            司機派送訂單數
        </h3>
        <div class="fx-r">
            <div class="pr_s">
                <select class="ip-dash py_t px_s" :class="{ 'cr-dash': !form.driver }">
                    <option >司機名稱</option>
                </select>
            </div>
            <div class="">
                <span class="pl dcit-scope-item" v-for="(v, i) in form.scops" :key="i" 
                    @click="form.scope = v.v"
                    :class="{ 
                        'pri': v.v === form.scope,
                        'ml_s': v.v === form.scope
                    }">{{ v.txt }}</span>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
    scops: [
        { v: 'year', txt: '本年' },
        { v: 'month', txt: '本月' },
        { v: 'week', txt: '本周' },
        { v: 'day', txt: '本日' }
    ],
    scope: 'week',
    driver: ''
})
</script>