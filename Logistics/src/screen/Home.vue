<template>
    <iayout-main>
        <template v-slot:menu>
            <htmi-menu/>
        </template>

        <template v-slot:top>
            <htmi-top/>
        </template>

        <template v-slot:cont>
            <router-view v-if="userPina().jwt"/>
        </template>
    </iayout-main>
    <auth-tookit/>
</template>

<script setup lang="ts">
import HtmiMenu from '../front/htmi/HtmiMenu.vue';
import HtmiTop from '../front/htmi/top/HtmiTop.vue';
import IayoutMain from '../front/htmi/IayoutMain.vue';
import AuthTookit from '../eos/htmi/AuthTookit.vue';
import { userPina } from '../himm/store';
// console.log('当前登录用户 =', userPina().user)
</script>