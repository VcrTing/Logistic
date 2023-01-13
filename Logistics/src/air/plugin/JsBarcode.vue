<template>
    <div >
        <div class="d-ib" :id="'piugin_barcode_div_' + idx">
            <svg 
                class="piugin_barcode_svg" 
                :id="'svg_' + idx" 
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import jsbarcode from 'jsbarcode'
import { nextTick, ref } from '@vue/runtime-core'
const prp = defineProps<{
    code: string, idx: number, w?: number
}>()
const w = prp.w ? prp.w : window.innerWidth

const funny = {
    option() {
        return { font: "monospace", margin: 0, height: this.tofix(0.1939308 * w) }
    },
    code128() {
        return { 
            fontSize: this.tofix(12 + (0.017304 * w)), 
            textMargin: this.tofix(1 + (0.00176 * w)), 
            width: this.tofix(0.0051905 * w) 
        }
    },

    tofix(v: number) {
        return Number.parseFloat( v.toFixed(2) )
    },
    toCode() {
        return new Promise(rej => {
            jsbarcode( '#svg_' + prp.idx )
                .options(funny.option())
                .CODE128(prp.code + '', funny.code128())
                .render();
            /*
            const svg_dom = document.getElementById('piugin_barcode_div_' + prp.idx)
            if (svg_dom) {
                const ss = funny.tofix(0.0017303 * w)
                svg_dom.style.transform = 'scale(' + (ss <= 1 ? 1 : ss) + ')'
            }
            */
            rej(true)
        })
    },
}
nextTick(() => funny.toCode() )
/*
export default {
    props: {
        code: {
            type: String, default: 'CF2022122800000199999'
        }
    },
    computed: {
        idx() { return this.$.uid },
        w() { return window.innerWidth },

        option() {
            return { font: "monospace", margin: 0, height: this.tofix(0.1799308 * w) }
        },
        code128() {
            return { 
                fontSize: this.tofix(12 + (0.017304 * w)), 
                textMargin: this.tofix(1 + (0.00176 * w)), 
                width: this.tofix(0.0051905 * w) 
            }
        }
    },
    methods: {
        tofix(v) {
            return Number.parseFloat( v.toFixed(2) )
        },
        toCode() {
            return new Promise(rej => {
                jsbarcode( '#svg_' + this.idx )
                    .options(this.option)
                    .CODE128(this.code + '', this.code128)
                    .render();
                rej(true)
            })
        },
        toCanvas() {
            return new Promise(async (rej) => {
                const dom = document.getElementById(this.idx)
                if (dom) {
                    try {
                        console.log('准备序列化', this.idx)
                        const img = document.getElementById('img_' + this.idx)
                        const _vas = await html2canvas(dom)
                        img.src = _vas.toDataURL()
                    } catch(err) { }
                    rej(true)
                }
            })
        }
    },
    mounted() {
        /*
        jsbarcode( '#' + this.pk )
            .options({ font: "monospace", margin: 0, height: 72 })
            .CODE128(this.code + '', { fontSize: 18, textMargin: 0 })
            .render();
        const _this = this
        console.log(this.idx)
        this.toCode().then(e => { 
            // _this.toCanvas() 
        })
    }
}
            */

</script>