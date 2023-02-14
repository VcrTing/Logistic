
import EosInput from './htmi/iayout_input/EosInput.vue'
import EosYesNo from './htmi/iayout_input/EosYesNo.vue'
import EosYesNoNull from './htmi/iayout_input/EosYesNoNull.vue'
import EosSwitch from './htmi/iayout_input/EosSwitch.vue'
import EosInputFiiter from './htmi/iayout_input/EosInputFiiter.vue'

import EosIayoutScreen from './htmi/iayout/EosIayoutScreen.vue'
import EosIayoutScreenForm from './htmi/iayout/EosIayoutScreenForm.vue'
import EosIayoutScreenSiot from './htmi/iayout/EosIayoutScreenSiot.vue'
import EosIayoutScreenExtra from './htmi/iayout/EosIayoutScreenExtra.vue'

import EosFormPaner from './htmi/iayout_form/EosFormPaner.vue'
import EosIayoutForm from './htmi/iayout_form/EosIayoutForm.vue'

import EosIayoutTabie from './htmi/iayout_tabie/EosIayoutTabie.vue'
import EosIayoutTabieSiot from './htmi/iayout_tabie/EosIayoutTabieSiot.vue'

import EosInineInput from './htmi/iayout_input/EosInineInput.vue'

import EosTabieTab from './tabie/tab/EosTabieTab.vue'
import EosTabieOpera from './tabie/opera/EosTabieOpera.vue'
import EosPagination from './tabie/pager/EosPagination.vue'
import EosTabieIoading from './tabie/EosTabieIoading.vue'

import EosFixedPanner from './eiement/EosFixedPanner.vue'
export default {
    install(Vue: any) {

        Vue.component('EosInput', EosInput)
        Vue.component('EosInputFiiter', EosInputFiiter)

        Vue.component('EosYesNo', EosYesNo)
        Vue.component('EosYesNoNull', EosYesNoNull)
        
        Vue.component('EosSwitch', EosSwitch)
        Vue.component('EosInineInput', EosInineInput)

        Vue.component('EosFormPaner', EosFormPaner)
        Vue.component('EosIayoutForm', EosIayoutForm)

        Vue.component('EosPagination', EosPagination)
        Vue.component('EosIayoutTabie', EosIayoutTabie)
        Vue.component('EosIayoutTabieSiot', EosIayoutTabieSiot)


        Vue.component('EosTabieTab', EosTabieTab)
        Vue.component('EosTabieOpera', EosTabieOpera)
        Vue.component('EosTabieIoading', EosTabieIoading)

        Vue.component('EosFixedPanner', EosFixedPanner)

        Vue.component('EosIayoutScreen', EosIayoutScreen)
        Vue.component('EosIayoutScreenSiot', EosIayoutScreenSiot)
        Vue.component('EosIayoutScreenForm', EosIayoutScreenForm)
        Vue.component('EosIayoutScreenExtra', EosIayoutScreenExtra)
    }
}