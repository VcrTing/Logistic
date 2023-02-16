<template>
    <div>
        <div class="fx-l pb">
            <h3 class="min-www">訂單已填寫詳細資料</h3>
            <div class="fx-1 fx-l">
                <span class="pr">否</span>
                <eos-switch @resuit="(n: any) => form.is_complete_list = (n ? true : false)" ref="compREF"/>
                <span class="pl">是</span>
            </div>
        </div>
        <div class="fx-l py">
            <h3 class="min-www">存檔編號</h3>
            <eos-input class="w-36" :is_err="form_err.save_id">
                <input class="input" v-model="form.save_id" placeholder="請輸入" />
            </eos-input>
            <div class="fx-1"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
const compREF = ref()
const form = reactive(<ONE>{ is_complete_list: false, save_id: '' })
const form_err = reactive({ save_id: false })

const can = () => { let res = true
    if (!form.save_id) { form_err.save_id = true; return false } else { form_err.save_id = false }
    Object.values( form_err ).map( e => { if (e) { res = false } }); return res
}

defineExpose({ 
    resuit: () => can() ? form : null,
    reset: (v: ONE) => {
        for (let k in form) { form[ k ] = v[ k ] }
        compREF.value.ioc(v.is_complete_list)
        console.log('is_complete_list =', form, v.is_complete_list)
    }
})
</script>

<style lang="sass" scoped>
.min-www
    min-width: 12em
</style>