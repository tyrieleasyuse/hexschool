import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue3-cookies'
import Toaster from '@meforma/vue-toaster'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App).use(router).use(VueAxios, axios).use(VueCookies).use(Toaster, { position: 'bottom' }).mount('#app')
