<template>
    <div id="pdf_opw">
        <div class="py">
            <button @click="output" class="btn-def btn-pri">转 IMG</button>&nbsp;
            <button @click="output" class="btn-def btn-pri-tin">导出 PDF</button>
        </div>
        <div class="fx-s fx-t">
            <div id="dayimg">
                <co-pdf-order/>
            </div>
            <div class="fx-1">
                <order-pdf-convert/>
            </div>
        </div>

        <div class="py w-333 w-50-p">
            <img id="savimg" :src="img"/>
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
            const dom = document.getElementById('dayimg')
            const cvs = await html2canvas(dom)
            this.img = cvs.toDataURL()
        },
        convert2canvas() {
            /*
            var el = document.getElementById("dayimg"); // 要截图的div
            var saveImg = document.getElementById("savimg");

            var canvas = document.createElement("canvas");
            var scale = window.devicePixelRatio; // 获取设备的显示参数

            var ctx = canvas.getContext("2d")
            var rect = el.getBoundingClientRect(); // 获取元素相对于视察的偏移量

            var w = el.offsetWidth;
            var h = w/0.69;

            console.log(w)
            canvas.width = w * scale;
            canvas.height = h * scale;

            canvas.style.width = w;
            canvas.style.height = h;

            ctx.scale(scale, scale);
            ctx.translate(-rect.left, -rect.top); //设置context位置，值为相对于视窗的偏移量负值，让图片复位

            html2canvas(el, {
                scale : scale,
                canvas : canvas,
                width : w,
                height : h,
                logging : false,
                useCORS : true

            }).then(function(canvas) {
                var dataUrl = canvas.toDataURL("jpeg");
                saveImg.src = dataUrl;
            });
            */
        }
    }
}
</script>