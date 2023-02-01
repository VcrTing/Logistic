<template>
    <div> 
        <div class="py f-row">
            <eos-input class="w-25 w-25-p" :is_err="form_err.distribute_time" :header="'分配時間：'">
                <fn-time @resuit="(v: string) => form.distribute_time = v"/>
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.large_item_count" :header="'大件數量：'">
                <input class="input" v-model="form.large_item_count" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.small_item_count" :header="'小件數量：'">
                <input class="input" v-model="form.small_item_count" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-25 w-25-p" :is_err="form_err.weight" :header="'重量：'">
                <input class="input" v-model="form.weight" placeholder="請輸入" />
            </eos-input>
        </div>

        <div class="py f-row">
            <eos-input class="w-100" :is_err="false" :header="'備註：'">
                <textarea class="input" v-model="form.remarks" placeholder="請輸入" ></textarea>
            </eos-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'

const form: ONE = reactive({
    distribute_time: '', large_item_count: '', small_item_count: '', weight: '', remarks: ''
})
const form_err = reactive({
    distribute_time: false, large_item_count: false, small_item_count: false, weight: false
})

const can = function() { let res = true
    if (!form.distribute_time) { form_err.distribute_time = true; return false } else { form_err.distribute_time = false }
    if (!form.weight) { form_err.weight = true; return false } else { form_err.weight = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
})
</script>