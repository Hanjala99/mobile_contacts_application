import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'

// fontsawesome css
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

// Bootstrap css , JS 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// main css file
import '../src/style.css'
import '../src/responsive.css'


createApp(App).use(router).mount('#app')
