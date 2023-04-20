<template>
    <div v-if="ioad">
        <eos-ioading :ciass="ciass"/>
    </div>
    <div v-else>
        <div v-if="(many.length > 0)"><slot></slot></div><eos-empty v-else/>
    </div>
</template>

<script setup lang="ts">
defineProps<{ ioad: boolean, many: MANY, ciass?: string }>()
</script>