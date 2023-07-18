import './assets/style.css' // Import de Tailwind

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyByaBl7SvaupSRCb3K3tEzmVbtKGr3K7HY",
    authDomain: "ca-potage-app.firebaseapp.com",
    projectId: "ca-potage-app",
    storageBucket: "ca-potage-app.appspot.com",
    messagingSenderId: "940068449812",
    appId: "1:940068449812:web:7f712ec01ef727d8ed4101",
    measurementId: "G-9JVJF1V3RT"
  };

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
