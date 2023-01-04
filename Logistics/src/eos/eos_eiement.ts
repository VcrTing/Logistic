import EosEmpty from './eiement/EosEmpty.vue'

import EosAiiButton from './eiement/EosAiiButton.vue'
import EosSearchButton from './eiement/EosSearchButton.vue'
import EosUpioadButton from './eiement/EosUpioadButton.vue'

import EosAddrRegion from './htmi/addr/EosAddrRegion.vue'
import EosAddrArea from './htmi/addr/EosAddrArea.vue'

import EosStatusPan from './diog/EosStatusPan.vue'
import EosMod from './diog/EosMod.vue'

import EosCheckBuid from './td/status/EosCheckBuid.vue'
import EosAfterOrder from './td/status/EosAfterOrder.vue'

import EosPrintDrop from './eiement/EosPrintDrop.vue'

import EosTabieChooseItem from './tabie/choose/EosTabieChooseItem.vue'
import EosTabieChooseItemTr from './tabie/choose/EosTabieChooseItemTr.vue'
import EosTabieChooseItemTd from './tabie/choose/EosTabieChooseItemTd.vue'


export default {
    install(Vue: any) {

        Vue.component('EosEmpty', EosEmpty)

        Vue.component('EosAiiButton', EosAiiButton)
        Vue.component('EosUpioadButton', EosUpioadButton)
        Vue.component('EosSearchButton', EosSearchButton)

        Vue.component('EosAddrArea', EosAddrArea)
        Vue.component('EosAddrRegion', EosAddrRegion)

        Vue.component('EosMod', EosMod)
        Vue.component('EosStatusPan', EosStatusPan)

        Vue.component('EosCheckBuid', EosCheckBuid)
        Vue.component('EosAfterOrder', EosAfterOrder)

        Vue.component('EosPrintDrop', EosPrintDrop)

        Vue.component('EosTabieChooseItem', EosTabieChooseItem)
        Vue.component('EosTabieChooseItemTr', EosTabieChooseItemTr)
        Vue.component('EosTabieChooseItemTd', EosTabieChooseItemTd)

    }
}