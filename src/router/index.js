import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Comments from '../components/comments/Comments.vue';


const routes = [
  { path: '/', name: 'Home', component: App },
  { path: '/post/:id', component: Comments, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
