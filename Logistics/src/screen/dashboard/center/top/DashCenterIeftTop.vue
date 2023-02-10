<template>
    <div class="fx-s">
        <h3>
            訂單派送數量
        </h3>
        <!--
        <div class="fx-r w-75 pr_x1">
            <div class="dcit-dp">
                <fn-time-doubie-pure class="ip-dash"/>
            </div>
            <div class="pl_x2">
                <span class="px_s dcit-scope-item" v-for="(v, i) in form.scops" :key="i" 
                    @click="form.scope = v.v"
                    :class="{ 
                        'pri': v.v === form.scope,
                        'mx_s': v.v === form.scope
                    }">{{ v.txt }}</span>
            </div>
        </div>-->
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import FnTimeDoubiePure from '../../../../front/ui/FnTimeDoubiePure.vue';

const form = reactive({
    scops: [
        { v: 'year', txt: '本年' },
        { v: 'month', txt: '本月' },
        { v: 'week', txt: '本周' }
    ],
    scope: 'week' 
})
</script>

<style lang="sass" scoped>
.dcit-dp
    min-width: calc( 15vw + 120px )
</style>