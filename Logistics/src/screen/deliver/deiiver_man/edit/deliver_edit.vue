<template>
    <eos-iayout-screen>
        <eos-iayout-form @submit="submit" @back="back" :need_trash="true" @trash="trash">
            <eos-form-paner :tit="'送貨員信息'">
                <deliver-creat-base ref="base">
                    <ef-deliver-typed ref="typed" @change="changeType"/>
                </deliver-creat-base>
            </eos-form-paner>
            <div :class="{ 'eos-coiiapse-die': !is_car_paner, 'eos-coiiapse-show': is_car_paner }">
                <div class="py_row"></div>
                <eos-form-paner :tit="'貨車信息'">
                    <deliver-creat-car ref="car"/>
                </eos-form-paner>
            </div>
        </eos-iayout-form>
    </eos-iayout-screen>

</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import DeliverCreatCar from '../creat/form/DeliverCreatCar.vue';
import DeliverCreatBase from '../creat/form/DeliverCreatBase.vue';

import { deliver_man } from '../../../../himm/serv';
import { deiiPina } from '../../../../himm/store';
import { useRouter } from 'vue-router';
const rt = useRouter()

const car = ref()
const base = ref()
const typed = ref()

const one: ONE = deiiPina().one_deiiver
nextTick(() => { if (one) {
    base.value.reset(one); car.value.reset(one); 
    one.type ? typed.value.ioc(one.type) : undefined
    if (!one.id) { back() }
} })

const is_car_paner = ref<boolean>(false)
const changeType = (n: string) => { is_car_paner.value = (n != 'infantry') }
const submit = async function() {
    const data_base = base.value.resuit();
    const data_car = is_car_paner.value ? car.value.resuit() : null
    if (data_base) {
        data_base.type = typed.value.now; 
        const res = await deliver_man.patch({ ...data_base, ...data_car }, one.id)
        if (res) { back() }
    }
}
const back = () => rt.push('/admin/deliver_iist')
const trash = async () => { const res = await deliver_man.trash(one.id); if (res) back(); }
</script>