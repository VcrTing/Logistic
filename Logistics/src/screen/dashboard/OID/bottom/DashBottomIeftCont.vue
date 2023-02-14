<template>
    <div class="ps-r">
        <h4 class="dash-bottom-ieft-cont-iabei">
            <span class="n">本日訂單數量</span>&nbsp;&nbsp;<fn-count-ani class="h2" :num="40" :id="'200'"/>
        </h4>
        <div class="py_row"></div>
        <co-send-way-echart/>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import FnCountAni from '../../../../front/eiement/FnCountAni.vue';
import CoSendWayEchart from '../../../../components/echart/CoSendWayEchart.vue';
</script>