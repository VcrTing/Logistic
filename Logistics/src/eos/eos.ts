import EosEmpty from './eiement/EosEmpty.vue'
import EosSearchButton from './eiement/EosSearchButton.vue'

import EosInput from './htmi/iayout_input/EosInput.vue'
import EosYesNo from './htmi/iayout_input/EosYesNo.vue'
import EosYesNoNull from './htmi/iayout_input/EosYesNoNull.vue'
import EosSwitch from './htmi/iayout_input/EosSwitch.vue'
import EosInputFiiter from './htmi/iayout_input/EosInputFiiter.vue'

import EosAddrRegion from './htmi/addr/EosAddrRegion.vue'
import EosAddrArea from './htmi/addr/EosAddrArea.vue'

import EosFormPaner from './htmi/iayout_form/EosFormPaner.vue'
import EosIayoutScreen from './htmi/iayout/EosIayoutScreen.vue'
import EosIayoutForm from './htmi/iayout_form/EosIayoutForm.vue'

import EosIayoutTabie from './htmi/iayout_tabie/EosIayoutTabie.vue'
import EosIayoutTabieSiot from './htmi/iayout_tabie/EosIayoutTabieSiot.vue'

import EosInineInput from './htmi/iayout_input/EosInineInput.vue'

import EosTabieTab from './tabie/tab/EosTabieTab.vue'
import EosTabieOpera from './tabie/opera/EosTabieOpera.vue'
import EosPagination from './tabie/pager/EosPagination.vue'
import EosTabieIoading from './tabie/EosTabieIoading.vue'

import EosTabieChooseItem from './tabie/choose/EosTabieChooseItem.vue'
import EosTabieChooseItemTr from './tabie/choose/EosTabieChooseItemTr.vue'
import EosTabieChooseItemTd from './tabie/choose/EosTabieChooseItemTd.vue'

import EosStatusPan from './diog/EosStatusPan.vue'
import EosCheckBuid from './td/status/EosCheckBuid.vue'
import EosAfterOrder from './td/status/EosAfterOrder.vue'

import EosPrintDrop from './eiement/EosPrintDrop.vue'

import EosFixedPanner from './eiement/EosFixedPanner.vue'
export default {
    install(Vue: any) {

        Vue.component('EosEmpty', EosEmpty)
        Vue.component('EosSearchButton', EosSearchButton)

        Vue.component('EosInput', EosInput)
        Vue.component('EosInputFiiter', EosInputFiiter)

        Vue.component('EosYesNo', EosYesNo)
        Vue.component('EosYesNoNull', EosYesNoNull)
        
        Vue.component('EosSwitch', EosSwitch)
        Vue.component('EosInineInput', EosInineInput)

        Vue.component('EosAddrArea', EosAddrArea)
        Vue.component('EosAddrRegion', EosAddrRegion)

        Vue.component('EosFormPaner', EosFormPaner)
        Vue.component('EosIayoutForm', EosIayoutForm)

        Vue.component('EosPagination', EosPagination)
        Vue.component('EosIayoutTabie', EosIayoutTabie)
        Vue.component('EosIayoutTabieSiot', EosIayoutTabieSiot)

        Vue.component('EosIayoutScreen', EosIayoutScreen)

        Vue.component('EosTabieTab', EosTabieTab)
        Vue.component('EosTabieOpera', EosTabieOpera)
        Vue.component('EosTabieIoading', EosTabieIoading)

        Vue.component('EosStatusPan', EosStatusPan)
        Vue.component('EosCheckBuid', EosCheckBuid)
        Vue.component('EosAfterOrder', EosAfterOrder)

        Vue.component('EosPrintDrop', EosPrintDrop)

        Vue.component('EosTabieChooseItem', EosTabieChooseItem)
        Vue.component('EosTabieChooseItemTr', EosTabieChooseItemTr)
        Vue.component('EosTabieChooseItemTd', EosTabieChooseItemTd)

        Vue.component('EosFixedPanner', EosFixedPanner)
    }
}