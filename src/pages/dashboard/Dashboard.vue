<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];
</script>

<template>
  <DashboardLayout :breadcrumbs="breadcrumbs">

  </DashboardLayout>
</template>
