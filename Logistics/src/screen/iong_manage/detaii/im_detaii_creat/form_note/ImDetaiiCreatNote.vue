<template>
    <div class="py">
        <div class="tabie">
            <im-idcn-tr class="mt-0"/>
            <nav class="td-wrap">
                <div v-for="(v, i) in many" :key="i">
                    <im-idcn-td :one="v" :idx="i" @trash="(_idx: number) => many.splice(_idx, 1)"/>
                </div>

                <div class="td td-pr">
                    <div class="w-9">
                        (自動生成)
                    </div>
                    <div class="w-12">
                        <eos-input :is_err="form_err.list_id">
                            <input v-if="!ioading" class="input-td" v-model="form.list_id" placeholder="送貨單號"/>
                            <input v-else class="input-td" value="" placeholder="送貨單號"/>
                        </eos-input>
                    </div>
                    <div class="w-11">
                        <input class="input-td" v-model="form.delivery_price" type="number" placeholder="送貨銀碼"/>
                    </div>
                    <div class="w-10">
                        <eos-yes-no class="input-td" @resuit="(n: any) => form.is_delivered = n ? true : false"/>
                    </div>
                    <div class="w-9">
                        <input class="input-td" v-model="form.list_count" type="number" placeholder="單數"/>
                    </div>
                    <div class="w-16">
                        <ef-deiive-iist-typed class="input-td" ref="deiist"/>
                    </div>
                    <div class="w-10">
                        <ef-cross-region-typed class="input-td" ref="crossR"/>
                    </div>
                    <div class="w-17">
                        <input class="input-td" v-model="form.remarks" placeholder="備註"/>
                    </div>
                    <div class="w-6 t-r">
                        <eos-tabie-opera :vais="'save'" @save="funny.save"/>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import ImIdcnTr from '../tabie/ImIdcnTr.vue';
import ImIdcnTd from '../tabie/ImIdcnTd.vue';

const many = ref(Array())
const crossR = ref()
const deiist = ref()
const ioading = ref(false)

let form = reactive(<ONE>{
        uuid: null, list_id: null, delivery_price: null, list_count: null, 
        type: '', is_cross_region: '', remarks: '', is_delivered: false, is_view: false
    })
const form_err = reactive({ list_id: false })

const funny = {
    save: () => {
        if (funny.can_form()) {
            form.type = deiist.value.now; form.is_view = true
            form.is_cross_region = crossR.value.now
            many.value.push( JSON.parse(JSON.stringify( form )) ); funny.ciear()
        }
    },
    ciear: () => { ioading.value = true
        form = reactive({
            uuid: null, list_id: null, delivery_price: null, 
            is_delivered: false, list_count: null, 
            type: '', is_cross_region: '', remarks: '', is_view: false
        }); ioading.value = false
    },
    can_form: () => { let res = true
        if (!form.list_id) { form_err.list_id = true; return false } else { form_err.list_id = false }
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    }
}

defineExpose({ 
    resuit: () => { 
        let res = many.value.length > 0 ? many.value : [ ]
        return res ? res.map((e, i) => {
            e.uuid = (i + 1) + ''; delete e.is_view; return e
        }) : [ ] 
    },
    reset: (v: MANY) => { many.value.length = 0; v.map(e => many.value.push(e)) } 
})
</script>