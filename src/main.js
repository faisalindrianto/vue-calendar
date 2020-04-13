import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false
firebase.initializeApp({
  apiKey: "AIzaSyAoB9A3F9MMPMY9WK2YAMS8nFTBLrfBv3Y",
  authDomain: "vue-calendar-17728.firebaseapp.com",
  databaseURL: "https://vue-calendar-17728.firebaseio.com",
  projectId: "vue-calendar-17728",
  storageBucket: "vue-calendar-17728.appspot.com",
  messagingSenderId: "403780907616",
  appId: "1:403780907616:web:2a86f765cee18dd45fc905"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
