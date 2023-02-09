<template>
    <div class="td">
        <div class="w-22">
            {{one.name}}
        </div>
        <div class="w-40">
            {{one.charge}}
        </div>
        <div class="w-18">
            {{ one.typed }}
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