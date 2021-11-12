import { createApp } from 'vue'
import App from './App.vue'

// Store
import store from './store'

// Tailwind
import './index.css'

// fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBars, faAngleDown, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret, faBars, faAngleDown, faQuoteRight)

// ScrollMagic


createApp(App)
    .component('font-awesome-icon',FontAwesomeIcon)
    .provide('store',store)
    .mount('#app')
