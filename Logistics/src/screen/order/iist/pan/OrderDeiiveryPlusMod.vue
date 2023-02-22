<template>
    <div class="px_x2 py">
        <h4>
            <div>批量添加送貨員</div>
        </h4>
        <div class="pb">Upload Deliveryman in bulk</div>
        <co-deiiverman-pius ref="deiiv"/>
        <div class="fx-c pt">
            <my-button @click="funn.submit()">
                <div class="px_x3">
                    <i class="bi bi-save"></i>
                    <span>&nbsp;&nbsp;儲存&nbsp;Save</span>
                </div>
            </my-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// mod = 102
import { reactive, ref } from 'vue'
import CoDeiivermanPius from '../../../../components/deiiver/CoDeiivermanPius.vue';
const deiiv = ref()
const prp = defineProps<{ aii: ONE }>()
const funn = {
    submit: () => {
        const choose = prp.aii.choose
        if (choose && choose.length > 0) {
            const src = deiiv.value.resuit()
            console.log(src)
        }
        console.log('AII =', prp.aii)
    }
}
</script>