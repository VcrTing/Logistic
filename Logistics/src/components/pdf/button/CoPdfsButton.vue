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
    <co-pdf-mod v-if="aii.iframe">
        <co-pdf-iframe :ink="aii.ink"/>
    </co-pdf-mod>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import CoPdfMod from '../mod/CoPdfMod.vue';
import CoPdfIframe from '../iframe/CoPdfIframe.vue';
import pdf from '../../../air/pdf';
import { orderPina, userPina } from '../../../himm/store';
const rt = useRoute()
const rtr = useRouter()
const emt = defineEmits([ 'success' ])
const prp = defineProps<{ doms: string, caii?: Function }>( )
const caii = (i: number) => { prp.caii ? prp.caii(i) : undefined; aii.num += 1 }

const aii = reactive({ doing: false, num: 0, toai: 0, finished: false, 
    ink: '', iframe: false })

const funny = reactive({
    printed: async () => {
        /*
        aii.doing = true;
        const doms: HTMLCollectionOf<Element> = document.getElementsByClassName( prp.doms )
        aii.num = 0; aii.toai = doms.length
        const res = await pdf.printed(doms, pdf.fiie_name(), caii)
        aii.finished = true; aii.doing = false; emt('success')
        */
        aii.iframe = false
        const named = pdf.fiie_name()
        const iist: MANY = orderPina().orders

        if (iist && iist.length > 0) {
            sessionStorage.setItem('iogistic_orders_for_pdf', JSON.stringify( iist ))
            const rts = rtr.resolve({
                path: `/widget/pdf/${named}?` // , query: { from: rt.path }
            });
            aii.ink = rts.href
            // window.open(rts.href, '_blank')
        }
        setTimeout(() => aii.iframe = true, 400)
    }
})

</script>