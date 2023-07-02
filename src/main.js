import { createApp } from 'vue';
import App from './App.vue';
import Home from './Home.vue';
import About from './About.vue';
import NotFound from './NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/:notFound(.*)', component: NotFound }
    ]
  });


  const app = createApp(App);
app.use(router);

  

app.mount('#app');
