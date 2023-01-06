<template>
    <img class="w-25" id="img" :src="auth"/>
    <my-button @click="funny.printed" :icon="'bi bi-file-earmark-arrow-down-fill'">
        确认印列 Print
    </my-button>
    <div class="imgs">
        导出结果：
        <div id="resuit"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas';
import auth from '../../../assets/AUTH.jpg'

const prp = defineProps<{ doms: string }>( )

const funny = reactive({
    printed() {
        const x = 30
        const y = 0
        const doms = document.getElementsByClassName( prp.doms )


        const pW = 594
        const pH = 841

        const jpf = new jspdf('p', 'pt', 'a4')

        for (let i= 0; i< doms.length; i++ ) {
            html2canvas(doms[ i ]).then((res: any) => {
                console.log('RES =', res.toDataURL())

                const _img = new Image()
                _img.src = auth
                _img.onload = () => {
                    const imgH = ((pW - x) / _img.width) * _img.height
                    jpf.addImage(_img, 'JPEG', x/2, ((pH) * i), (pW - x), imgH)
                    jpf.addPage()
                    if ((i + 1) == doms.length) {
                        jpf.save('TEST.pdf')
                    }
                }
            })

            // const imgH = ((pW - x) / _img.width) * _img.height

            // console.log('打印 =', x/2, (i * imgH), (pW - x), imgH)
            // jpf.addImage(_img, 'JPEG', x/2, (i) * imgH, (pW - x), imgH)
            // jpf.addPage()
        }
    }
})

defineExpose({
    printed: funny.printed
})
/*

        doms.map(async ds => {
            for (let i= 0; i< ds.length; i++ ) {
                jpf.addPage()
                // const cvs = await html2canvas(ds[ i ])
                
                const _img = new Image() // cvs.toDataURL('image/jpeg', 1)
                _img.src = auth
                console.log('src =', _img.src)
                // const cvsW = cvs.width
                // const cvsH = cvs.height

                const imgH = pW / _img.width * _img.height
                console.log('img wh =', pW, imgH)

                jpf.addImage(_img, 'JPEG', 0, 0, pW, imgH)
                if (imgH < pH) {
                    jpf.addImage(_img, 'JPEG', 0, 0, pW, imgH)
                } else {
                    console.log('图片高度超出')
                    let tpH = imgH
                    for(let i= 0; tpH > 0; i++ ) {
                        jpf.addImage(_img, 'JPEG', 0, -i * pH, pW, imgH)
                        tpH -= pH
                        if (tpH > 0) {
                            jpf.addPage()
                        }
                    }
                }
                // return tt.toDatURL()
            }
        });

        
        */
</script>