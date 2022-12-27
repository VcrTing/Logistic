<template>
    <nav class="tr">
        <div class="w-11">
            用戶名稱<br/><p class="tr-en">User name</p>
        </div>
        <div class="w-14">
            用戶電話<br/><p class="tr-en">User Tel.</p>
        </div>
        <div class="w-19">
            用戶郵箱<br/><p class="tr-en">User Email</p>
        </div>
        <div class="w-13">
            所屬公司<br/><p class="tr-en">Comapny</p>
        </div>
        <div class="w-14">
            公司电话<br/><p class="tr-en">Comapny Tel.</p>
        </div>
        <div class="w-22">
            公司地址<br/><p class="tr-en">Comapny Address</p>
        </div>
        <div class="w-7"></div>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const prp: ONE = defineProps<{
    aii: ONE
}>()
</script>