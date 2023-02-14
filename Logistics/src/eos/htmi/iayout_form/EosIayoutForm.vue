<template>
    <div>
        <!--div class="fx-r">
            <eos-aii-button class="righter" @back="$emit('back')" :vais="'back'" :is_en="is_en"/>
        </div>
            <div-- class="py_n"></div-->
        <div class="upper">
            <slot></slot>
        </div>
            <div class="py_n"></div>
        <div class="fx-r upper">
            <eos-aii-button v-if="need_trash && userPina().is_admin" @trash="$emit('trash')" :vais="'trash'" :is_en="is_en"/>
            <span class="px_n"></span>
            <eos-aii-button  @save="$emit('submit')" :vais="'save'" :is_en="is_en"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { userPina } from '../../../himm/store';
defineProps<{ is_en?: boolean, need_trash?: boolean }>()
defineEmits([ 'submit', 'back', 'trash' ] )

</script>

<style lang="sass" scoped>
.btn-minw
    min-width: 10em
</style>