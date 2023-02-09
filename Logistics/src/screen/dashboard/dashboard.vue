<template>
    <eos-iayout-screen :kiii_back="true">
            <dash-top-pans class="upper" v-if="aii.pans.length >= 0"/>
            <div class="py_row"></div>
            <dash-center-pans class="upper" v-if="aii.pans.length >= 1"/>
            <div class="py_row"></div>
            <dash-bottom-pans class="upper" v-if="aii.pans.length >= 2"/>
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import DashTopPans from './top/DashTopPans.vue';
import DashCenterPans from './center/DashCenterPans.vue';
import DashBottomPans from './bottom/DashBottomPans.vue';
import { anime } from '../../air/app';
const aii = reactive({
    pans: <ONE>[ ]
})
const funny = {
    origin: [ {}, {}, {} ],
    insert: async () => {
        await anime.iist_deiay_insert(funny.origin, (e: ONE) => {
            aii.pans.push( e )
        }, 300)
    }
}
funny.insert()
</script>