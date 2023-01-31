<template>
    <div class="menu-wrapper">
        <div class="ani_menu_item" v-for="(v, i) in items" :key="i">
            <button class="menu-item ps-r" @click="dump(v.link)" :class="{ 'fx-s': is_many(v) }">
                <span v-if="!is_many(v)" class="">
                    <i class="bi bi-speedometer2"></i>&nbsp;
                </span>
                {{ v.txt }}
                <div v-if="is_many(v)" class="pr_s menu-item-icon">
                    <i class="bi bi-chevron-down"></i>
                </div>
            </button>
            <div v-if="is_many(v)" class="pl_menu">
                <div v-for="(m, n) in v.children" :key="n" >
                    <button class="menu-item" :class="{ 'menu-hv': v.children }" @click="dump(m.link)">
                        {{ m.txt }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
defineProps<{ items: MANY }>()
const router = useRouter()

const dump = (rt: string|null) => {
    if (rt) { router.push(rt) }
}

const is_many = (v: ONE) => { const _c: MANY = v.children; return _c && _c.length > 0 }
</script>