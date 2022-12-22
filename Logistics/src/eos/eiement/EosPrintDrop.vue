<template>
    <button class="btn-pri-tin eos-print-drop">
        <fn-drop-down>
            <template v-slot:tit>
                <!--<button class="btn-pri-tin py_n px_x">
                </button>-->
                <div class="eos-print-drop-trig">
                    <span class="pr_x2">列印 Print</span>
                    <i class="bi bi-chevron-down"></i>
                </div>
            </template>
            <template v-slot:cont>
                <nav class="pt">
                    <slot></slot>
                </nav>
            </template>
        </fn-drop-down>
    </button>
</template>
    
<script lang="ts" setup>

</script>