<script setup lang="ts">
import AppAvatar from "@/components/dashboard/AppAvatar.vue";
import Breadcrumbs from "@/components/dashboard/Breadcrumbs.vue";
import ColorMode from "@/components/dashboard/ColorMode.vue";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { BreadcrumbItem } from "@/types";

defineProps<{
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  breadcrumbs: BreadcrumbItem[];
}>();
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b-1"
  >
    <div class="flex items-center justify-between gap-2 px-4 lg:px-6 w-full">
      <div class="flex items-center gap-2">
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <div class="flex items-center gap-2">
        <!-- <Button
          variant="ghost"
          class="flex items-center justify-center w-8 h-8 -mr-2 text-muted-foreground"
        >
          <Bell class="size-4.5" />
          <span class="sr-only">Toggle notification</span>
        </Button> -->
        <ColorMode />
        <AppAvatar :user="user" />
      </div>
    </div>
  </header>
</template>
