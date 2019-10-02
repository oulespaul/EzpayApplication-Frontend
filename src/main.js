import Vue from 'vue'
import App from './App.vue'
import routes from './router.js'

//StyleSheet
import 'bootstrap/dist/css/bootstrap.css'
import 'alertifyjs/build/css/alertify.css'
import 'alertifyjs/build/css/themes/default.css'


//Js
import 'bootstrap/dist/js/bootstrap'
import * as alertify from 'alertifyjs'
import * as jquery from 'jquery'

//Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

//Datetime


//bootstrap
import '../Bootstrap/css/freelanceredit.min.css';
import '../Bootstrap/vendor/jquery/jquery.min.js';
import '../Bootstrap/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '../Bootstrap/vendor/jquery-easing/jquery.easing.min.js';
import '../Bootstrap/js/jqBootstrapValidation.js';
import '../Bootstrap/js/contact_me.js';
import '../Bootstrap/vendor/fontawesome-free/css/all.min.css';


Vue.config.productionTip = false
Vue.prototype.jquery = jquery;
Vue.prototype.alertify = alertify;
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
    render: h => h(App),
    router:routes,
}).$mount('#app')