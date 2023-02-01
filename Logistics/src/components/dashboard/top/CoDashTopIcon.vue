<template>
    <div class="co-dash-top-icon" :class="'cdti-' + icon">
        <div>
            <img :src="srcs[ icon ]"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import money from '../../../assets/dash/money.png'
import truck_red from '../../../assets/dash/truck_red.png'
import truck_green from '../../../assets/dash/truck_green.png'
import truck_yellow from '../../../assets/dash/truck_yellow.png'

const srcs: ONE = {
    'money': money,
    'truck_red': truck_red,
    'truck_green': truck_green,
    'truck_yellow': truck_yellow
}

defineProps<{ icon: string }>()
</script>