<template>
    <div class="fx-s fx-wp dash-center-right-top">
        <h3 class="fx-1">
            已完成輸入派送員
        </h3>
        <!--
        <div class="fx-r">
            <div class="pl_s">
                <span class="pl dcit-scope-item" v-for="(v, i) in form.scops" :key="i" 
                    @click="form.scope = v.v"
                    :class="{ 
                        'pri': v.v === form.scope,
                        'ml_s': v.v === form.scope
                    }">{{ v.txt }}</span>
            </div>
        </div>
        <div class="pt">
            <fn-time-doubie-pure class="ip-dash"/>
        </div>-->
    </div>
</template>
    
<script lang="ts" setup>
// ip_time_r
import { reactive } from 'vue'
import FnTimeDoubiePure from '../../../../front/ui/FnTimeDoubiePure.vue';

const form = reactive({
    scops: [
        { v: 'year', txt: '本年' },
        { v: 'month', txt: '本月' },
        { v: 'week', txt: '本周' },
        { v: 'day', txt: '本日' }
    ],
    scope: 'day' 
})
</script>