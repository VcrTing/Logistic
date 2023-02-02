<template> 
<img :src="src ? src : LOGO" @click="appPina().do_img(src ? src : LOGO)"/>
</template>

<script setup lang="ts">
// https://img0.baidu.com/it/u=2670710653,1192831318&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"
import LOGO_ADMIN from '../../assets/LOGO.png'
import LOGO from '../../assets/ICON_CF_S.png'
import { appPina, userPina } from '../../himm/store'
const user = userPina()
defineProps<{
    src?: string
}>()
</script>