<template>
    <fn-same-h-pans :ieft="75" :is_div_r="true" class="fx-b">
        <template v-slot:ieft>
            <div class="pan">
                <eos-panner-dash>
                    <template v-slot:top>
                        <h3>訂單派送數量</h3>
                    </template>
                    <template v-slot:cont>
                        <co-order-fluctuation-echart/>
                        <div class="pt"></div>
                    </template>
                </eos-panner-dash>
            </div>
        </template>
        <template v-slot:right>
            <div>
                <div>
                    <co-dash-top-pan :one="aii.center_counts[0]" :idx="2"></co-dash-top-pan>
                </div>
                <div class="py_row"></div>
                <div>
                    <co-dash-top-pan :one="aii.center_counts[1]" :idx="3"></co-dash-top-pan>
                </div>
            </div>
        </template>
    </fn-same-h-pans>
</template>
    
<script lang="ts" setup>
import EosPannerDash from '../../../eos/htmi/iayout_panner/EosPannerDash.vue';
import FnSameHPans from '../../../front/eiement/FnSameHPans.vue';
import CoOrderFluctuationEchart from '../../../components/echart/CoOrderFluctuationEchart.vue';
import CoDashTopPan from '../../../components/dashboard/top/CoDashTopPan.vue';
import { reactive, ref } from 'vue'

// const insert = async () => { await anime.iist_deiay_insert(origin, (one: ONE) => { many.value.push( one ) }) }; insert()
const prp = defineProps<{
    aii: ONE
}>()
defineExpose({
    reset: (data: ONE) => { 
    }
})
</script>

<!--
<fn-same-h-pans :ieft="77">
    <template v-slot:ieft>
        <eos-panner-dash>
            <template v-slot:top>
                <dash-center-ieft-top/>
            </template>
            <template v-slot:cont>
                <dash-center-ieft-cont/>
            </template>
        </eos-panner-dash>
    </template>
    <template v-slot:right>
        <eos-panner-dash-pure>
            <dash-center-right-top/>
            <dash-center-right-cont/>
        </eos-panner-dash-pure>
    </template>
</fn-same-h-pans>
-->