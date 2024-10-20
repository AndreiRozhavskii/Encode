import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Импорт стилей Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Импорт иконок

const app = createApp(App);
const vuetify = createVuetify();

app.use(vuetify);
app.mount('#app');
