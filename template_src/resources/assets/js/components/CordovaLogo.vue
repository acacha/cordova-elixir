<template>
    <div id="cordovasplash" class="cordovasplash" @deviceready="onDeviceReady" >
        <div class="logo">
            <img src="img/logo.png" alt="Cordova logo">
        </div>
        <div class="textlogo">
            <img src="img/vuejs.png" alt="Vue logo" class="vuejslogo">
            <h1>Apache <br/>Cordova</h1>
            <div id="deviceready" class="blink">
                <p class="event received" v-if="ready">Device is Ready</p>
                <p class="event listening" v-else>Connecting to Device</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    h1 {
        font-size:24px;
        font-weight:normal;
        margin:0px;
        overflow:visible;
        padding:0px;
        text-align:center;
    }

    .vuejslogo {
        height: auto;
        width: auto;
        max-width: 50px;
        max-height: 50px;
        display: block;
        margin: 0 auto;
    }

    .cordovasplash {
        display:flex;
        align-content: center;
        align-items: center;
        flex-direction: column;
    }

    .textlogo {
        align-self: flex-start ;
        width: 100%;
    }

    /* Landscape layout (with min-width) */
    @media screen and (min-aspect-ratio: 1/1) and (min-width:400px) {
        .cordovasplash {
            flex-direction: row;
        }
        .textlogo {
            margin: 2em;
            align-self: center ;
            width: 100%;
        }
    }

    .event {
        border-radius:4px;
        -webkit-border-radius:4px;
        color:#FFFFFF;
        font-size:12px;
        margin:0px 0px;
        padding:2px 2px;
        text-align: center;
    }

    .event.listening {
        background-color:#333333;
    }

    .event.received {
        background-color:#4B946A;
    }

    @keyframes fade {
        from { opacity: 1.0; }
        50% { opacity: 0.4; }
        to { opacity: 1.0; }
    }

    @-webkit-keyframes fade {
        from { opacity: 1.0; }
        50% { opacity: 0.4; }
        to { opacity: 1.0; }
    }

    .blink {
        animation:fade 3000ms infinite;
        -webkit-animation:fade 3000ms infinite;
    }
</style>

<script>
    import { eventHub } from '../eventHub';

    export default {
        data: function () {
            return {
                ready: false
            }
        },
        created: function () {
            eventHub.$on('deviceready', this.onDeviceReady);
        },
        mounted() {
            console.log('Component CordovaLogo ready.');
        },

        methods: {
            onDeviceReady() {
                console.log('Executing onDeviceReady!');
                this.ready = true;
            }
    }
    }
</script>


