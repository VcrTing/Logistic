<template>
    <nav class="tr">
        <div class="w-9">
            公司圖標<br/><p class="tr-en">Logo</p>
        </div>
        <div class="w-15">
            公司名稱<br/><p class="tr-en">Company name</p>
        </div>
        <div class="w-12">
            公司電話<br/><p class="tr-en">Company Tel.</p>
        </div>
        <div class="w-18">
            公司郵箱<br/><p class="tr-en">Company Email</p>
        </div>
        <div class="w-30">
            公司地址<br/><p class="tr-en">Company Location</p>
        </div>
        <div class="w-10">
            對接公司<br/><p class="tr-en">Docking company</p>
        </div>
        <div class="w-10">
            負責人一<br/><p class="tr-en">Person in charge</p>
        </div>
        <div class="w-4"></div>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const prp: ONE = defineProps<{
    aii: ONE
}>()
</script>