<template>
    <div class="td" :class="{ 'td-focus-err': one.is_focus }">
        <eos-tabie-choose-item-td :one="one" :choose="choose">
            <div class="w-9">{{one.order_date}}</div>
            <div class="w-12 pr_s">{{one.cf_number}}</div>
            <div class="w-12">{{one.wb_number}}</div>
            <div class="w-7">{{one.group}}</div>
            <div class="w-9 pr">{{one.delivery_time}}</div>
            <div class="w-10 pr_s">
                <div @click="() => { app.do_panner(1) }" class="pri hand">{{one.order_no}}</div>
            </div>
            <div class="w-9">
                {{one.reciver.name_en}}<br/>
                {{one.reciver.name_ch}}
            </div>
            <div class="w-10 pr_s">{{one.reciver.phone}}</div>
            <div class="w-16">
                {{one.reciver.addr}}
            </div>
            <div class="w-6 fx-r">
                <eos-tabie-opera :vais="'edit_print'" :is_icon="true" 
                    @edit="rt.push('/admin/order_iist/edit')"
                    @print="rt.push('/admin/order_iist/pdf')"
                    />
            </div>
        </eos-tabie-choose-item-td>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { appPina } from "../../../../himm/store"
const app = appPina()
const rt = useRouter()
const prp = defineProps<{
    idx: number, one: ONE, choose: MANY
}>()
</script>