<template>
    <div class="eos-panner-print">
        <div class="panner upper">
            <h2></h2>
            <div class="py_row"></div>
            <slot name="cont"></slot>
        </div>
        <div class="py_x3"></div>
    </div>
    <div class="mod-fixed-bar panner">
        <div class="fx-r upper">
            <slot name="bar"></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
</script>

<style lang="sass" scoped>
.eos-panner-print
    min-height: 80vh
</style>