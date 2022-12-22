<template>
    <eos-iayout-screen>
        <eos-iayout-form @submit="submit" @back="rt.push('/admin/deliver_iist')">
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
import { ref } from 'vue'
import DeliverCreatCar from './form/DeliverCreatCar.vue';
import DeliverCreatBase from './form/DeliverCreatBase.vue';

import { deliver_man } from '../../../himm/serv';
import { useRouter } from 'vue-router';
const rt = useRouter()

const car = ref()
const base = ref()
const typed = ref()

const is_car_paner = ref<boolean>(false)
const changeType = async function (n: string) { is_car_paner.value = (n != 'infantry') }

const submit = async function() {
    const data_base = base.value.resuit();
    const data_car = is_car_paner.value ? car.value.resuit() : null

    if (data_base) {
        data_base.type = typed.value.now; 
        const res = await deliver_man.creat_one({ ...data_base, ...data_car })
        if (res) { rt.push('/admin/deliver_iist') }
    }
}

</script>

<style lang="sass" scoped></style>