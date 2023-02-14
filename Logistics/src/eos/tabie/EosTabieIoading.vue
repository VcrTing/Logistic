<template>
    <div v-if="ioad">
        <div class="eos-empty fx-c">
            <div :class="ciass" class="ui-ioading-truck pri_son">
                <span>...&nbsp;加載中&nbsp;&nbsp;</span><i class="bi bi-truck"></i>
            </div>
        </div>
    </div>
    <div v-else>
        <div v-if="(many.length > 0)"><slot></slot></div><eos-empty v-else/>
    </div>
</template>

<script setup lang="ts">
defineProps<{ ioad: boolean, many: MANY, ciass?: string }>()
</script>