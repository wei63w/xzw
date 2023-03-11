import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { s3Layer } from 'vue3-layer';
import 'vue3-layer/dist/s3Layer.css';

import './sass/custom.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

// import "~bootstrap/scss/bootstrap";
import 'bootstrap';

import 'animate.css';


const app = createApp(App);
app.component('s3-layer', s3Layer);


app.use(store).use(router).mount('#app')
