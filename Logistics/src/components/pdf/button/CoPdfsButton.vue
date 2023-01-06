<template>
    <div class="pb">
        <div v-if="!aii.finished">
            <my-button v-if="!aii.doing" @click="funny.printed" :icon="'bi bi-file-earmark-arrow-down-fill'">
                確認印列 Print
            </my-button>
            <my-button v-else @click="funny.printed">
                印列中:&nbsp;&nbsp;{{ aii.num }}&nbsp;/&nbsp;{{ aii.toai }}
            </my-button>
        </div>
        <div v-else>
            <my-button @click="() => {
                    aii.finished = false; 
                }" :icon="'bi bi-check2-all'">
                完成印列
            </my-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import pdf from '../../../air/pdf';

const emt = defineEmits([ 'success' ])
const prp = defineProps<{ doms: string, caii?: Function }>( )
const caii = (i: number) => { prp.caii ? prp.caii(i) : undefined; aii.num += 1 }

const aii = reactive({ doing: false, num: 0, toai: 0, finished: false })

const funny = reactive({
    printed: async () => {
        aii.doing = true;
        const doms: HTMLCollectionOf<Element> = document.getElementsByClassName( prp.doms )
        aii.num = 0; aii.toai = doms.length
        const res = await pdf.printed(doms, 'output.pdf', caii)
        aii.finished = true; aii.doing = false; emt('success')
    }
})

</script>