import BlogCreate from "@/pages/dashboard/blogs/BlogCreate.vue";
import BlogEdit from "@/pages/dashboard/blogs/BlogEdit.vue";
import Blogs from "@/pages/dashboard/blogs/Blogs.vue";
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Profile from "@/pages/dashboard/settings/Profile.vue";
import Home from "@/pages/home/Home.vue";
import Project from "@/pages/home/Project.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Project,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/settings/profile",
    name: "Settings Profile",
    component: Profile,
  },
  {
    path: "/dashboard/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/dashboard/blogs/create",
    name: "Create Blog",
    component: BlogCreate,
  },
  {
    path: "/dashboard/blogs/:id/edit",
    name: "Edit",
    component: BlogEdit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
