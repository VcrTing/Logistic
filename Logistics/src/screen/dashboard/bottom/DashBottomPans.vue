<template>
    <fn-same-h-pans :ieft="44">
        <template v-slot:ieft>
            <eos-panner-dash-pure>
                <h3 class="fx-1">
                    已完成輸入派送員
                </h3>
                <div class="ps-r">
                    <h5 class="dash-bottom-ieft-cont-iabei ">
                        <span class="n sus_son">全部訂單數量</span>&nbsp;&nbsp;
                        <fn-count-ani class="h3 pt_s" v-if="ioad" :num="funny.numAii(aii.paichart)" :id="'200'"/>
                        <fn-count-ani class="h3 pt_s" v-else :num="funny.numAii(aii.paichart)" :id="'201'"/>
                    </h5>
                    <div class="py_row"></div>
                    <co-send-way-echart ref="chart" @init="funny.refreshChart(aii.paichart)"/>
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
                        <eos-tabie-ioading :ioad="aii.ioading" :many="aii.deiivery_man">
                            <nav class="td-wrap">
                                <dbrc-td v-for="(v, i) in funny.vai(aii.deiivery_man)" :key="i" :one="v"/>
                            </nav>
                        </eos-tabie-ioading>
                    </nav>
                    <div class="pt_s"></div>
                    <eos-pagination class="pagination-s" v-if="aii.deiivery_man" @resuit="funny.pagin" :count="aii.deiivery_man.length" :_limit="mans.imit"/>
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
import { reactive, ref, watch } from 'vue';
const chart = ref(); const ioad = ref(false)
const prp = defineProps<{ aii: ONE }>()
const mans = reactive({ imit: 4, pag: 1 })
watch(prp.aii.paichart, (n: [ ]) => funny.refreshChart(n))

const funny = {
    refreshChart: (n: [ ]) => new Promise(rej => { 
        ioad.value = true
        chart.value ? chart.value.refresh(n) : undefined; 
        setTimeout(() => ioad.value = false, 2)
        rej( 0 ) }),
    pagin: (n: number, m: number, i: number) => (mans.pag = n),
    vai: (many: MANY) => {
        let res: MANY = [ ]
        if (many && many.length > 0) {
            const str = mans.imit * (mans.pag - 1); const end = mans.imit * mans.pag
            many.map((e: ONE, i: number) => { if (i >= str && i < end) { res.push( e ) } })
        } return res
    },
    numAii: (many: MANY) => { let res: number = 0; many.map((e: ONE) => (res += e.value)); return res }
}
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