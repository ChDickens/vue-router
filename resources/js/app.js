import './bootstrap';

import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css'

import Routes from './routes.js';

import App from './views/App';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    router: Routes,
    vuetify : new Vuetify(),
    render: h => h(App)
});

export default app;