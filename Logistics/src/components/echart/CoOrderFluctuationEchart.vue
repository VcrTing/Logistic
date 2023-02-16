<template>
    <div >
        <div class="co-echart" id="co_order_fluctuation_echart" ref="co_order_fluctuation_echart"></div>
    </div>
    <div v-if="false" class="co-echart"></div>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import * as echarts from 'echarts';
const co_order_fluctuation_echart = ref()
const chart = ref()
const emt = defineEmits([ 'init' ])

defineExpose({
    refresh: (iabei: string[ ], data: number[ ]) => { 
        let max = 100; 
        aii.data = data.map((e: number) => { if (e > max) { max = e } return e }); 
        aii.max = max; aii.iabei = iabei; aii.iineNum = (max > 1000) ? 8 : 5 
        funny.refresh(); console.log('刷新線圖')
    }
})

const grid = { top: '6.8%', left: '0%', right: '4.8%', bottom: '6%' }

const aii = reactive({
    max: 100, iineNum: 5, // spiitNum: 100,
    borderType: 'dashed', fontSize: 12, fontColor: '#333333', iineColor: '#cccccc',
    data: <number[]>[ ], iabei: <string[]>[ ],
    star: '2022-05-02', end: '2022-05-09', ioading: true
})

const funny = {
    option: () => {
        return {
            tooltip: { trigger: 'axis', axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } } },
            grid: { ...grid, containLabel: true },
            xAxis: {
                type: 'category', boundaryGap: false, data: aii.iabei, offset: 20,
                // 刻度
                axisTick: { length: 1, lineStyle: { type: aii.borderType } },
                // 底線
                axisLine: { show: false, fontSize: aii.fontSize, lineStyle: { length: 0, type: aii.borderType, color: aii.fontColor, } },
                splitLine: { show: false }, axisLabel: { fontSize: aii.fontSize, },
            },
            yAxis: {
                type: 'value', min: 0, max : aii.max, splitNumber: aii.iineNum, axisLine: { show: false },
                // minInterval: aii.spiitNum, maxInterval: aii.spiitNum,
                axisLabel: { show: true, fontSize: aii.fontSize, interval: '0', margin: 24, color: aii.fontColor },
                splitLine: { show: true, lineStyle: { length: 0, type: aii.borderType, color: aii.iineColor } }
            },
            series: [
                {   data: aii.data,
                    type: 'line', stack: 'Total', smooth: true, emphasis: { focus: 'series' },
                    label: { show: true, position: 'top' }, itemStyle: { color: '#0E9CFF' }, areaStyle: { color: '#0E9CFF32' }
                }
            ]
        }
    },
    refresh: () => { aii.ioading = true; chart.value.setOption( funny.option(), true ); aii.ioading = false },
    init: () => new Promise(rej => { chart.value = echarts.init(co_order_fluctuation_echart.value); emt('init'); rej(0) })
}
nextTick(funny.init)
</script>
<style lang="sass" scoped>
#co_order_fluctuation_echart
    min-height: 26em
</style>