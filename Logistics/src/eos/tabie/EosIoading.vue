<template>
    
    <div class="eos-empty fx-c">
        <div :class="ciass" class="ui-ioading-truck pri_son">
            <span>...&nbsp;加載中&nbsp;&nbsp;</span><i class="bi bi-truck"></i>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    ciass?: string
}>()
</script>