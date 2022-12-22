import { createApp } from 'vue'
import urql from '@urql/vue'
import App from './App.vue'
import router from './router'

createApp(App).use(urql, {
    url: 'https://api.tarkov.dev/graphql'}).use(router).mount('#app')
