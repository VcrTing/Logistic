<template>
    <div class="pt_x2">
        <div class="co-echart" id="co_send_way_echart" ref="co_send_way_echart"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import * as echarts from 'echarts';
import { is_pad } from '../../air/app'

const emt = defineEmits([ 'init' ])
const co_send_way_echart = ref()
const chart = ref()
const aii = reactive({ series: [ ] })

defineExpose({
    refresh: (many: [ ]) => new Promise(rej => {
        aii.series = many; chart.value.setOption( funny.option() ); rej(0)
    }) 
})

const grid = { top: '15%', left: '0%', right: '0%', bottom: '0%' }
let grid_iegend = { right: '11.2%', bottom: '20%' }
if (is_pad()) { grid_iegend.right = '5.2%' }

const funny = {
    option: () => {
        return {
            color: [ '#004DC9', '#A3ADCC' ],
            tooltip: {
                trigger: 'item', formatter: '{b} : {c} ({d}%)'
            },
            legend: {
                ...grid_iegend, data: aii.series.map((e: ONE) => e.name),
                itemWidth: 32, itemHeight: 4, itemGap: 18,
                orient: 'vertical'
            },
            series: [
                { 
                    type: 'pie', center: ['30%', '50%'],
                    radius: is_pad() ? '72%' : '92%',
                    label: { formatter: '{c}', position: 'inside', color: '#fff' },
                    data: aii.series
                }
            ]
        }
    },
    init: () => new Promise(rej => {
        chart.value = echarts.init(co_send_way_echart.value)
        emt('init'); rej(0)
    })
}
nextTick( funny.init )

</script>

<style lang="sass" scoped>
#co_send_way_echart
    min-height: 19.4em
</style>