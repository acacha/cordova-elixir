
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('cordova-logo', require('./components/CordovaLogo.vue'));

import { eventHub } from './eventHub';

const app = new Vue({
    el: '#app',
    created: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    destroyed: function() {
        document.removeEventListener('deviceready', this.onDeviceReady, false);
    },
    methods: {
        onDeviceReady: function() {
            app.receivedEvent('deviceready');
        },
        // Broadcast deviceready event to all vue components using eventHub
        receivedEvent: function(id) {
            eventHub.$emit('deviceready');
        }
    }
});


