import BlogEdit from '@/pages/dashboard/blogs/BlogEdit.vue';
import BlogInsert from '@/pages/dashboard/blogs/BlogInsert.vue';
import Blogs from '@/pages/dashboard/blogs/Blogs.vue';
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
  {
    path: '/dashboard/blogs',
    name: 'Blogs',
    component: Blogs,
  },
  {
    path: '/dashboard/blogs/insert',
    name: 'Insert',
    component: BlogInsert,
  },
  {
    path: '/dashboard/blogs/:id/edit',
    name: 'Edit',
    component: BlogEdit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
