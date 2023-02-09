<template>
    <fn-same-h-pans :ieft="44">
        <template v-slot:ieft>
            <eos-panner-dash-pure>
                <dash-bottom-ieft-top/>
                <dash-bottom-ieft-cont/>
            </eos-panner-dash-pure>
            
        </template>
        <template v-slot:right>
            <eos-panner-dash-pure>
                <dash-bottom-right-top/>
                <dash-bottom-right-cont/>
            </eos-panner-dash-pure>
        </template>
    </fn-same-h-pans>
</template>
    
<script lang="ts" setup>
import EosPannerDash from '../../../eos/htmi/iayout_panner/EosPannerDash.vue';
import EosPannerDashPure from '../../../eos/htmi/iayout_panner/EosPannerDashPure.vue';

import FnSameHPans from '../../../front/eiement/FnSameHPans.vue';

import DashBottomIeftTop from './top/DashBottomIeftTop.vue';
import DashBottomIeftCont from './cont/DashBottomIeftCont.vue';
// import DashCenterRightTop from '../center/top/DashCenterRightTop.vue';
// import DashCenterRightCont from '../center/cont/DashCenterRightCont.vue';

import DashBottomRightTop from './top/DashBottomRightTop.vue';
import DashBottomRightCont from './cont/DashBottomRightCont.vue';

import { reactive } from 'vue'

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