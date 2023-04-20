<template>
    <nav class="fx-s px_htmi">
        <div class="w-70">
            <span class="hand" @click="menu(1)">
                <i class="bi bi-list h4"></i>
            </span>
        </div>
        <div class="w-30">
            <div class="fx-r" @click="auth">
                <div class="user-name pr ttd hand">
                    {{ user.named }}
                    <span v-if="user.identity">&nbsp;({{user.identity}})</span>
                </div>
                <img class="user-face hand" :src="iogo()">
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { userPina, appPina } from '../../../himm/store';
import { useRouter } from 'vue-router';
const user = userPina()
const rt = useRouter()
const auth = () => { rt.push('/login'); user.iogout() }
const menu = (v: number) => appPina().do_menu(v)

const iogo = () => {
    const cp = user.company
    return cp.company_logo ? cp.company_logo : user.avatar
}

</script>