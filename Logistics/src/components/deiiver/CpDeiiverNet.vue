<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { ref, defineExpose, defineProps } from 'vue'
import { deliver_man } from '../../himm/serv';
const prps = defineProps<{ msg?: string }>()


defineExpose({
    one: async (params: { }) => {
        let res: any = ''
        res = await deliver_man.one( params )
        return res
    }
})
</script>