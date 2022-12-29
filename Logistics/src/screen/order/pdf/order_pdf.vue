<template>
    <div id="pdf_opw">
        <div class="py">
            <button @click="output" class="btn-def btn-pri">导出</button>
        </div>
        <div class="fx-s fx-t">
            <div id="opw_one">
                <co-pdf-order/>
            </div>
            <div class="fx-1">
                <order-pdf-convert/>
            </div>
        </div>

        <div class="py">
            <img :src="img"/>
        </div>
    </div>
</template>
    
<script lang="javascript">
import html2canvas from 'html2canvas'
import OrderPdfConvert from './inner/OrderPdfConvert.vue'
import CoPdfOrder from '../../../components/pdf_order/CoPdfOrder.vue';
export default {
    components: { CoPdfOrder, OrderPdfConvert }, 
    data() { return { img: '', } },
    methods: {
        async output() {
            console.log(html2canvas)
            const dom = document.getElementById('opw_one')
            const cvs = await html2canvas(dom)
            this.img = cvs.toDataURL()
        }
    }
}
</script>