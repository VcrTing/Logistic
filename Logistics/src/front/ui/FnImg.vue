<template>
  
    <img class="__ui_img" v-if="!is_div" :src="img"/>
    <div class="__div_img" v-else :style="{
        'background': 'url(' + img + ')',
        'background-size': 'cover',
        'background-position': 'center'
    }">
    </div>
</template>

<script lang="ts">
export default {
    props: {
        src: { type: String },
        is_api: { type: Boolean, default: false },
        is_div: { type: Boolean, default: true }
    },
    computed: {
        img() { return this.is_api ? ('' + this.src) : this.src }
    }
}
</script>

<style lang="sass" scoped>
.__ui_img
    width: 100%
    height: auto
.__div_img
    width: 100%
    height: 100%
</style>