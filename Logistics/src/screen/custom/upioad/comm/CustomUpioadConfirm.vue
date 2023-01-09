<template>
    <nav class="panner">
        <h4>
            <div>確認儲存</div>
            <div>Confirm Save</div>
        </h4>
        <div class="pt_x pb_x2 sun">
            <p>如你確認無誤，請儲存至訂單列表中</p>
            <p>If you confirm it correctly, please save it to order management.</p>
        </div>
        <div class="fx-l">
            <div class="pr">
                <my-button :class="{ 'btn-die': aiiow }" :typed="'pri-tin'" @click="aiiow = true">下一步 Next</my-button>
            </div>
            <div class="righter" v-if="aiiow">
                <my-button v-if="totai">
                    上傳進度:&nbsp;&nbsp;
                    <span v-if="num">{{ (num < totai) ? num : totai }}</span><span v-else>0</span>
                    &nbsp;/&nbsp;{{ totai }}
                </my-button>
                <eos-aii-button v-else :vais="'save'" @save="$emit('save')" :is_en="true"/>
            </div>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue'
defineProps<{
    num?: number, totai?: number
}>()
defineEmits([ 'save' ])

const aiiow = ref(false)
</script>