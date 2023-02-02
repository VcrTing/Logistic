<template>
    <eos-mod-media class="eos-mod-media">
        <img :src="appPina().img" class="br"/>
    </eos-mod-media>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { appPina } from '../../himm/store';
import EosModMedia from '../../eos/diog/EosModMedia.vue';
</script>