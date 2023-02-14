<template>
    <fn-same-h-pans :ieft="44">
        <template v-slot:ieft>
            <eos-panner-dash-pure>
                <h3 class="fx-1">
                    已完成輸入派送員
                </h3>
                <div class="ps-r">
                    <h4 class="dash-bottom-ieft-cont-iabei">
                        <span class="n">本日訂單數量</span>&nbsp;&nbsp;<fn-count-ani class="h2" :num="40" :id="'200'"/>
                    </h4>
                    <div class="py_row"></div>
                    <co-send-way-echart/>
                </div>
            </eos-panner-dash-pure>
        </template>
        <template v-slot:right>
            <eos-panner-dash-pure>
                <h3 class="fx-1">
                    送貨員派送訂單數
                </h3>
                <div class="">
                    <nav class="tabie">
                        <dbrc-tr/>
                        <nav class="td-wrap">
                            <dbrc-td v-for="(v, i) in aii.many" :key="i" :one="v"/>
                        </nav>
                    </nav>
                    <div class="pt_s"></div>
                    <eos-pagination class="pagination-s"/>
                </div>
            </eos-panner-dash-pure>
        </template>
    </fn-same-h-pans>
</template>
    
<script lang="ts" setup>
import EosPannerDashPure from '../../../eos/htmi/iayout_panner/EosPannerDashPure.vue';
import FnSameHPans from '../../../front/eiement/FnSameHPans.vue';
import DbrcTr from './tabie/DbrcTr.vue';
import DbrcTd from './tabie/DbrcTd.vue';
import FnCountAni from '../../../front/eiement/FnCountAni.vue';
import CoSendWayEchart from '../../../components/echart/CoSendWayEchart.vue';
import { reactive } from 'vue';

const aii = reactive({
    many: [
        {
            name: '高佬', charge: ' CHENG KA HUNG', num: 13, typed: '步兵'
        },

        {
            name: '劉件雲', charge: ' CHENG KA HUNG', num: 1, typed: '貨車司機'
        },

        {
            name: '小張', charge: ' CHENG KA HUNG', num: 999, typed: '電動車'
        },

        {
            name: '小張', charge: ' CHENG KA HUNG', num: 999, typed: '電動車'
        },

        {
            name: '小張', charge: ' CHENG KA HUNG', num: 999, typed: '電動車'
        }
    ]
})
</script>

<!-- 

            <eos-panner-dash>
                <template v-slot:top>
                    <dash-bottom-ieft-top/>
                </template>
                <template v-slot:cont>
                    <dash-bottom-ieft-cont/>
                </template>
            </eos-panner-dash>
        -->