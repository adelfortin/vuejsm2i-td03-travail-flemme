import { createRouter, createWebHistory } from 'vue-router';
import TravailPage from '@/components/pages/TravailPage.vue';
import FlemmePage from '@/components/pages/FlemmePage.vue';

const routes = [
  {
    path: '/travail',
    name: 'Travail',
    component: TravailPage
  },
  {
    path: '/flemme',
    name: 'Flemme',
    component: FlemmePage
  }
  // other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

