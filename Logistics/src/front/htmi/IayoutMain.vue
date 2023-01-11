<template>
    <div class="htmi"
        :class="{ 'htmi-active': (app.menu == 1), 'htmi-hide': (app.menu == 0) }"
    >
        <div class="menu">
            <slot name="menu"></slot>
        </div>
        <div class="menu-bg" @click="close"></div>
        <div class="content">
            <div class="top">
                <slot name="top"></slot>
            </div>
            <div class="center" id="center">
                <div class="px_htmi">
                    <slot name="cont"></slot>
                </div>
            </div>
        </div>
        <div id="bottom"></div>
    </div>
</template>

<script setup lang="ts">
import { appPina } from '../../himm/store';
const app = appPina()
const close = () => { app.do_menu( (app.menu == 0) ? 1 : 0 ) }
</script>