<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import type { BreadcrumbItem as Crumb } from '@/types';

const props = defineProps<{
  breadcrumbs: Crumb[];
}>();
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(item, index) in props.breadcrumbs" :key="item.href">
        <BreadcrumbItem>
          <BreadcrumbLink :href="item.href">{{ item.title }}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < props.breadcrumbs.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
