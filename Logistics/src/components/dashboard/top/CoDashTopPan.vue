<template>
    <nav class="pan py_x co-dash-top-pan upper">
        <div class="px_x py fx-s">
            <div class="" :class="{ 'pl_n': !kiii_i }">
                <p class="sus pb">{{ one.tit }}</p>
                <h2>
                    <span v-if="one.unit">{{ one.unit }}&nbsp;&nbsp;</span>
                    <fn-count-ani class="d-ib" :id="idx + ''" :num="one.vai"/>
                </h2>
            </div>
            <div class="">
                <co-dash-top-icon :icon="one.type"/>
            </div>
        </div>
        <!--
        <div class="hr-dash"></div>
        <div class="cdtp-bottom pt pl_x pr_x1">
            <slot>
                <div class="fx-s sus_son">
                    <span>詳情</span>
                    <span class="">
                        <i class="bi bi-chevron-right "></i>
                    </span>
                </div>
            </slot>
        </div>-->
    </nav>
</template>
    
<script lang="ts" setup>
import CoDashTopIcon from './CoDashTopIcon.vue';
import FnCountAni from '../../../front/eiement/FnCountAni.vue';
defineProps<{
    one: ONE, idx: number,
    kiii_i?: boolean
}>()
</script>