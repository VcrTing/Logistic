<template>
    <div class="auth-wrapper auth-fuii-iayout">
        <div class="auth-cont fx-s fx-t ">
            <div class="w-50 auth-panel">
                <iogo class="auth-logo" :src="IOGO"></iogo>
                <nav>
                    <div class="br">
                        <slot></slot>
                    </div>
                </nav>
            </div>
            <div class="w-50 auth-bg" :style="{ 'background-image': 'url(' + AUTH + ')' }">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Iogo from '../../front/static/Iogo.vue'
import AUTH from '../../assets/AUTH.jpg'
import IOGO from '../../assets/LOGO.png'
/*
const im = ref<string|null>(
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.52miji.com%2F52miji%2F2016%2F01%2F25%2F579e9e3833d539ea.jpg&refer=http%3A%2F%2Fimg.52miji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672375012&t=b61d7537158462a6f80b1136312f53d2'
)
*/
</script>