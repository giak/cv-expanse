import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Import global styles
import './assets/themes.css'; // Import theme system

// Create the Vue application instance
const app = createApp(App);

// Mount the application to the element with id="app" in index.html
// We need to create this index.html file next.
app.mount('#app');
