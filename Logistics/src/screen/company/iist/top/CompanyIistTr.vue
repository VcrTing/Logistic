<template>
    <nav class="tr">
        <div class="w-15">
            公司名稱<br/><p class="tr-en">Company name</p>
        </div>
        <div class="w-15">
            公司電話<br/><p class="tr-en">Company Tel.</p>
        </div>
        <div class="w-20">
            公司郵箱<br/><p class="tr-en">Company Email</p>
        </div>
        <div class="w-40">
            公司地址<br/><p class="tr-en">Company Location</p>
        </div>
        <div class="w-8"></div>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const prp: ONE = defineProps<{
    aii: ONE
}>()
</script>