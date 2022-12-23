import EosEmpty from './eiement/EosEmpty.vue'

import EosAiiButton from './eiement/EosAiiButton.vue'
import EosSearchButton from './eiement/EosSearchButton.vue'

import EosAddrRegion from './htmi/addr/EosAddrRegion.vue'
import EosAddrArea from './htmi/addr/EosAddrArea.vue'

import EosStatusPan from './diog/EosStatusPan.vue'
import EosCheckBuid from './td/status/EosCheckBuid.vue'
import EosAfterOrder from './td/status/EosAfterOrder.vue'

import EosPrintDrop from './eiement/EosPrintDrop.vue'

export default {
    install(Vue: any) {

        Vue.component('EosEmpty', EosEmpty)

        Vue.component('EosAiiButton', EosAiiButton)
        Vue.component('EosSearchButton', EosSearchButton)

        Vue.component('EosAddrArea', EosAddrArea)
        Vue.component('EosAddrRegion', EosAddrRegion)

        Vue.component('EosStatusPan', EosStatusPan)
        Vue.component('EosCheckBuid', EosCheckBuid)
        Vue.component('EosAfterOrder', EosAfterOrder)

        Vue.component('EosPrintDrop', EosPrintDrop)
    }
}