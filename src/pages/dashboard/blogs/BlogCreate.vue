<script setup lang="ts">
import Heading from "@/components/dashboard/Heading.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { type BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Blogs",
    href: "/dashboard/blogs",
  },
  {
    title: "Create",
    href: "/dashboard/blogs/create",
  },
];
</script>

<template>
  <DashboardLayout :breadcrumbs="breadcrumbs">
    <div class="flex flex-1 flex-col gap-6 p-4 lg:p-6">
      <Heading title="Create Blog" description="Create your blog post" />
      <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  </DashboardLayout>
</template>
