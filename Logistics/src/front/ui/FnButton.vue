<template>
    <button class="">
        <span v-if="icon" class="h5"><i class="i" :class="icon"></i></span>
        <span v-if="txt" class="pl_s">{{ txt }}</span>
        <slot v-else></slot>
    </button>
</template>

<script lang="ts">
export default {
    props: {
        icon: String,
        txt: String
    }
}
</script>

<style>

</style>