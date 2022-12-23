<template>
    <div class="menu-wrapper">
        <div class="" v-for="(v, i) in items" :key="i">
            <button class="menu-item ps-r fx-s" @click="dump(v.link)">
                {{ v.txt }}
                <div v-if="v.children" class="pr_s menu-item-icon">
                    <i class="bi bi-chevron-down"></i>
                </div>
            </button>
            <div v-if="v.children" class="pl_menu">
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
import { ref, reactive, watch, onMounted } from 'vue'
defineProps<{ items: MANY }>()
const router = useRouter()

const dump = function(rt: string|null) {
    if (rt) { router.push(rt) }
}
</script>