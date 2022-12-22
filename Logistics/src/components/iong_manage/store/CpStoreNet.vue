<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { ref, defineExpose, defineProps } from 'vue'
import { im_manage_store } from '../../../himm/serv'
const prps = defineProps<{ msg?: string }>()


defineExpose({
    one: async (params: { }) => {
        let res: any = ''

        res = await im_manage_store.one(params)

        return res
    }
})
</script>