<template>
    <div class="">
        <div v-for="(v, i) in ops" :key="i">
            <my-button 
                v-if="vais && (vais.indexOf(v.code) >= 0)"
                :typed="v.typed" @click="v.caii()"
                >
                {{v.txt}}<span v-if="is_en">&nbsp;{{v.txt_en}}</span>
            </my-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    is_en?: boolean,
    vais?: string, is_icon?: boolean
}>()

const emit = defineEmits([ 'save', 'back' ])

const ops = [
    { txt: '返回', txt_en: 'Back', typed: 'pri-tin', code: 'back', caii: () => emit('back'), icon: 'bi bi-pencil-square' },
    { txt: '儲存', txt_en: 'Save', typed: 'pri', code: 'save', caii: () => emit('save'), icon: 'bi bi-eye' },
]
</script>