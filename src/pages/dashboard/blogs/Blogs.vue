<script setup lang="ts">
import DataTableBlog from '@/components/dashboard/DataTableBlog.vue';
import Heading from '@/components/dashboard/Heading.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Blogs',
    href: '/dashboard/blogs',
  },
];
</script>

<template>
  <DashboardLayout :breadcrumbs="breadcrumbs">
    <div class="flex flex-1 flex-col gap-6 p-4 lg:p-6">
      <Heading
        title="Blog Management"
        description="View, create, and manage your blog posts"
      />
      <DataTableBlog />
    </div>
  </DashboardLayout>
</template>
