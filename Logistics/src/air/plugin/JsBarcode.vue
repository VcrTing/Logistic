<template>
    <svg :id="pk"/>
</template>

<script lang="javascript">
import jsbarcode from 'jsbarcode'
export default {
    props: {
        pk: {
            type: String, default: '_bar_code'
        },
        code: {
            type: String, default: 'CF2022122800000199999'
        }
    },
    mounted() {
        /*
        jsbarcode( '#' + this.pk )
            .options({ font: "monospace", margin: 0, height: 72 })
            .CODE128(this.code + '', { fontSize: 18, textMargin: 0 })
            .render();
            */
        jsbarcode( '#' + this.pk )
            .options({ font: "monospace", margin: 0, height: 104 })
            .CODE128(this.code + '', { fontSize: 22, textMargin: 2, width: 3 })
            .render();
    }
}
</script>