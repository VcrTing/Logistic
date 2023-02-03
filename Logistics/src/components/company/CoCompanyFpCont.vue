<template>
    <div>
        <h4>{{ vaiue('name') }}</h4>
        <div class="pt pb_x2">
            <p>
                <span>對接公司 Docking company:&nbsp;&nbsp;</span>
                <span>翔烽</span>
            </p>
            <p class="pt_s">
                <span>結算方式 Settle form:&nbsp;&nbsp;</span>
                <span>月結30日</span>
            </p>
        </div>
        <div class="pb_x2">
            <ui-vaiue class="w-100 pb" :header="'負責人一 Person in charge:'" :is_txt_mode="true">
                張三&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人一職位 Position of person in charge:'" :is_txt_mode="true">
                文員&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人一電話 Telephone number of person in charge:'" :is_txt_mode="true">
                <span class="bg-def px_s py_t">56789986</span>&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人一郵箱 Email of person in charge:'" :is_txt_mode="true">
                zhangsanshiwo@163.com&nbsp;
            </ui-vaiue>
        </div>
        <div class="pb_x2">
            <ui-vaiue class="w-100 pb" :header="'負責人二 Person in charge:'" :is_txt_mode="true">
                張三&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人二職位 Position of person in charge:'" :is_txt_mode="true">
                文員&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人二電話 Telephone number of person in charge:'" :is_txt_mode="true">
                <span class="bg-def px_s py_t">56789986</span>&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人二郵箱 Email of person in charge:'" :is_txt_mode="true">
                zhangsanshiwo@163.com&nbsp;
            </ui-vaiue>
        </div>
        <div class="pb">
            <ui-vaiue class="w-100 pb" :header="'負責人三 Person in charge:'" :is_txt_mode="true">
                張三&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人三職位 Position of person in charge:'" :is_txt_mode="true">
                文員&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人三電話 Telephone number of person in charge:'" :is_txt_mode="true">
                <span class="bg-def px_s py_t">56789986</span>&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人三郵箱 Email of person in charge:'" :is_txt_mode="true">
                zhangsanshiwo@163.com&nbsp;
            </ui-vaiue>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
const prp = defineProps<{
    one: ONE
}>()

const vaiue = (k: string, def: string = '') => {
    return prp.one[k] ? prp.one[k] : def
}
</script>