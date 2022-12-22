<template>
    <div class="py f-row">
        <eos-input class="w-25 w-333-p" :is_err="false" :header="'場表月份：'">
            <fn-time @resuit="(v: string) => form.date = v" />
        </eos-input>
        <div class="w-56 w-666-p fx-s">
            <eos-input class="fx-1" :is_err="form_err.list_id" :header="'場表編號：'">
                <div class="fx-l">
                    <input class="input fx-1" v-model="form.list_id" placeholder="請輸入" />
                    <span class="px_s"></span>
                    <button class="py_n px_x2 btn-sec" @click="check">先核查</button>
                </div>
            </eos-input>
            <div class="w-10"></div>
            <eos-input class="w-25 w-28-p" :is_err="false" :header="'後加單：'" :is_txt_mode="true">
                <div class="fx-l">
                    <span class="pr">否</span>
                    <eos-switch @resuit="(v: boolean) => form.is_late_list = v"/>
                    <span class="pl">是</span>
                </div>
            </eos-input>
        </div>
    </div>

    <im-dcb-status v-if="(is_repeat > -1)" :is_repeat="(is_repeat == 1)"/>

    <div class="py">
        <eos-input class="w-100" :is_err="false" :header="'備註：'">
            <textarea v-model="form.remarks" class="input" placeholder="請輸入"></textarea>
        </eos-input>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import { iongiists } from '../../../../../himm/serv';
import ImDcbStatus from './inner/ImDcbStatus.vue';

const is_repeat = ref<number>(-1)

const form = reactive({ list_id: '', remarks: '', date: '', is_late_list: false })
const form_err = reactive({ list_id: false })

const check = async () => {
    if ( form.list_id ) {
        let res = await iongiists.check( form.list_id )
        is_repeat.value = res ? 1 : 0; form_err.list_id = false
    } else { const _c = can() }
}

const can = () => { let res = true
    if (!form.list_id) { form_err.list_id = true; return false } else { form_err.list_id = false }
    Object.values( form_err ).map( e => { if (e) { res = false } }); return res
}

defineExpose({ resuit: () => can() ? form : null })
</script>