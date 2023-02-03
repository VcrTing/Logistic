<template>
    <div>
        <div class="co-echart" id="co_send_way_echart" ref="co_send_way_echart"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import * as echarts from 'echarts';
const co_send_way_echart = ref()

const grid = { top: '5%', left: '3.2%', right: '0.3%', bottom: '2%' }

const aii = reactive({
    series: [
        {
            value: 21, name: '車送', label: {
                backgroundColor: '#004DC9', borderWidth: 0
            }
        },
        {
            value: 2, name: '人手', label: {
                backgroundColor: '#A3ADCC', borderWidth: 0
            }
        }
    ]
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
            bottom: '0', left: 'center', data: [ '人手', '車送' ],
            itemWidth: 32, itemHeight: 4, itemGap: 54
        },
        series: [
            { 
                type: 'pie', 
                label: {
                    formatter: '{c}',
                    position: 'inside', color: '#fff'
                },
                data: aii.series }
        ]
    })
})

</script>

<style lang="sass" scoped>
#co_send_way_echart
    min-height: 18em
</style>