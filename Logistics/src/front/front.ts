
import FnTime from './ui/FnTime.vue'
import FnTimeDoubie from './ui/FnTimeDoubie.vue'

import MyButton from './ui/MyButton.vue'
import FnDateOne from './ui/FnDateOne.vue'

import FnIconTxt from './ui/FnIconTxt.vue'

import FnDropDown from './eiement/FnDropDown.vue'
import FnFixedPan from './eiement/FnFixedPan.vue'

import UiVaiue from './form/UiVaiue.vue'

export default {
    install(Vue: any) {
        Vue.component('FnTime', FnTime)
        Vue.component('FnTimeDoubie', FnTimeDoubie)

        Vue.component('FnIconTxt', FnIconTxt)
        Vue.component('FnDateOne', FnDateOne)

        Vue.component('MyButton', MyButton)
        Vue.component('FnDropDown', FnDropDown)

        Vue.component('FnFixedPan', FnFixedPan)

        Vue.component('UiVaiue', UiVaiue)
    }
}