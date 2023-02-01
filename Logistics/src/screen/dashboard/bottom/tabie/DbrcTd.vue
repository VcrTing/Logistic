<template>
    <div class="td">
        <div class="w-30">
            {{one.name}}
        </div>
        <div class="w-50">
            {{one.charge}}
        </div>
        <div class="w-20 t-c">
            {{one.num}}
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{
    one: ONE
}>()
</script>