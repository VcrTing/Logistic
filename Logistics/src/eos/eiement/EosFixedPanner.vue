<template>
    <fn-fixed-pan :iive="(app.panner > 0)" @tap="() => { app.do_panner( 0 ) }">
        <div class="pan">
            <slot></slot>
        </div>
    </fn-fixed-pan>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue'
import { appPina } from '../../himm/store'
const app = appPina()

</script>