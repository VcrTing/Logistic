<template>
    <div
    :class="{ 
        'td-focus-err': one.is_new, 
        'td-succ': false,
        'td-die': is_admin ? false: (one.is_cancel)
    }">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    one: ONE,
    is_admin: boolean
}>()
</script>