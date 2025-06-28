<script setup lang="ts">
import AppSidebar from '@/components/dashboard/AppSidebar.vue';
import AppSidebarHeader from '@/components/dashboard/AppSidebarHeader.vue';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { BreadcrumbItem } from '@/types';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
};

defineProps<{
  breadcrumbs: BreadcrumbItem[];
}>();
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <AppSidebarHeader :user="data.user" :breadcrumbs="breadcrumbs" />
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
