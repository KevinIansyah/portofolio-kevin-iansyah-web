import Dashboard from '@/pages/dashboard/Dashboard.vue';
import Profile from '@/pages/dashboard/settings/Profile.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/dashboard/settings/profile',
    name: 'Settings Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
