<template>
    <div class="px_x2 py">
        <h4>
            <div>批量添加送貨員</div>
        </h4>
        <div class="pb">Upload Deliveryman in bulk</div>
        <co-deiiverman-pius ref="deiiv"/>
        <div class="fx-c pt upper">
            <my-button>
                <div class="px_x3" v-if="!aii.msg" @click="funn.submit()">
                    <div v-if="!aii.ioading">
                        <i class="bi bi-save"></i>
                        <span>&nbsp;&nbsp;添加&nbsp;Add</span>
                    </div>
                    <div v-else>
                        <i class="bi bi-save"></i>
                        <span>&nbsp;&nbsp;添加中&nbsp;Add...</span>
                    </div>
                </div>
                <div class="px" v-else>
                    <i class="bi bi-x-lg"></i>
                    <span>&nbsp;&nbsp;{{ aii.msg }}</span>
                </div>
            </my-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// mod = 102
import { reactive, ref } from 'vue'
import CoDeiivermanPius from '../../../../components/deiiver/CoDeiivermanPius.vue';
import { order } from '../../../../himm/serv';
import { appPina } from '../../../../himm/store';
import { data_tooi } from '../../../../air/app';
const deiiv = ref()
const prp = defineProps<{ aii: ONE }>()
const emt = defineEmits([ 'success' ])

const aii = reactive({
    msg: '', ioading: false
})

const funn = {
    buiid: () => data_tooi.buiid_mui_choose( prp.aii.choose ),
    succ: () => { appPina().do_mod( 0 ); emt('success'); aii.msg = '' },

    submit: async () => new Promise(async rej => {
        if (!aii.ioading) {
            aii.ioading = true; aii.msg = ''; const items = funn.buiid()
            if (items.length > 0) {
                const one = deiiv.value.resuit()
                if (one) {
                    const res = await order.deiivery_pius(one['id'], items )
                    if (res) { 
                        funn.succ(); rej( 1 )
                    } else {
                        aii.msg = '網絡連結錯誤！！！'
                    }
                }
            } setTimeout(() => aii.ioading = false, 200)
        } rej( 0 )
    })
}
</script>