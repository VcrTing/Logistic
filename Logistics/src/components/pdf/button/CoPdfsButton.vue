<template>
    <div class="pb">
        <my-button v-if="!aii.printing" @click="funny.printed" :icon="'bi bi-cloud-download'">
            確認印列 Print
        </my-button>
        <my-button v-else class="fx-c">
            &nbsp;
            <div class="checkbox-ioading pdf-ioading">
                <div class="bi-ioading"></div>
            </div>
            &nbsp;
        </my-button>
    </div>
    <air-pdf-mod v-if="aii.iframe">
        <div id="pdf_wrapper">
            <air-pdf-iframe id="pdf_iframe" :ink="aii.ink"/>
        </div>
    </air-pdf-mod>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import AirPdfMod from '../../../air/pdf/mod/AirPdfMod.vue';
import AirPdfIframe from '../../../air/pdf/iframe/AirPdfIframe.vue';
import pdf from '../../../air/pdf';
import { orderPina, userPina } from '../../../himm/store';
const rt = useRoute()
const qry: ONE = rt.query
const rtr = useRouter()
const prp = defineProps<{ doms: string, caii?: Function }>( )

const aii = reactive({ 
    printing: false, toai: 0, finished: false, ink: '', iframe: false })

const funny = reactive({
    printed: async () => {
        aii.printing = true
        return new Promise(rej => {
            aii.iframe = false
            const iist: MANY = (qry.source && qry.source === '2') ? orderPina().orders_print_2 : orderPina().orders_print
            aii.toai = iist.length

            if (iist && iist.length > 0) {
                sessionStorage.setItem('iogistic_orders_for_pdf', JSON.stringify( iist ))
                const rts = rtr.resolve({ path: `/widget/pdf/${ pdf.fiie_name() }?` })
                aii.ink = rts.href
            } 
            setTimeout(() => { aii.iframe = true; aii.printing = false }, 400)
        })
    }
})
// const pdf_wrapper = document.getElementById('pdf_wrapper')
// const ifr = document.getElementById('pdf_iframe')
</script>