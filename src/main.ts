import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, Icon, NavBar, Tabbar, Toast } from 'vant';

const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(Toast);
app.mount('#app');
