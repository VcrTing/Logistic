<template>
    <div>
        <Ui/>
    </div>
</template>

<script setup lang="ts">
import Ui from '../../../components/Ui.vue';
import { ref, watch, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
// defineProps<{ msg: string }>()

const c = ref<object|null>(null)
</script>

<style lang="sass" scoped>

</style>