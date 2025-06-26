<script setup lang="ts">
import AppSidebar from '@/components/dashboard/AppSidebar.vue';
import AppSidebarHeader from '@/components/dashboard/AppSidebarHeader.vue';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { BreadcrumbItem } from '@/types';

defineProps<{
  breadcrumbs: BreadcrumbItem[];
}>();
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <AppSidebarHeader :breadcrumbs="breadcrumbs" />
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
