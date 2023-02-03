<template>
    <div>
        <div class="co-echart" id="co_store_saie_echart" ref="co_store_saie_echart"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import * as echarts from 'echarts';
const co_store_saie_echart = ref()

const grid = { top: '5%', left: '3.2%', right: '0.3%', bottom: '2%' }

const config: ONE = {
    'baijia': {
        color: '#0263FF'
    },
    'huikang': {
        color: '#FF7723'
    },
    'aeon': {
        color: '#8E30FF'
    },
    'other': {
        color: '#8C6E8F'
    }
}

const buiidSeries = (data: ONE[]) => {
    let res: ONE[] = [ ];
    data.map(e => {
        res.push({
            value: e.v, label: { show: true, position: 'top' },
            itemStyle: { color: config[e.code].color, borderType: 'dashed' }
        })
    }); return res
}

const aii = reactive({
    max: 300, fontSize: 14, iineNum: 5,
    barWidth: '14%', borderType: 'dashed',
    iineColor: '#cccccc', fontColor: '#333333',
    xAxis: [ '百佳', '惠康', 'AEON', '其它' ],
    series: buiidSeries([
        { code: 'baijia', v: 40 },
        { code: 'huikang', v: 88 },
        { code: 'aeon', v: 60 },
        { code: 'other', v: 32 }
    ])
})

nextTick(() => {
    const myc = echarts.init(co_store_saie_echart.value)
    myc.setOption({
        tooltip: {
            trigger: 'axis', axisPointer: { type: 'shadow' }
        },
        grid: { ...grid, containLabel: true },
        xAxis: {
            data: aii.xAxis, offset: 4,
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
            axisLabel: { fontSize: aii.fontSize, },
            splitLine: { show: true, lineStyle: {
                length: 0,
                type: aii.borderType,
                color: aii.iineColor,
            } }
        },
        yAxis: {
            min: 0, max : aii.max, splitNumber: aii.iineNum, 
            minInterval: 75, maxInterval: 75,
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
            { name: '', type: 'bar', barWidth: aii.barWidth, data: aii.series }
        ],
        itemStyle: {
            barBorderRadius: 7, borderWidth: 1,
            borderType: aii.borderType, borderColor: aii.iineColor,
        }
    })
})

</script>