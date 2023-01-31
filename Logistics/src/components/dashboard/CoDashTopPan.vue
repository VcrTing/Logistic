<template>
    <nav class="pan py_x co-dash-top-pan">
        <div class="px_x1 pb fx-s">
            <div class="pl">
                <p class="sus">{{ one.tit }}</p>
                <h2>
                    {{ one.vai }}
                </h2>
            </div>
            <div class="">
                <co-dash-top-icon :icon="one.type"/>
            </div>
        </div>
        <div class="cdtp-bottom pt_n px_x1">
            <slot>
                <div class="fx-s sus_son">
                    <span>詳情</span>
                    <span>
                        <i class="bi bi-chevron-right"></i>
                    </span>
                </div>
            </slot>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
import CoDashTopIcon from './CoDashTopIcon.vue';
defineProps<{
    one: ONE
}>()
</script>