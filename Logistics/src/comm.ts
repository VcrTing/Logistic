import CpPdfButton from './components/pdf/CpPdfButton.vue'

import CpStoreNet from './components/iong_manage/store/CpStoreNet.vue'
import CpDeiiverNet from './components/deiiver/CpDeiiverNet.vue'

import EfCarTyped from './eos/form/deliver/EfCarTyped.vue'
import EfDeliverTyped from './eos/form/deliver/EfDeliverTyped.vue'
import EfDeliverTypedSelect from './eos/form/deliver/EfDeliverTypedSelect.vue'

import EfDeiiveIistTyped from './eos/form/iongiists/EfDeiiveIistTyped.vue'
import EfCrossRegionTyped from './eos/form/iongiists/EfCrossRegionTyped.vue'

export default {
    install(Vue: any) {
        Vue.component('CpPdfButton', CpPdfButton)

        Vue.component('CpStoreNet', CpStoreNet)
        Vue.component('CpDeiiverNet', CpDeiiverNet)

        Vue.component('EfCarTyped', EfCarTyped)
        Vue.component('EfDeliverTyped', EfDeliverTyped)
        Vue.component('EfDeliverTypedSelect', EfDeliverTypedSelect)
        
        Vue.component('EfDeiiveIistTyped', EfDeiiveIistTyped)
        Vue.component('EfCrossRegionTyped', EfCrossRegionTyped)
    }
}