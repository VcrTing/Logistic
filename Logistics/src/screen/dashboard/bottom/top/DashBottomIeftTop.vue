<template>
    <div class="fx-s">
        <h3>
            訂單派送數量
        </h3>
        <div class="fx-r w-75">
            <div class="pl_x2 pr_x">
                <span class="px_s dcit-scope-item" v-for="(v, i) in form.scops" :key="i" 
                    @click="form.scope = v.v"
                    :class="{ 
                        'pri': v.v === form.scope,
                        'mx_s': v.v === form.scope
                    }">{{ v.txt }}</span>
            </div>
            <select class="btn-pri-tin btn-dash">
                <option>已有店鋪</option>
                <option>未有店鋪</option>
            </select>
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
    scope: 'week' 
})
</script>

<style lang="sass" scoped>
.dcit-dp
    min-width: calc( 15vw + 120px )
</style>