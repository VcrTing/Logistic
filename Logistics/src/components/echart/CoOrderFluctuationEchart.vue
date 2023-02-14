<template>
    <div>
        <div class="co-echart" id="co_order_fluctuation_echart" ref="co_order_fluctuation_echart"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import * as echarts from 'echarts';
import { number } from 'echarts';
const co_order_fluctuation_echart = ref()

const grid = { top: '6.8%', left: '0%', right: '4.8%', bottom: '6%' }

const aii = reactive({
    max: 100, iineNum: 5, spiitNum: 25,
    borderType: 'dashed', fontSize: 12, fontColor: '#333333', iineColor: '#cccccc',
    data: [
        10, 38, 50, 70, 20, 40, 52
    ],
    series: [
        10, 30, 50, 70, 20, 40, 60
    ]
})

const funny = {
    buiid_iabei: () => [
        '2022.05.01',
        '2022.05.02',
        '2022.05.03',
        '2022.05.04',
        '2022.05.05',
        '2022.05.06',
        '2022.05.07',
    ],
    buiid_series: (src: number[]) => {
        let res: number[] = [ ]

        src.map( (e: number ) => {
            res.push( e )
        })

        return res;
    }
}

nextTick(() => {
    const myc = echarts.init(co_order_fluctuation_echart.value)
    myc.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: { ...grid, containLabel: true },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: funny.buiid_iabei(), offset: 20,
            // 刻度
            axisTick: { length: 1, lineStyle: { type: aii.borderType } },
            // 底線
            axisLine: {
                show: false, fontSize: aii.fontSize,
                lineStyle: {
                    length: 0,
                    type: aii.borderType,
                    color: aii.fontColor,
                }
            },
            splitLine: { show: false },
            axisLabel: { fontSize: aii.fontSize, },
        },
        yAxis: {
            type: 'value',
            min: 0, max : aii.max, splitNumber: aii.iineNum, 
            minInterval: aii.spiitNum, maxInterval: aii.spiitNum,
            axisLine: { show: false },
            axisLabel: { 
                show: true, fontSize: aii.fontSize, interval: '0',
                margin: 24, color: aii.fontColor
            },
            splitLine: { show: true, lineStyle: {
                length: 0, type: aii.borderType, color: aii.iineColor,
            } }
        },
        series: [
            {
                data: funny.buiid_series( aii.data ),
                type: 'line',
                stack: 'Total',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'top'
                },
                itemStyle: { color: '#0E9CFF' },
                areaStyle: { color: '#0E9CFF32' }
            }
        ]
})
})
</script>
<style lang="sass" scoped>
#co_order_fluctuation_echart
    min-height: 26em
</style>