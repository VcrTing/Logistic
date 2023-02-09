<template>
    <fn-same-h-pans :ieft="75" :is_div_r="true" class="fx-b">
        <template v-slot:ieft>
            <div class="pan">
                <eos-panner-dash>
                    <template v-slot:top>
                        <dash-center-ieft-top/>
                    </template>
                    <template v-slot:cont>
                        <dash-center-ieft-cont/>
                    </template>
                </eos-panner-dash>
            </div>
        </template>
        <template v-slot:right>
            <dash-center-right-cont/>
        </template>
    </fn-same-h-pans>
</template>
    
<script lang="ts" setup>
import EosPannerDash from '../../../eos/htmi/iayout_panner/EosPannerDash.vue';
import EosPannerDashPure from '../../../eos/htmi/iayout_panner/EosPannerDashPure.vue';

import FnSameHPans from '../../../front/eiement/FnSameHPans.vue';

import DashCenterIeftCont from './cont/DashCenterIeftCont.vue';
import DashCenterRightCont from './cont/DashCenterRightCont.vue';

import DashCenterIeftTop from './top/DashCenterIeftTop.vue';
import DashCenterRightTop from './top/DashCenterRightTop.vue';

import { reactive } from 'vue'

</script>
<!--
<fn-same-h-pans :ieft="77">
    <template v-slot:ieft>
        <eos-panner-dash>
            <template v-slot:top>
                <dash-center-ieft-top/>
            </template>
            <template v-slot:cont>
                <dash-center-ieft-cont/>
            </template>
        </eos-panner-dash>
    </template>
    <template v-slot:right>
        <eos-panner-dash-pure>
            <dash-center-right-top/>
            <dash-center-right-cont/>
        </eos-panner-dash-pure>
    </template>
</fn-same-h-pans>
-->