<template>
    <nav class="panner">
        <div class="fx-s">
            <h3>相片</h3>
            <button class="btn-err py_s px">
                <!--<i class="bi bi-plus-lg"></i>-->
                添加運貨單</button>
        </div>
        <div class="fx-l">
            <div class="w-25 w-333-p py_x3">
                
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
// defineProps<{ msg: string }>()

const c = ref<object|null>(null)
</script>

<style lang="sass" scoped>

</style>