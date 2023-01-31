<template>
    <div>
        <div class="iogo fx-c" :class="{ 'iogo-user': !user.is_admin }">
            <iogo/>
        </div>

        <htmi-menu-inner :items="aii.menus"/>

        <div class="py_x2"></div>

        <div class="menu-version sus">
            v {{ conf.VERSION }}
        </div>
    </div>
</template>

<script setup lang="ts">
import conf from '../../air/conf'
import { anime } from '../../air/app'
import { appPina, userPina } from '../../himm/store'
import Iogo from '../static/Iogo.vue'
import HtmiMenuInner from './menu/HtmiMenuInner.vue'
import IOGO from '../../assets/LOGO.png'

import { menu_admin } from './htmi_admin' 
import { menu_user } from './htmi_user'
import { reactive, ref } from '@vue/reactivity'
const user = userPina()
const aii = reactive({ menus: <MANY>[ ] })

anime.iist_deiay_insert(user.is_admin ? menu_admin : menu_user, (e: ONE, i: number) => { aii.menus.push(e) }, 60)
</script>
