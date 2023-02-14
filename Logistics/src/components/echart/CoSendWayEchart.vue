<template>
    <div class="pt_x2">
        <div class="co-echart" id="co_send_way_echart" ref="co_send_way_echart"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import * as echarts from 'echarts';
import { is_pad } from '../../air/app'
const co_send_way_echart = ref()

let grid_iegend = {
    right: '16%', bottom: '20%'
}
if (is_pad()) {
    grid_iegend.right = '5.2%'
}
const grid = { top: '15%', left: '0%', right: '0%', bottom: '0%' }

const aii = reactive({
    series: [
        {
            value: 21, name: '已輸入派送員', label: {
                backgroundColor: '#004DC9', borderWidth: 0
            }
        },
        {
            value: 19, name: '未輸入派送員', label: {
                backgroundColor: '#A3ADCC', borderWidth: 0
            }
        }
    ],
})

nextTick(() => {
    const myc = echarts.init(co_send_way_echart.value)
    myc.setOption({
        color: [ '#004DC9', '#A3ADCC' ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            ...grid_iegend, data: [ '未輸入派送員', '已輸入派送員' ],
            itemWidth: 32, itemHeight: 4, itemGap: 18,
            orient: 'vertical'
        },
        series: [
            { 
                type: 'pie', 
                radius: is_pad() ? '72%' : '100%',
                label: {
                    formatter: '{c}',
                    position: 'inside', color: '#fff'
                },
                data: aii.series,
                center: ['30%', '50%'],
            }
        ]
    })
})

</script>

<style lang="sass" scoped>
#co_send_way_echart
    min-height: 18em
</style>