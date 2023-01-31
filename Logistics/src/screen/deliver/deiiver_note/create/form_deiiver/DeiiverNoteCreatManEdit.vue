<template>
    <nav class="panner fx-l">
        <h3>編輯送貨員信息
            &nbsp;
        </h3>
        <div class="py f-row">
            <div class="fx-l">
                <eos-switch @resuit="(v: boolean) => form.is_edit = v"/>
            </div>
        </div>
    </nav>
    <div class="coiiapse" :class="{ 'coiiapse-iive': form.is_edit }">
        <div class="">
            <div class="py_row"></div>
            <nav class="panner upper">
                <im-detaii-creat-sender/>
            </nav>
        </div>
        <div class="py_row"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import ImDetaiiCreatSender from '../../../../iong_manage/detaii/im_detaii_creat/form/ImDetaiiCreatSender.vue';

const form = reactive({
    is_edit: false
})
</script>