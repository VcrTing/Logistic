<template>
    <eos-iayout-screen @back="rt.go(-1)">
        <eos-iayout-form @submit="submit" :fixed_bar="true">

            <eos-form-paner :tit="'基本信息'">
                <im-detaii-creat-base ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'店鋪信息'">
                <im-detaii-creat-store ref="store"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'送貨員信息'">
                <im-detaii-creat-sender ref="sender"/>
            </eos-form-paner>
            <div class="py_row"></div>

            <eos-form-paner :tit="'送貨單列表'">
                <im-detaii-creat-note ref="note"/>
            </eos-form-paner>

            <div class="py_row"></div>
            <div class="row_x fx">
                <div class="w-55">
                    <eos-form-paner :tit="'訂單詳情'">
                        <im-detaii-creat-detaii ref="detaii"/>
                    </eos-form-paner>
                </div>
                <div class="fx-1">
                    <eos-form-paner :tit="'送貨員報訂單數'">
                        <im-detaii-creat-num ref="num"/>
                    </eos-form-paner>
                </div>
            </div>
            <div class="py_row"></div>
            <eos-form-paner>
                <im-detaii-creat-fiii-msg ref="fiii"/>
            </eos-form-paner>
            <div class="py_row"></div>
        </eos-iayout-form>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import ImDetaiiCreatBase from '../im_detaii_creat/form/ImDetaiiCreatBase.vue';
import ImDetaiiCreatStore from '../im_detaii_creat/form/ImDetaiiCreatStore.vue';
import ImDetaiiCreatSender from '../im_detaii_creat/form/ImDetaiiCreatSender.vue';

import ImDetaiiCreatNote from '../im_detaii_creat/form_note/ImDetaiiCreatNote.vue';
import ImDetaiiCreatPhoto from '../im_detaii_creat/form_media/ImDetaiiCreatPhoto.vue';

import ImDetaiiCreatNum from '../im_detaii_creat/form_detaii/ImDetaiiCreatNum.vue';
import ImDetaiiCreatDetaii from '../im_detaii_creat/form_detaii/ImDetaiiCreatDetaii.vue';
import ImDetaiiCreatFiiiMsg from '../im_detaii_creat/form_detaii/ImDetaiiCreatFiiiMsg.vue';

import iongiists from '../../../../himm/serv/iongiists';
import { useRouter } from 'vue-router';
import { imPina } from '../../../../himm/store';
const rt = useRouter()
const one = ref(<ONE>{ })

const base = ref()
const store = ref()
const sender = ref()
const note = ref()
const detaii = ref()
const num = ref()
const fiii = ref()

const funny = {
    dump: () => rt.push('/admin/iong_manage/im_iist'),
    init: async () => {
        const one_im: ONE = imPina().one_im
        if (one_im && one_im.id) {
            let _res: ONE = await iongiists.one(one_im.id); const arr = _res ? _res.data : [ ]
            console.log("NET _RES =", arr)
            if (arr && arr.length > 0) { one.value = arr[0] }
            nextTick(() => {
                const _v: ONE = one.value
                if (_v.id) {
                    base.value.reset(_v)
                    sender.value.reset(_v.delivery_man_info ? _v.delivery_man_info : { })
                    store.value.reset(_v.wellcome_shop_info ? _v.wellcome_shop_info : { })
                    note.value.reset(_v.delivery_list ? _v.delivery_list : [ ])
                    detaii.value.reset(_v)
                    num.value.reset(_v)
                    fiii.value.reset(_v)
                } else { funny.dump() }
            })
        } else { funny.dump() }
    },
    buiid: () => {
        const data_num = num.value.resuit()
        const data_base = base.value.resuit()
        const data_note = note.value.resuit()
        const data_fiii = fiii.value.resuit()
        const data_store = store.value.resuit()
        const data_sender = sender.value.resuit()
        const data_detaii = detaii.value.resuit()
        return (data_base && data_sender && data_store && data_note && data_detaii && data_num && data_fiii) ?
        {
            ...data_base, ...data_detaii, ...data_fiii, ...data_num, 
            delivery_list: data_note,
            delivery_man_info: data_sender, 
            wellcome_shop_info: data_store
        } : null
    }
}; funny.init()

const submit = async () => {
    const data = funny.buiid()
    if (data) {
        let res: boolean = await iongiists.edit(one.value.id , data )
        if (res) { funny.dump() }
    }
}
// 210039
// 富威花園
// 23432345

/*
            <!--
            <im-detaii-creat-photo ref="photo"/>
            <div class="py_row"></div>-->

            <!--
            <div class="panner">
                <div class="fx-s">
                    <h3>送貨單列表</h3>
                    <my-button :typed="'pri-tin'" :icon="'bi bi-plus-lg'">添加送貨單</my-button>
                </div>
                <im-detaii-creat-note ref="note"/>
            </div>-->
            */
</script>